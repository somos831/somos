import DatePicker, { DateObject } from "react-multi-date-picker";

import styles from './InputDate.module.css'

import styled from 'styled-components';
import { UseFormRegister, FieldValues, UseFormSetValue } from "react-hook-form";

const DateContainer = styled.div`
  &>.rmdp-container {
    width: 100%;
    &>input {
      font-family: "Poppins", sans-serif !important;
      font-size: 1.1rem;
      font-weight: 400;

      padding: 12px 20px;
      background: transparent;
      
      border: 1px solid #501D86;
      border-radius: 4px;

      outline: none !important;

      transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

      height: fit-content !important;

      &:hover {
        -webkit-box-shadow: 0px 5px 20px -7px rgba(80,29,134,1);
        -moz-box-shadow: 0px 5px 20px -7px rgba(80,29,134,1);
        box-shadow: 0px 5px 20px -10px rgba(80,29,134,1);
      }
    }
  }

  &.full-width>.rmdp-container>input {
    width: 100%;
  }

  &.input-err {
    &>.rmdp-container>input {
      border: 1px solid rgb(142, 49, 49);
      &:hover {
        -webkit-box-shadow: 0px 5px 20px -7px rgba(142, 49, 49,1);
        -moz-box-shadow: 0px 5px 20px -7px rgba(142, 49, 49,1);
        box-shadow: 0px 5px 20px -10px rgba(142, 49, 49,1);
      }
    }
  }
`;

interface InputDateType {
  id: string;
  placeholder: string;
  error?: boolean;
  //register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  fullwidth?: boolean;
}

const InputDate:React.FC<InputDateType> = ({ id, fullwidth, placeholder, setValue, error=false }) => {

  return (
    <DateContainer className={`${styles.dateContainer} ${fullwidth && 'full-width'} ${error && 'input-err'}`}>
        <DatePicker format="MM/DD/YYYY" placeholder={placeholder} onChange={(date:DateObject) => { setValue(id, date?.isValid ? date : "", { shouldValidate: true }) }} />
    </DateContainer>
  )
}

export default InputDate