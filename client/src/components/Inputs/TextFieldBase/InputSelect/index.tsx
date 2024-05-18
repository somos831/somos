import React from "react"

import styles from "./InputSelect.module.css";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface KeyValue {
    id: string;
    title: string;
}

interface InputSelectProps {
    id: string;
    err: boolean;
    fullwidth?: boolean;
    values?: KeyValue[];
    register: UseFormRegister<FieldValues>;
}

const InputSelect:React.FC<InputSelectProps>  =  ({ fullwidth, values, id, register, err }) => {

    const inputclassnames = React.useMemo(() => {
        const classes = [styles.inputBase]

        if (err) {
            classes.push(styles.inputBaseErr)
        }

        return classes
    }, [err])

    const containerclassnames = React.useMemo(() => {
        const classes = [styles.inputContainer]

        if (err) {
            classes.push(styles.inputContainerErr)
        }

        return classes
    }, [err])


    return (
        <div className={containerclassnames.join(" ")} style={{ ...(fullwidth && { width: '100%' }) }}>
            <select className={inputclassnames.join(" ")} style={{ ...(fullwidth && { width: '100%' }) }} {...register(id)}>
                {
                    values?.map((value, index) => (
                        <option key={`select_${index}_${value.id}_${value.title}`} value={value.id}>{value.title}</option>
                    ))
                }
            </select>
        </div>
    )

}

export default InputSelect