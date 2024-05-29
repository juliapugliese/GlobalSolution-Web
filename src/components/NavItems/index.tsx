'use client'
import { Props } from "./interfaces";
import "./styles.css"
import Link from "next/link";

const NavItems = (props: Props) => {

    return (
        <li className="navItems" id={props.id}>
            <Link href={props.link}>{props.text || props.img}</Link>
            {props.children}
        </li>
    );
};
export default NavItems