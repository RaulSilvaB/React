const Events = () =>{

    const renderSomething = (x) => {
        if(x){
            return <h1>Tudo Certo</h1>
        }else{
            return <h1>Mas nada resolvido</h1>
        }
    }

    const handleMyEvent = () => {

        console.log("ativou o evento")
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            
            <div>
                <button onClick={() =>{console.log("Inline")}}>Clique aqui Função InLine</button>
            </div>

            <div>
                {renderSomething(true)}
                {renderSomething(false)}
            </div>
        </div>
    )
}

export default Events