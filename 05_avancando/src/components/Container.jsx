
const Container = ({children , valor}) =>{

    return (
        <>
            <h1>Elemento pai</h1>
            {children}
            <p>meu valor é  {valor}</p>        
        </>
    )
}

export default Container