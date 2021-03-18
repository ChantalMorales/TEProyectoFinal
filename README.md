# TEProyectoFinal
## Integrantes: 
Sebastian Morales, Chantal Morales, Kevin Segovia, Israel Vásquez, Nicole Zambrano.
## Descripción del Proyecto:  
Esta aplicación tiene como objetivo ordenar las lista de tareas del usuario en distintas pantallas dependiendo de la urgencia del mismo. Además cuenta con incio de sesión y método de lectura, escritura, actualización y eliminación de las mismas, con el uso de distintos componentes. Esta hecha en ionic 4 con angular como framework, además cuenta con un backend en firebase que nos provee servicio de almacenamiento y funciones. 
## Métodos:
Login, para lo mismo cuenta con un login para lo cual utilizamos los métodos auth de firebase (signInWithEmailandPassword), y en la app un formulario para el ingreso del mail y contraseña, al igual que el registro.

Para Create utilizamos el método de almacenamiento con Firestore, en la cual accedemos al nodo específico obtenemos los valores de los inputs como nombre de tarea  y se almacena en el nodo mismo que esta referenciado con una ruta hacia la base, que se puede ver en el código.

Para el método Read utilizamos un metodo de lectura en el cual obtenemos todos los datos almacenados en el nodo y los mostramos a través de items ordenados en la pantalla en la cual este asignada la tarea.

Update, en este método tenemos que definir en la ruta hacia la base obtener la información del dato, mediante el uso de su clave única (id), en la app es necesario tener aplastado el item que deseamos y pulsar "editar" se nos mostrará un modal con la infromación que contiene el ítem mismo que podremos editar.

Delete por úlitmo al igual que en el método update, obtenemos el id del item que deseamo borrar, y enviamos ese id en el camino hacia la base que referencia el método delete y también está implementado una opción la cual da la opción de borrar todos los datos para esto se utiliza el camino hacia la base sin identificador con el método de eliminación.

Para las Cloud Functions, para esto utilizamos el servicio de functions de firebase en la cual, tenemos que escribir la función en este caso en typescript y definir el método o el activador que hara que la misma se dispare automáticamente. 

Para mostrar las tareas usamos componentes de ionic como sliding items, que a su vez contiene acciones al deslizar, para el uso de las diferentes pantallas se uso ion-tabs, para funciones de editar e ingresar tares ion-modals, además de componentes como botones, labels e inputs. 

# Responsabilidades
Pruebas : Chantal Morales, Israel Váquez
Codificación: Nicole Zambrano, Chantal Morales, Israel Váquez, Kevin segovia, Sebastian Morales
Login: Sebastián Morales
Cloud Functions: Nicole Zambrano, Kevin segovia
Subida a la Tienda: Sebastián Morales, Israel Vásquez

# Videos: 
Link del video: 

