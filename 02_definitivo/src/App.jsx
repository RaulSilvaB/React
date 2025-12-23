import { useState } from 'react'
import './App.css'

function App() {

  let propriedades = {
    name: "Raul",
    age: 24,
    etc: 'Casado'
}

let name = false

  return (
 
    <div className="app">
        <p>Nome: {propriedades.name}</p>
        <p>Idade: {propriedades.age}</p>
        <p>Estado Civil: {propriedades.etc}</p>

        <div className='outrasfita'>
          <p>{name ? "testando" :"teste"} </p>
        </div>
    </div>

  )
}

export default App
