import React from "react";
import Sobre from "./Sobre";
import Horas from "./Horas";
import Local from "./Local";

export default function Section(){
    return(
        <section>
            <Sobre/>
            <Horas/>
            <Local/>
        </section>
    )
}