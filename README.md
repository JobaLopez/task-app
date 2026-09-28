# TaskApp

Esto forma parte de los primeros ejercicios que vamos a ir haciendo en clase: una aplicacióiin de lista de tareas.

El objetivo es entender las diferencias entre lo que hacíamos con React y la forma en la que funciona Angular.

Estos son los pasos a seguir en la práctica:
- Instalar Angular CLI en el dispositivo siguiendo las indicaciones de [la web oficial](https://angular.dev/installation#install-angular-cli).
- Instalar NodeJS desde [la página de descarga oficial](https://nodejs.org/en/download).
- Ejecutar el comando 
```bash
npm install
```
para asegurarnos de que podremos ejecutar el proyecto.
- En la carpeta `src/app` tendremos un componente ya creado por la incialización del proyecto. Debemos quitar su contenido de HTML ya que lo vamos a sustituir.
- Crearemos un componente Task en `src/app/task`. Debemos usar las funciones de code scaffolding para ello (explicación más abajo).
- Como estamos creando una lista de tareas, este componente Task será el encargado de mostrar la información de las tareas. Para ello el HTML del componente (en el apartado template del archivo `task.ts` o en `task.html` si tenemos un archivo HTML aparte usando templateURL en el archivo ts) debe tener una etiqueta de párrafo `<p></p>` con el nombre de la tarea y una etiqueta input de tipo checkbox para marcar la tarea como completada `<input type="checkbox" />`.
- Para poder visualizar el componente deberemos importarlo en la página principal de la aplicación. En este repositorio sería `app.ts`. Deberos añadir una referencia al componente Task dentro del array de imports de `app.ts` y utilizar el selector de Task (`<app-task />`) en su html para visualizar una tarea.
- Como querremos mostrar más de una, crearemos una interface de tarea que tenga nombre y estado de la tarea (ver `app.ts`) de modo que podamos crear un array de tareas.
- Una vez tenemos el array de tareas, deberemos crear un bucle `@for` en `task.html` para recorrer el array y pintar cada una de las tareas en un componente task.
- Lo último que haremos por ahora será utilizar la información del array en el componente Task. Para ello debemos añadir un `input` al componente Task para poder pasarle el parámetro del nombre y que se pinte. Para que una propiedad de clase (o variable) se visualice deberemos usar las dobles llaves `{{ variable }}`. En el caso de los inputs de angular, como son signals, el nombre debe ir acompañado de unas paréntesis vacías `{{ variable() }}`.
- Después debemos pasar el valor de los nombres al componente dentro del bucle `@for`.
- Para saber más sobre los conceptos básicos de Angular puedes utilizar [la documentación oficial](https://angular.dev/overview) y hacer los [casos prácticos que proponen](https://angular.dev/tutorials/learn-angular).

## Routing
Se ha añadido routing a la aplicación. Como se trata de una aplicaciñon con SSR hay que trabajar un poco más que si no lo fuera ya que tenemos que configurar las rutas tanto para el cliente como para el servidor:
- Tenemos el archivo ```app.routes.ts``` y ```app.server.routes.ts``` para la declaración de rutas. En este caso en las rutas del servidor se le indica que tiene que renderizar siempre en el cliente.
- Después tenemos ```app.config.ts``` y ```app.config.server.ts``` para aplicar las configuraciones necesarias como el uso de ```withComponentInputBinding()``` para que las rutas obtengan un parametro de la URL directamente.
- Para hacer que todo funcione también ha habido que mezclar las configuraciones locales y del servidor en una única en ```main.server.ts```.
- Por último, se han añadido etiquetas ```<a>``` con la propiedad ```routerLink``` para enlazar las páginas.
- Se han creado componentes nuevos para hacer más claro el funcionamiento.
- Documentación interesante [sobre routing en angular](https://angular.dev/guide/routing), [```routerLink```](https://angular.dev/api/router/RouterLink#href) y [```withComponentInputBinding()```](https://angular.dev/api/router/withComponentInputBinding).

## Servidor de desarrollo

Para ejecutar el proyecto en local introduce este comando en la terminal de tu ordenador. tienes que encontrarte en el directoriao del proyecto:

```bash
ng serve
```

Después podrás ir a la dirección `http://localhost:4200/` en tu navegador. La página se actualiza automáticamente con cada cambio en el código.

## Code scaffolding

Angular CLI tiene comandos muy útiles para generar componentes:

```bash
ng generate component component-name
```

Para conocer todos puedes ejecutar este comando:

```bash
ng generate --help
```