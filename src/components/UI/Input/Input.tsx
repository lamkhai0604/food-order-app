import { forwardRef } from "react";
import "./Input.css";

interface IInputState {
  id: string;
  type: string;
  min?: string;
  max?: string;
  step?: string;
  defaultValue?: string;
}

interface IInputProps {
  label?: string;
  input?: IInputState;
}

const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  return (
    <div className="input">
      <label htmlFor={props.input?.id}>{props.label}</label>
      <input id={props.input?.id} ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
