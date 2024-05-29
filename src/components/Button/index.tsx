'use client'
import { Props } from "./interfaces";
import "./styles.css"

const Button = (props: Props) => {



    return (
        <button onClick={props.onClick} className={props.className}>
            {props.text}
        </button>
    );
};
export default Button