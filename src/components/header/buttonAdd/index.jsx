import React, { useContext } from "react";
import { CardContext } from "../../../App";
import style from "./buttonAdd.module.scss"

export default function ButtonAdd() {

    const { arr, setArr } = useContext(CardContext)

    function addElem_F() {
        let rand = Math.floor(Math.random() * 100);
        setArr([...arr, rand])
    }

    return <button className={style.buttonAdd} onClick={addElem_F}> Add Card</button>

  
} 