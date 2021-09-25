import { useState } from "react"
import React from 'react'

const Boton = ({tittle, activeClass, _callback})=>{
    return(
        <button className={activeClass} onClick={_callback}>{tittle}</button>
    )
}


const Ventana = () => {

    const [styles, setStyles] = useState({
        backgroundColor: 'black',
        height: '50px',
        width: '50px',
        
    })

    const [Color, setColor] = useState('#000')

    const change =  () => {
        let nuevo = `#${Math.floor(Math.random()*9)+1}${Math.floor(Math.random()*9)+1}${Math.floor(Math.random()*9)+1}`
        setColor(nuevo)
        setStyles({
            ...styles,
            backgroundColor: Color,
        })
    }

    return(
        <div>
            <div style={styles}></div>
            <div style = {{backgroundColor: {Color}}}>{Color}</div>
            <button onClick={change}>Presionar</button>
        </div>
    )
}

export default Ventana