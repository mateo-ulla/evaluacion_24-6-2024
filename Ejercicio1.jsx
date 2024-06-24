import { useState } from "react"

export default function Ejercicio1() {

const [fruta, setFruta] = useState('manzana');

const handleChange = (event) => setFruta(event.target.value);

  return (
    <div> 
      <h2>Ejercicio 1: Lista desplegable</h2>

      <label>Seleccione una fruta: </label>
      <select onChange={handleChange}>
        <option value="manzana" onClick={handleChange}>Manzana</option>
        <option value="pera" onClick={handleChange}>Pera</option>
        <option value="naranja" onClick={handleChange}>Naranja</option>
        <option value="mandarina" onClick={handleChange}>Mandarina</option>
      </select>

    <p>Tu fruta: {fruta}</p>

    </div>
  )
}
