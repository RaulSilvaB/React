import { useState } from "react"

const ConditionalRender = () => {
    const [condicao,setCondicao] = useState(true)
    const [name] = useState("raul")

    return(
        <div className="pai">
            <h1>Renderizador</h1>
            <button onClick={() => setCondicao((prevState) => !prevState)}>Exibir / Ocultar</button>
            {condicao && 
            <h2>Jesus é o caminho e a vida</h2>}
            {name === "raul" ? (
                <div>
                    <p>é o raul</p>
                </div>
            ) :(
                <div>
                    <p>Não é o raul</p>
                </div>
            )}
            </div>
    )
}

export default ConditionalRender