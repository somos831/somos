import React from "react";

import { useFormContext } from "react-hook-form"

import styles from "./TextFieldBase.module.css";

import InputDate from "./InputDate";
import InputTime from "./InputTime";
import InputSelect from "./InputSelect";

interface KeyValue {
    id: number;
    title: string;
}

interface TextFieldBaseProps {
    id: string;
    title: string;
    placeholder: string;
    type?: string;
    fullwidth?: boolean;
    values?: KeyValue[]
}

const TextFieldBase: React.FC<TextFieldBaseProps> = ({ title, placeholder, id, values, fullwidth = false, type="text" }) => {

    const { register, setValue, formState: { errors } } = useFormContext() 

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const isErr = React.useMemo(() => !!errors[id], [ errors, errors[id], id ])

    const classnames = React.useMemo(() => {
        const classes = [styles.inputBase]

        if (isErr) {
            classes.push(styles.inputBaseErr)
        }

        return classes
    }, [isErr])

    const InputElement = React.useMemo(():React.ReactNode => {

        switch(type) {
            case "date":
                return (<InputDate id={id} placeholder={placeholder} fullwidth={fullwidth} setValue={setValue} error={isErr} />)
            case "time":
                return (<InputTime id={id} placeholder={placeholder} fullwidth={fullwidth} setValue={setValue} error={isErr} />)
            case "textarea":
                return (<textarea className={classnames.join(" ")} style={{ ...(fullwidth && { width: '100%' }) }} placeholder={placeholder} {...register(id)} rows={8} cols={50} />)
            case "select": 
                return (<InputSelect id={id} fullwidth={fullwidth} values={values} register={register} err={isErr} />)
            default:
                return (<input className={classnames.join(" ")} style={{ ...(fullwidth && { width: '100%' }) }} type={type} placeholder={placeholder} {...register(id)}/>)
        }

    }, [id, placeholder, fullwidth, setValue, isErr, type, classnames, register, values])

    const errMessage = React.useMemo(():string => isErr? `${errors[id]!.message}` : '', [isErr])

    return (
        <div style={{ ...(fullwidth && { width: '100%' }), marginBottom: '20px' }}>
            <label className={styles.fieldName}>{title}</label>
            {InputElement}
            {isErr && (
                <p className={styles.errField} >{errMessage}</p>
            )}
        </div>
    )
}

export default TextFieldBase;