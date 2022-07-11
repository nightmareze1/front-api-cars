# Cars Back Api

> Estas son las instrucciones de la aplicación Online (Cars Front Api)

---

### Contenidos

Puede hacer click sobre los contenidos para hacer una búsqueda más rápida

- [Descripción ](#Descripción)
- [Token ](#Token)
- [Como Usarla](#Como-Usarla)
- [Desarrollador](#Desarrollador)
- [Recomendaciones](#Recomendaciones)

---

## Descripción

Este es el front Cars api, es una aplicación en la cual se pueden cargar autos simulando la carga, la edición y la eliminación de autos como así también el registrarse en la misma aplicación. El loguearse le va a permitir cargar editar los productos, que en esta aplicación en particular son autos

#### Tecnologias Utilizadas

- Node.js
- NextJs
- Chakra-ui

[Volver al inicio](#Contenidos)

---

## Como Usarla

#### Instalación

Abrir un terminal y ejecutar el comando docker-compose up de esa manera se va a correr el contenedor de docker, pudiendo asi utilizar la aplicacion de next en el purto 3000

## Token

Todas las rutas a excepción de las de del tipo GET o create user y login llevan el token en las cabeceras, para que estas puedan funcionar de manera correcta. Si lo hace desde postman tiene que ingresar los datos de la siguiente forma, donde la key es token y el valor tiene que ser su token
KEY:token VALUE: su token.

## Recomendaciones

Le recomiendo crearse un usuario desde el inicio, ya que de no hacerlo no podrá cargar autos, como asi tampoco podra tener accesos a eliminar o editar las especificaciones de los mismos. En caso de querer buscar o ver autos que ya se encuentran en la base, eso si lo podrá hacer. Si desea eliminar usuarios, puede hacerlo desde la aplicación del back-end.

## Desarrollador

- Ezequiel Rey - [eze.rey92@gmail.com]

[Volver al inicio](#Contenidos)
