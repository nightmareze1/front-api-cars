<p align="center">
  <a href="https://nextjs.org">
    <img src="https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png" height="128">
    <h1 align="center">Next.js</h1>
  </a>
</p>

<p align="center">
  <a aria-label="Vercel logo" href="https://vercel.com">
    <img src="https://img.shields.io/badge/MADE%20BY%20Vercel-000000.svg?style=for-the-badge&logo=Vercel&labelColor=000">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/next">
    <img alt="" src="https://img.shields.io/npm/v/next.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a aria-label="License" href="https://github.com/vercel/next.js/blob/canary/license.md">
    <img alt="" src="https://img.shields.io/npm/l/next.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a aria-label="Join the community on GitHub" href="https://github.com/vercel/next.js/discussions">
    <img alt="" src="https://img.shields.io/badge/Join%20the%20community-blueviolet.svg?style=for-the-badge&logo=Next.js&labelColor=000000&logoWidth=20">
  </a>
</p>

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

Abrir un terminal y ejecutar el comando docker-compose up de esa manera se va a correr el contenedor de docker, pudiendo así utilizar la aplicación de next en el puerto 3000

## Token

Todas las rutas, a excepción de las de del tipo GET o create user y login llevan el token en las cabeceras, para que estas puedan funcionar de manera correcta. Si lo hace desde postman tiene que ingresar los datos de la siguiente forma, donde la key es token y el valor tiene que ser su token
KEY:token VALUE: su token.

## Recomendaciones

Le recomiendo crearse un usuario desde el inicio, ya que de no hacerlo no podrá cargar autos, como así tampoco podrá tener accesos a eliminar o editar las especificaciones de los mismos. En caso de querer buscar o ver autos que ya se encuentran en la base, eso si lo podrá hacer. Si desea eliminar usuarios, puede hacerlo desde la aplicación del back-end.

## Desarrollador

- Ezequiel Rey - [eze.rey92@gmail.com]

[Volver al inicio](#Contenidos)
