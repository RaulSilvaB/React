import { useState } from "react"

const ConditionalRender = () => {
    const [condicao,setCondicao] = useState(true)
    const [name,setName] = useState("raul")

    return(
        <div className="pai">
            <h1>Isso sera exibido? "(&&)"</h1>
            <button onClick={() => setCondicao((prevState) => !prevState)}>Exibir / Ocultar</button>
            {condicao && 
            <h2>Jesus é o caminho e a vida (if ternário)</h2>}
            {name === "raul" ? (
                <div>
                    <p>é o raul</p>
                </div>
            ) :(
                <div>
                    <p>Não é o raul</p>
                </div>
            )}
            {name == 'vivian' ? (
                <div>
                    <p>Oi é a Vivian?</p>
                </div>
                ) : (
                    <div>
                        <p>Não é a Vivian</p>
                    </div>
                )}

                <button onClick={() => setName('vivian')}>Clica aqui!</button>

            </div>
    )
}

export default ConditionalRender