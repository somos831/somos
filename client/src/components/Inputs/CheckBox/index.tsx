import styles from "./CheckBox.module.css";
import styled from 'styled-components';

const InputCheck = styled.input`
    &:checked ~ span:after {
        content: "";
        display: block;
    }
`

const SpanCheckMark = styled.span`
    &:after {
        right: 50%;
        top: 0;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: translate(120%, 30%) rotate(45deg);
        -ms-transform: translate(120%, 30%) rotate(45deg);
        transform: translate(120%, 30%) rotate(45deg);
        z-index: 999;
    }
`

interface CheckBoxProps {
    //id: string;
    title: string;
    // placeholder: string;
    // type?: string;
    // fullwidth?: boolean;
}

const CheckBox:React.FC<CheckBoxProps> =  ({ title }) => {
    return (
        <label className={styles.checkboxContainer}>
            {title}
            <InputCheck className={styles.inputCheckBox} type="checkbox" />
            <SpanCheckMark className={styles.checkmark}></SpanCheckMark>
        </label>
    )

}

export default CheckBox