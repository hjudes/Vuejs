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

En el siguiente código HTML, se mostará en la web un sencillo botón que luego de pulsarlo, leerá un .txt externo y mostará su contenido en pantalla. (Para los efectos de este ejemplo lo mostará como un título h5 pero bien puede usarse cualquier otra forma de visualización de contenido.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajax</title>
    
</head>
<body>
    <button id='boton'>hacer click</button>
    <script src=index.js></script>
    <h5></h5>
</body>
</html>
```

A través del siguiente archivo de JavaScript se hará el llamado al archivo con el método correspondiente, teniendo en cuenta la síntaxis apropiada.

```
document.querySelector('button').addEventListener('click', mostradatos);

function mostradatos(){
 
    const xhttp = new XMLHttpRequest(); 
    xhttp.open('GET', 'archivo.txt', true); 
    xhttp.send();
    
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){          
            document.querySelector('h5').innerHTML = this.responseText;
        }                        
    }
}  
    
```

## Leer datos de una fuente externa (.json, REST APIs)

En el siguiente código HTML, se mostará en la web un sencillo botón que luego de pulsarlo, leerá una fuente externa en formato .json y populará una tabla a la cual previamente hemos dado estructura de columnas.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajax</title>
    
</head>
<body>
    <button id='boton'>hacer click</button>
    <script src=index.js></script>
    
    <table>
        <thead>
            <tr>
               <th>País</th> 
               <th>Capital</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
</body>
</html>
```

El código indicado a continuación de JavaScript muestra los métodos y procedimientos para mostar la información que se requiere. Tener presente, es necesario "parsear" el JSON para poder manipularlo como objeto de JavaScript. Mayor información sobre el Parse, puede consultarla en el siguiente enlace: [JSON.parse()](https://www.w3schools.com/js/js_json_parse.asp)

```
document.querySelector('#boton').addEventListener('click', llenardatos);

function llenardatos(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://restcountries.eu/rest/v2/all', true);
    xhttp.send();

    xhttp.onreadystatechange = function(){
        if (this.readyState==4 && this.status==200){
          console.log(this.responseText);
          let datos = JSON.parse(this.responseText);   
          console.log(datos);
          let res = document.querySelector('tbody');
          res.innerHTML = '';

          for(let item of datos){ 
            console.log(item.name);
                res.innerHTML += `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.capital}</td>
                    </tr>
                    `
            }
        }
    }
}
```


