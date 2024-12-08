<h1 align='center'>GitHub User Finder</h1>
  <p align="center">
    <a href="">View Demo</a>
    ·
    <a href="https://github.com/CUPAXX/github-user-finder/issues">Report Bug</a>
    ·
    <a href="https://github.com/CUPAXX/github-user-finder/pulls">Request Feature</a>
  </p>

# About The Project

GitHub User Finder

Simple github user finder using github public api.

## Built With

[![Next Js. v14](https://img.shields.io/badge/nextjs-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/docs)

## Requirements

1. <a href="https://nodejs.org/en/download/">Node Js v18</a>
2. Node_modules `npm install` or `yarn install`
3. Github Personal Access Token, set up first [here](#github-personal-token)

## Generate GitHub Personal Token

1. open your github
2. open Settings => Developer Settings => Personal Access Token => Fine-grained tokens

## Getting Started

How to run the project:

1. Open project directory in Terminal or comand line
2. Type `npm install` or `yarn install`
3. Type `npm run dev`
4. Make new file a called **.env**, set up first [here](#set-up-env-file)
5. Update github personal token (**_NEXT_PUBLIC_API_TOKEN_**) in **_.env_** file

## Set up .env file

Open .env file on your favorite code editor, and copy paste this code below :

```js
NODE_ENV=development
NEXT_PUBLIC_API_ENDPOINT=https://api.github.com
NEXT_PUBLIC_API_TOKEN=
```

## Feature

<ul>
  <li>Searh pages</li>
  <li>Detail User</li>
  <li>Detail Repositories</li>
  <li>Display Readme.md of repository</li>
</ul>

## Status Deploy

[![Netlify Status](https://api.netlify.com/api/v1/badges/238173ca-34aa-47b6-ae91-1c20716cf53d/deploy-status)](https://app.netlify.com/sites/cupaxx-github-finder/deploys)

## License

© [M Fiqry Arahmansyah](https://www.instagram.com/xfiqryx/)

[![Instagram](https://img.shields.io/badge/xfiqryx-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)](https://instagram.com/xfiqryx) [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/fiqry-arahmansyah)
