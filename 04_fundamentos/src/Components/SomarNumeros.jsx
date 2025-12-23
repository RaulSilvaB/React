import { useState } from "react"

const SomarNumeros = () => {

    let [number,SetNumber] = useState()
    
    return (
        <div>
            <p>Quanto é 300 + 58</p>
            <button onClick={() => {SetNumber(300 + 58)}}>Somar: {number}</button>
            <div>
               <button onClick={() => {SetNumber(0)}}>Resetar</button>
            </div>
        </div>
        
    )
}


export default SomarNumeros;
