import React from 'react'

import styles from './InputFileSearch.module.css'

type handleFileBrowserType = (fr: FileReader, file: File | undefined | null) => void

interface InputFileSearchProps {
    handleFileBrowser: handleFileBrowserType
}

const InputFileSearch:React.FC<InputFileSearchProps> = ({ handleFileBrowser }) => {

    const handleOpenFile = (e: React.ChangeEvent<HTMLInputElement>):void => {
        
        if (e.target.files && e.target.files?.length) {
            const inputEvent = e.target as HTMLInputElement;

            const file = inputEvent.files?.item(0)
            const fr = new FileReader();

            fr.onload = function () {
                handleFileBrowser(fr, file)
            }
        
            const blob = new Blob([file || new File([], "")],{type: file?.type})
            fr.readAsDataURL(blob)
        }
    }

    return (
        <div>
            <input type="file" id="btn_upload" accept="image/png, image/gif, image/jpeg" onChange={handleOpenFile} hidden/>
            <label className={styles.btn} htmlFor="btn_upload">Choose file</label>
        </div>
    )
}

export default InputFileSearch
