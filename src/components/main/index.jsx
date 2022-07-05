import React, { useContext } from "react";
import { CardContext } from "../../App";
import Card from "../card/card";
import style from "./main.module.scss";

export default function Main() {
    const { arr } = useContext(CardContext)
    return (
            <div className={style.wrapper}>
                {
                    arr &&
                    arr.map((item, index) => {
                        return (
                            <Card key={`${item}_${index}`} item={item} index={index} />
                        )
                    })
                }

            </div>
    )
}