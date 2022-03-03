# Estilos, SASS, e Intro a Eventos (Event Handlers)

En esta clase vamos a ver las diferentes maneras de darle estilos a nuestra app de React. Luego nos enfocaremos en SASS. Y por último veremos sus primeras interacciones con eventos de HTML utilizados dentro de React.

## Maneras de dar estilos a tu aplicación de React

1. ¡CSS normal como ya saben!
2. Pre-processador de CSS (Less, SASS, Stylus)
3. CSS-in-JS (Emotion, styled components)

No hay una manera errónea, sin embargo cada una tiene diferentes pros y cons.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">[POLL] If you:<br><br>⚛️ had to build a greenfield React app today<br>⚡ needed to get it done quickly<br>🛠 care about the longterm maintainability of the app<br>🚫 can&#39;t just use an off-the-shelf component library<br><br>Which tool would you choose to style the app?</p>&mdash; Kent C. Dodds 💿 (@kentcdodds) <a href="https://twitter.com/kentcdodds/status/1224900215523512320?ref_src=twsrc%5Etfw">February 5, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

- https://thecodest.co/blog/why-should-you-use-scss-instead-of-styled-components/
- https://blog.logrocket.com/moving-from-scss-to-styled-components-advantages-and-caveats/

De nuevo: No hay una manera correcta. Lo más importante es conocer las maneras más conocidas y poder adaptarse a las necesidades del proyecto y del equipo en el que se encuentran actualmente.

## SASS en React

Con Create React App (CRA), ¡súper sencillo!

`npm i sass`

Y solo cambias tus archivos .css a .scss y ¡listo!

Si no estás usando CRA, lo más probable es que necesites instalar dependencias adicionales y a través de webpack: https://webpack.js.org/loaders/sass-loader/

## Estructura de Archivos

Dos maneras principales

1. Carpeta de cada componente con su archivo JavaSript y su archivo de SCSS. Y una carpeta de estilos con archivos globales de scss.
   /src
   • ———— /components
   • |———— /Component1
   • |———— component1.js
   • |———— component1.scss
   • |———— index.js

/src
• ———— /styles
• |———— \_animations.scss
• |———— \_functions.scss
• |———— \_global.scss
• |———— \_mixins.scss
• |———— \_typography.scss
• |———— \_variables.scss

2. Todos los archivos de estilos en la carpeta de styles
   /src
   • ———— /styles
   • |———— component1.scss
   • |———— componente2.scss
   • |———— componente3.scss
   • |———— \_functions.scss
   • |———— \_global.scss
   • |———— \_mixins.scss
   • |———— \_typography.scss
   • |———— \_variables.scss

## Intro a Eventos (Event Handlers)

Vamos a ver estos tres primeros eventos:

1. onclick
2. onsubmit
3. onchange

JavaScript:

1. <button onclick="myFunction()">Click me</button>
2. <form onsubmit="myFunction()">
     Enter name: <input type="text">
     <input type="submit">
   </form>
3. <select onchange="myFunction()">

React:

1. <button onClick="myFunction()">Click me</button>
2. <form onSubmit="myFunction()">
     Enter name: <input type="text">
     <input type="submit">
   </form>
3. <select onChange="myFunction()">

La razón es que cada palabra está reservada en JavaScript. Así que siendo una librería de React, esta era la mejor manera de no sobreescribir o crear conflictos.

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Ejercicios

Estos son los ejercicios que puedes hacer después de la clase.
Recuerda subir tu branch en tu repo como clase-2

1. Aplica estilos a tu tarjeta de comercio.
2. Aplica un onClick para que cuándo hagas click en un botón, una alerta salga en el browser.
3. Agrega un imagen a la tarjeta intentando seguir estas instrucciones: https://create-react-app.dev/docs/adding-images-fonts-and-files
