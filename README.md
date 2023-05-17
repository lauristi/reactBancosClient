# Frontend feito em React
### Com Rotas TypeScript e BootStap

Este projeto encontra-se hospedado para teste no serviço `netlify.com` em: https://reactbancoclient.netlify.app/


O código  Backend consumido está no repositório e encontra-se
hospedado para testes no `render.com` em:

    https://nodewebapi.onrender.com/api/brasilApi/banco/104
    https://nodewebapi.onrender.com/api/brasilApi/bancos


## Foram utilizados os seguintes pacotes:

### `npm start`

Pacote responsavel por gerencia as requisições http:
### `npm i axios`

Pacote responsavel por gerencia as rotas das paginas:
### `npm i react-router-dom`  

Pacote para usar typeScript:
### `npm install --save-dev typescript` -> lib para usar TypeScript

pacote para lidar com variaveis de ambiente:
### `npm install react-dotenv` 

pacote para utilização de BootStrap
### `npm install react-bootstrap bootstrap`

Dependencias para Type Script:
### `npm install axios @types/axios dotenv @types/node bootstrap @types/bootstrap`



## A saber:


Correção para o erro:

`ERR_OSSL_EVP_UNSUPPORTED` 

No arquivo:

```node_modules\react-scripts\config\webpack.config.js```


Adicione as seguintes linhas:

```
const crypto = require("crypto");
const crypto_orig_createHash = crypto.createHash;
crypto.createHash = algorithm => crypto_orig_createHash(algorithm == "md4" ? "sha256" : algorithm);
```

### Peculiaridades do projeto com TypeScript


Diretiva `React.FC`

```
const Banco: React.FC = () => {
```

"React.FC" é uma abreviação para "React.FunctionComponent". É uma interface genérica fornecida pelo React que define a estrutura e as propriedades que um componente de função deve ter.

Em projetos TypeScript, o uso de React.FC é uma prática comum para definir componentes de função que utilizam JSX.

O React.FC é uma interface genérica que já inclui as propriedades padrão do React, como children (para representar os elementos filhos do componente) e props (para representar as propriedades do componente). Assim, ao usar React.FC, você não precisa explicitamente definir essas propriedades.

Além disso, React.FC também permite uma inferência de tipo mais fácil para as props, pois pode ser genericamente parametrizado com um tipo para as props do componente. Por exemplo, React.FC<MyProps> define um componente que recebe props do tipo MyProps.



### Arquivos de codigo em um projeto React com TypeScript

`Arquivos .ts`: Arquivos de código fonte escritos em TypeScript

`Arquivos .tsx`: Arquivos de código fonte escritos em TypeScript com suporte a sintaxe JSX. O JSX é uma extensão de sintaxe do JavaScript que permite escrever componentes React de forma declarativa. 

`Arquivos .jsx`: Arquivos de código fonte escritos em JavaScript com suporte a sintaxe JSX. O JSX é uma extensão de sintaxe do JavaScript que permite escrever componentes React de forma declarativa. 