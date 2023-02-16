
const empleados=[ /*Utilizo const porque cada empleado tiene una ID
  y he utilizado el Array en "especialidad", por si el empleado
  tiene más de una especialidad*/
    {        
        "id": 1,
        "nombreApellidos":"Pere Ferrer",
        "telefono":"648-898-769" ,
        "especialidad":["Seguridad Informática"],
        "departamentos":"Sistemas",
        
    },
    {        
        "id": 2,
        "nombreApellidos":"Joan Gomila",
        "telefono":"631-445-779" ,
        "especialidad":["Python"],
        "departamentos":"Desarrollo",
        
    },
    {        
        "id": 3,
        "nombreApellidos":"Sara Gómez",
        "telefono":"653-378-889" ,
        "especialidad":["Java"],
        "departamentos":"Desarrollo",
        
    },
    {        
        "id": 4,
        "nombreApellidos":"Xavi Caribe",
        "telefono":"908-456-789" ,
        "especialidad":["Nóminas"],
        "departamentos":"Administración",
        
    }
]; 


   /* crear una tabla HTML dinámica a partir de un array de objetos JavaScript. */

let tBody = document.getElementById("lista-empleados");
            let listaEmpleados = [/* Este array "listaEmpleados" contiene información de los empleados*/
                { "id": 1, "nombre": "Pere", "apellidos": "Ferrer", "telefono": "648-898-769", "especialidad": ["Seguridad informática"], "departamento": "Sistemas" },
                { "id": 2, "nombre": "Joan", "apellidos": "Gomila", "telefono": "631-445-779", "especialidad": ["Python"], "departamento": "Desarrollo" },
                { "id": 3, "nombre": "Sara", "apellidos": "Gómez", "telefono": "653-378-889", "especialidad": ["Java"], "departamento": "Desarrollo" },
                { "id": 4, "nombre": "Xavi", "apellidos": "Caraibe", "telefono": "908-456-789", "especialidad": ["Nóminas"], "departamento": "Administración" }
            ];
            for (let empleados of listaEmpleados) {/*se recorre el array "listaEmpleados" utilizando un ciclo "for...of"*/ 
            /*se crea una fila HTML de la tabla utilizando una plantilla de cadena (template string) que se almacena
             en una variable llamada "fila"*/   
            let fila = `<tr>
                                <th scope="row">${empleados.id}</th>
                                <td>${empleados.nombre} ${empleados.apellidos}</td>
                                <td>${empleados.telefono}</td>
                                <td>${empleados.especialidad.toString()}</td>
                                <td>${empleados.departamento}</td>
                            </tr>
                            `;
                tBody.innerHTML += fila;/**Finalmente, la variable "fila" se agrega al contenido del elemento de la 
                tabla "tBody" utilizando la propiedad "innerHTML" y el operador "+=" para concatenar el contenido 
                existente con la nueva fila creada. De esta manera, se va construyendo la tabla dinámicamente
                con los datos de los empleados del array. */
            }