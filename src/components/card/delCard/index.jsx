import React from "react";
import style from "./del.module.scss"

export default function DelCard({ arr, setArr, index }) {

    function delElem_F(id) {
        setArr(arr.filter((_, index) => index !== id))
    }

    return <button className={style.delCard} onClick={() => delElem_F(index)}> X </button>
} 