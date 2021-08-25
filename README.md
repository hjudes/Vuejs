<p align="center">
  <a href="https://es.vuejs.org/">
    <img src="https://vuejs.org/images/logo.png" alt="Vuejs logo" width="300" height="300">
  </a>
</p>

# Vuejs
Sesión Vuejs Diplomado SENA.
<br>
Resumen de los pasos ejecutados en la sesión de Vuejs realizada.

<br>

## Requerimientos técnicos

Herramientas requeridas: Visual Studio Code, cualquier navegador.

- Instalar Visual Studio Code: [Página oficial](https://code.visualstudio.com/Download)

Se utilizará la documentación [Vuejs](https://es.vuejs.org/v2/guide/) para referencia en cuanto a la utilización, ejemplos, síntaxis y demás consideraciones respecto a su uso.

La guía considerará los resultados obtenidos Visual Studio Code v.1.59.0.

## Contenidos 

En este repositorio se encontrarán dos ejercicios, el primero de ellos llamado VueT que tiene los contenidos desarrollados durante la sesión de clase. Por el otro lado, se encuentra una carpeta de VuePassw que es un ejempo adicional de manejo de interfases pequeñas a través de Vuejs en donde se enfatiza en el uso de renderización condicional y otros elementos del desarrollo frontend.

## Vue CLI

Otra forma adicional para el desarrollo de proyectos en Vuejs es hacerlo a través de la interfaz de línea de comandos. [Vue CLI](https://cli.vuejs.org/) es precisamente esa herramienta de Vuejs que fue creada por el equipo de Vuejs para ayudar con la creación del scaffolding y la configuración inicial del proyecto. Es importante notar, que para poder usar Vue CLI es necesario tener instalado Node.js en el equipo en donde se vaya a utilizar. A continuación se describirán los comandos básicos de operación de Vue CLI y algunas funcionalidades para el desarrollo.

Instalación Vue CLI:

```
npm install -g @vue/cli
```

Una vez instalado Vue CLI se debe hacer la creación del proyecto específico:

```
vue create my-project
```

Ahora, para ejecutar la aplicación se debe utilizar el siguiente comando que genera una instancia local del servidor para la ejecución:

```
npm run serve
```

Las siguientes son funcionalidades extras para el desarrollo en Vue CLI:

Detección de errores de linteo:
```
npm run lint
```

Ejecutar aplicación de producción:
```
npm run build
```

Instala el comando serve de manera global:
```
npm i -g serve
```

Iniciar un localhost con la aplicación de producción:
```
serve -s dist
```

Crear una aplicación web local mediante la cual se gestionan los proyectos Vue:
```
vue ui
```

## Copyright y licencia

Vuejs se distribuye bajo licencia modelo [MIT](https://github.com/vuejs/vue-cli/blob/dev/LICENSE)
