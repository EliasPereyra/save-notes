# Save Notes

## Pre-requisitos

Debes tener instalado [pnpm](https://pnpm.io/installation) y [Node.js](https://nodejs.org/en/download), la versión minima es la 20.

Necesitas tener una cuenta en [MongoDB](https://www.mongodb.com/try/download/community) y generar una base de datos.

## Cómo puedes usar este proyecto?

Primero, clona el repositorio:

```bash
git clone https://github.com/EliasPereyra/save-notes.git
```

Después, entra en la carpeta server e instala las dependencias:

```bash
cd server
pnpm install
```

Luego, entra en la carpeta client e instala las dependencias:

```bash
cd ../client
pnpm install
```

## Tecnologías usadas

- ![Next.js][Next.js]
- ![React.js][React.js]
- ![DaisyUI][DaisyUI]
- ![TailwindCSS][TailwindCSS]
- ![TypeScript][TypeScript]
- ![Tanstack Query][Tanstack Query]
- ![ESLint][ESLint]
- ![Express.js][Express.js]
- ![MongoDB][MongoDB]
- ![Mongoose][Mongoose]

## Algunas aclaraciones técnicas

- En el archivo `.env` necesitas especificas la uri de tu base de datos. Ejemplo: `MONGODB_URI=mongodb://localhost:27017/save-notes`.
- El archivo `.env` necesita especificar el secret de tu JWT. Ejemplo: `JWT_SECRET=secret`.

[Next.js]: https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextjs&logoColor=white
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[DaisyUI]: https://img.shields.io/badge/DaisyUI-4338CA?style=for-the-badge
[TailwindCSS]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[TypeScript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[Tanstack Query]: https://img.shields.io/badge/Tanstack%20Query-FF5F5F?style=for-the-badge&logo=tanstackquery&logoColor=white
[ESLint]: https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white
[Express.js]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[MongoDB]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[Mongoose]: https://img.shields.io/badge/Mongoose-000000?style=for-the-badge&logo=mongodb&logoColor=white
