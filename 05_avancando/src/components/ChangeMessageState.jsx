const ChangeMessageState = ({handleMesssage}) => {
    const messages = ["oi","tudo bem?","ola","eai?"]

    return (
        <div>
            <button onClick={() => handleMesssage(messages[0])}>1</button>
            <button onClick={() => handleMesssage(messages[1])}>2</button>
            <button onClick={() => handleMesssage(messages[2])}>3</button>
            <button onClick={() => handleMesssage(messages[3])}>4</button>
        </div>
    )
}

export default ChangeMessageState