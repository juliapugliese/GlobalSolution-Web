import { Props } from "./interfaces"
import "./styles.css"

const FooterItem = (props: Props) => 
{
    return(
        <div className="footerItem">
            <p>{props.title}</p>
            <div className="paragrafo-footer">
               {props.children}
            </div>
        </div>
    )
}

export default FooterItem

