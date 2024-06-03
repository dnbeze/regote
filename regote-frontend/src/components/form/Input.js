import {forwardRef} from "react";

const Input = forwardRef((props,ref) => {
    return (
        <div className="field">
            <label htmlFor={props.name} className="label">
                {props.title}
            </label>
            <input
                type={props.type}
                className={props.className}
                id={props.name}
                ref={ref}
                name={props.name}
                placeholder={props.placeholder}
                onChange={props.onChange}
                autoComplete={props.autoComplete}
                value={props.value}/>
            <div className={props.errorDiv}>{props.error}</div>
        </div>
    )
})

export default Input;