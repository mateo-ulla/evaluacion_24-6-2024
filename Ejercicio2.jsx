import { useState } from "react"

export default function Ejercicio2() {
  
const [formdata, setFormdata] = useState({
  nombre: ' ',
  edad: ' '
});

const handleChange = (event) => { 
  const {name, value} = event.target;
  setFormdata({
    ...formdata,
    [name]: value
  });
};

const handleSubmit = (event) => { 
  event.preventDefault();
  window.alert("Enviado!") 
  if (formdata.edad > 17){
    window.alert("La persona ingresada es mayor de edad") 
  }
  
  else{
    window.alert("La persona ingresada NO es mayor de edad")
  }
};

  return (
    <div>
      <h2>Ejercicio 2: Formulario</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
            <input type="text"  name="nombre" value={formdata.nombre}  onChange={handleChange}  />

            <label>Edad</label>
            <input type="number"  name="edad" value={formdata.edad}  onChange={handleChange}  />

            <button type="submit">Enviar</button>

            <p>{formdata.nombre} tiene {formdata.edad} años</p>
      </form>
    </div>
  )
}
