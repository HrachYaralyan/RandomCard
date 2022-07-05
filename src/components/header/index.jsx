import React from "react";
import ButtonAdd from "./buttonAdd";
import ButtonSort from "./buttonSort";
import style from "./header.module.scss";

export default function Header() {
    return (
            <div className={style.wrapper}>
                <ButtonAdd />
                <ButtonSort />
            </div>
    )
}