const UserDetails = ({nome,idade}) =>{

    return(
        <div>
            <p>Ola {nome} com {idade} anos você  <p> {idade >= 18 ? "ja Pode tirar sua habilitação" : "não pode tirar sua habilitação"}</p></p>
        </div>

    )
}

export default UserDetails