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
    values?: KeyValue[];
    disabled?: boolean;
}

const TextFieldBase: React.FC<TextFieldBaseProps> = ({ title, placeholder, id, values, disabled=false, fullwidth = false, type="text" }) => {

    const { register, setValue, watch, formState: { errors } } = useFormContext() 

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const isErr = React.useMemo(() => !!errors[id], [ errors, errors[id], id ])
    
    const [fieldValue, setFieldValue] = React.useState("")

    const classnames = React.useMemo(() => {
        const classes = [styles.inputBase]

        if (isErr) {
            classes.push(styles.inputBaseErr)
        }

        if (disabled) {
            classes.push(styles.disabledField)
        }

        return classes
    }, [isErr, disabled])

    React.useEffect(() => {
        const subscription = watch((value) => {
            if (value)
            setFieldValue(value[id])      
        })
        return () => subscription.unsubscribe()
    }, [watch, id])

    const InputElement = React.useMemo(():React.ReactNode => {

        switch(type) {
            case "date":
                return (<InputDate value={fieldValue} disabled={disabled} id={id} placeholder={placeholder} setValue={setValue} error={isErr} />)
            case "time":
                return (<InputTime value={fieldValue} disabled={disabled} id={id} placeholder={placeholder} setValue={setValue} error={isErr} />)
            case "textarea":
                return (<textarea disabled={disabled} className={classnames.join(" ")} style={{width: '100%'}} placeholder={placeholder} {...register(id)} rows={8} cols={50} />)
            case "select": 
                return (<InputSelect disabled={disabled} id={id} values={values} register={register} err={isErr} />)
            default:
                return (<input disabled={disabled} className={classnames.join(" ")} style={{width: '100%'}} type={type} placeholder={placeholder} {...register(id)}/>)
        }

    }, [id, placeholder, setValue, isErr, type, classnames, register, values, disabled, fieldValue])

    const errMessage = React.useMemo(():string => isErr? `${errors[id]!.message}` : '', [isErr])

    return (
        <div style={{ width: '100%' , marginBottom: '20px' }}>
            <label className={styles.fieldName}>{title}</label>
            {InputElement}
            {isErr && (
                <p className={styles.errField} >{errMessage}</p>
            )}
        </div>
    )
}

export default TextFieldBase;