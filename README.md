# Evaluación Informática Aplicada - Fundamentos de React

## Ejercicio 0: Preparar el entorno
### (1 puntos)

En este ejercicio se preparará todo lo necesario para realizar la evaluación de forma adecuada.

1. Forkear el repositorio de la evaluación a su cuenta de GitHub.
2. Clonar el repositorio en la computadora en la que se realice la evaluación.
3. Crear una nueva rama denominada resolución_[apellido], dónde [apellido] es su apellido.
4. Realizar la resolución de los ejercicios siguientes en la rama recién creada.

## Ejercicio 1: Lista desplegable
### (2 puntos)

En este ejercicio se deberá crear una lista de selección e informar al usuario la opción que está seleccionada actualmente. Esto se realizará en el archivo Ejercicio1.jsx.

1. Crear una lista de selección con las siguientes frutas:
   * Manzana
   * Pera
   * Naranja
   * Mandarina
2. Crear un estado en el que se almacenará la selección de la lista.
3. Implementar una función que guarde el valor seleccionado en el estado creado en el punto anterior.
4. Mostrar un mensaje que le indique al usuario la fruta seleccionada actualmente.

Al finalizar el ejercicio, realizar un commit.

## Ejercicio 2: Formulario
### (3 puntos)

En este ejercicio se deberá implementar un formulario que pida dos datos al usuario. Posteriormente se mostrarán diferentes mensajes en base a la información brindada.

1. crear un formulario con 2 inputs y un boton se envío. Uno de los inputs deberá ser para texto y el otro para números.
2. Crear un estado donde se almacene el contenido de los inputs. Debe ser un único estado.
3. Crear y utilizar una única función que actualice el estado cuando los inputs son modificados. Mostrar en pantalla el nobre y la edad ingresadas. Por ejemplo, si se ingresan los datos "Marta" y 33, se debe mostrar: "Marta tiene 33 años"
4. Al presionar el botón de envío del formulario, se debe mostrar un mensaje que indique si la persona ingresada es mayor o menor de edad. Por ejemplo, para los datos del ejemplo anterior, se debe mostrar "la persona ingresada es mayor de edad" al enviar el formulario.

Al finalizar el ejercicio, realizar un commit.

## Ejercicio 3: Modularización
### (2 puntos)

Este ejercicio constará de crear una nueva componente, que será utilizada en el archivo Ejercicio3.jsx.

1. Crear una nueva componente denominada "ElementoLista".
2. Esta componente recibirá un mensaje a través de sus propiedades.
3. La componente ElementoLista deberá renderizar el mensaje recibido dentro de un ítem de lista (es decir, dentro de un elemento <li>).
4. Utilizar la componente recién creada para mostrar los siguientes elementos en el archivo Ejercicio3.jsx:
   *  Informática Aplicada II
   *  Programación II
   *  Robótica
   *  Matemática
   *  Física
  
Al finalizar el ejericio, realizar un commit.

## Ejercicio extra: Map
### (1 punto extra)

En este ejercicio se utilizará la función map() para optimizar el código del ejercicio 3.

1. Crear un array que contenga las materias listadas en el punto anterior. Utilizar tanto la función map como la componente creada en el ejercicio 3 para realizar la lista de materias.

Al finalizar el ejericio, realizar un commit.

**Al finalizar la evaluación, pushear el trabajo realizado a GitHub para su corrección.**
Verificar que los archivos se hayan subido correctamente.
También se deberá entregar a través de classroom el link al repositorio donde se encuentra resuelta la evaluación.