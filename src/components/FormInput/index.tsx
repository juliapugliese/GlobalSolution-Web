import { Props } from "./interfaces";
import "./styles.css"

const FormInput = (props: Props) => {
    return(
        <div className={props.className}>
            {/* <label htmlFor="">{props.label}</label> */}
            <input type="text" placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
        </div>
    );
};
export default FormInput;