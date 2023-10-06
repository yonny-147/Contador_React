import { useState } from "react"
export const ComponenteContador = ({value}) => {
    const [contador, SetContador] = useState(value)
    const Contador = () =>{
        SetContador(contador + 1)
        console.log(contador)
    }
  return (
    <>
    <h1>Contador</h1>
    <h2>{contador}</h2>
    <button onClick={Contador}>Presioname para aumentar contador</button>
    </>
  )
}
