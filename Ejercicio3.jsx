import React from 'react'

export default function Ejercicio3() {

  const subjetcs = [
  'Informatica Aplicada II',
  'Programacion II',
  'Robotica',
  'Matematica',
  'Fisica'
  ];

  return (
    <div>
      <h2>Ejercicio 3: Modularización</h2>
      <p>Algunas materias de quinto año:</p>
      <ul>
        {subjetcs.map(subjetc  => <li>{subjetc}</li>)}
      </ul>
    </div>
  )
}
