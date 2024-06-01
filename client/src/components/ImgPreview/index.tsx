import React from 'react'

import { useResizeDetector } from 'react-resize-detector';

import styles from "./ImgPreview.module.css"

type cancelImageType = () => void

interface ImgPreviewProps {
    width?: number;
    fullwidth?: boolean;
    height?: number;
    fullheight?: boolean;
    img64Base?: string | undefined;
    onCancelImg?: cancelImageType
}

const ImgPreview:React.FC<ImgPreviewProps> = ({ fullwidth=false, fullheight=false, width, height, img64Base, onCancelImg }) => {

    const { width: containerWidth, height: containerHeight, ref: containerRef } = useResizeDetector<HTMLDivElement>();
    const canvasRef  = React.useRef<HTMLCanvasElement>(null)
    const [showCancelBtn, setShowCancelBtn] = React.useState(false)

    const componentWidth = React.useMemo(():string => {
        if (fullwidth) return '100%';
        else if (width) return `${width}px`;

        return '0px'

    }, [fullwidth, width])

    const componentHeight = React.useMemo(():string => {
        if (fullheight) return '100%';
        else if (height) return `${height}px`;

        return '0px'

    }, [fullheight, height])

    React.useEffect(() => {
        if (!containerRef || !canvasRef) return;

        const realCanvasWidth = Math.floor(containerWidth || 0);
        const realCanvasHeight = Math.floor(containerHeight || 0)

        canvasRef.current?.setAttribute('width', `${realCanvasWidth}px`)
        canvasRef.current?.setAttribute('height', `${realCanvasHeight}px`)

        const ctx = canvasRef.current?.getContext('2d')

        if (ctx !== null) {
            ctx?.clearRect(0, 0, realCanvasWidth, realCanvasHeight)

            const img = new Image;

            const useLoadImage = !!img64Base && img64Base != ""

            img.onload = () => {
                setShowCancelBtn(useLoadImage)

                const boxWidth = Math.floor(img.width)
                const boxHeight = Math.floor(img.height)

                const hRatio = realCanvasWidth / boxWidth
                const vRatio = realCanvasHeight / boxHeight

                const ratio = Math.min(hRatio, vRatio);

                const imgWidth = Math.floor(boxWidth * ratio)
                const imgHeight = Math.floor(boxHeight * ratio)

                const centerShift_x = ( realCanvasWidth - imgWidth ) / 2;
                const centerShift_y = ( realCanvasHeight - imgHeight ) / 2;  

                ctx?.drawImage(img, 0, 0, boxWidth, boxHeight, centerShift_x, centerShift_y, imgWidth, imgHeight)
            }

            img.src = useLoadImage? img64Base : '/logos/somosLogo.png';
        }

    }, [containerWidth, containerHeight, containerRef, canvasRef, img64Base])
        
    return (
        <div ref={containerRef} className={styles.imgPreviewContainer} style={{ width: componentWidth, height: componentHeight }}>
            <canvas ref={canvasRef} />
            {showCancelBtn && ( <button type="button" className={styles.btnCancelImgPreview} onClick={onCancelImg}>x</button> )}
        </div>
    )
}

export default ImgPreview
