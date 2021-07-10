# reprograma-elaExplica

Turma Online 11 - Todas em Tech | Back-end | 2021 | Projeto Final 


## Introdução da problemática

<img src="https://i.pinimg.com/474x/b4/17/86/b41786b5e7627ed0c678a0ef4a62e9f6.jpg" alt="video chamada" width="200">
Há pouca representatividade de mulheres em engenharias e ciências exatas e isto não é nenhuma novidade. Estão surgindo muitas iniciativas surgindo no meio da programação (e isto é ótimo!), mas  há pouquíssimas voltadas à mulheres em engenharias, matemática e física, enquanto que a desigualdade de gênero permanece nesses meios e influencia no aumento da evasão ou até diminuição do interesse em ingressar nestes cursos. Acontece que apenas matérias sobre mulheres na engenharia, no dia da mulher da engenharia, e posts em sites não ajudam a resolver o problema.
Segundo o Censo da Educação Superior de 2016, as mulheres, que são a maior parte da população brasileira, já representam 57,2% dos estudantes matriculados em cursos de graduação no país. Ainda assim, este aumento não acompanhou a proporção entre homens e mulheres nos cursos de ciências exatas. O mesmo relatório mostra, por exemplo, que no curso de engenharia mecânica a participação feminina está em 10,2%, fenômeno que se repete na engenharia elétrica (13,1%) e na engenharia civil (30,3%). Então, se as brasileiras já são maioria no ensino superior, por que são tão poucas nas ciências exatas e engenharias? A pergunta não é de só uma resposta, mas a elaExplica vem como solução para uma vertente deste problema: representatividade.

Tendo em vista isto, a elaExplica tem o objetivo de ser uma plataforma de disponibilização de cursos ministrados apenas por mulheres nas áreas de Engenharia, Matemática e Física para ensino superior e matemática e física para ensino médio e pré-vestibular, a fim de aumentar o ingresso e diminuir evasão  de mulheres nesses campos.
A API disponibilizada aqui organiza os cursos disponibilizados no site, filtrando-os por área e, futuramente, por nível de ensino.

## Tecnologias utilizadas:
| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm ou yarn` | Gerenciador de pacotes|
| `MongoDb` | Banco de dado não relacional orietado a documentos|
| `MongoDb Compass` | Interface gráfica para verificar se os dados foram persistidos|
| `MongoDb Atlas` | Serviço do bando de dados para auxiliar no deploy da aplicação|
| `Heroku` | Plataforma para realizar o build e deploy da aplicação|
 `Postman` | Interface gráfica para realizar os testes|

<br>
<br>

## 📁 Arquitetura 

```
 📁 reprograma-elaExplica-Projeto-Final
   |
   |-  📁 src
   |    |
   |    |- 📁 controllers
   |         |- 📄 areasController.js
   |         |- 📄 superiorController.js
   |
   |    |- 📁 data
   |         |- 📄 dbConfig.js
   |
   |    |- 📁 models
   |         |- 📄 areasSchema.js
   |         |- 📄 superiorSchema.js
   |
   |    |- 📁 routes
   |         |- 📄 areasRoutes.js 
   |         |- 📄 index.js
   |         |- 📄 superiorRoutes.js 
        |- 📄 app.js
   |
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 server.js
   |- 📄 Procfile
   |- 📄README.md

```

<br>
<br>

## Rotas/ Endpoints 
* GET  **"/superior/fisica"** Deverá retornar todos os cursos de nível superior da área da Física.
* GET  **"/superior/matematica"** Deverá retornar todos os cursos de nível superior da área da Matemática.
* GET  **"/superior/engenharia"** Deverá retornar todos os cursos de nível superior da área da Engenharia.

- [x]  **"/estudios"** Deverá retornar todos os estudios cadastrados
- [x]  "**/titulos**" Deverá retornar todos os títulos cadastrados, cada um fazendo referencia ao seu respectivo estudio

- [x]  "**/estudios**" Deverá criar um estudio 
- [x]  "**/titulos**"  Deverá criar um título 

- [ ]  "/titulos/[ID]" Deverá deletar titulo por id específico e retorna mensagem amigável
- [ ]  "/estudios/[ID]" Deverá deletar estudio por id específico e retorna mensagem amigável

- [ ]  "/titulos/[ID]" Deverá alterar informação específica dentro de um titulo por id específico e retorna o título alterado
- [ ]  "/estudios/[ID]" Deverá alterar informação específica dentro de um estudio por id específico e retorna o título alterado


### Regras de negócio

- [x]  Não deverá ser possível criar estudio com o mesmo nome
- [ ]  Não deverá ser possível criar título com o mesmo nome
- [ ]  Para criar um novo título, deverá vincular no momento da criação a um estudio já existente no sistema

<br>
<br>

### Dados para Collection Estudios

- id: autogerado e obrigatório
- nome: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório


### API deve retornar seguinte JSON:

```jsx
[
    {
    "criadoEm": "2021-06-05T01:27:40.886Z",
    "_id": "60bad38c8c299c285d2685e7",
    "nome": "Marvel",
    "__v": 0
    },
    {
    "criadoEm": "2021-06-05T01:27:40.886Z",
    "_id": "60bad33d8c299c285d2685e5",
    "nome": "Ghibli",
    "__v": 0
  },
  {
    "criadoEm": "2021-06-05T01:27:40.886Z",
    "_id": "60bad33d8c299c285d2685e5",
    "nome": "Pixar",
    "__v": 0
  }
]
```
<br>
<br>

### Dados para Collection Titulos

- id: autogerado e obrigatório
- nome: texto e obrigatório
- genero: texto e obrigatório
- descricao: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório
- estudio: referencia do estudio cadastrado previamente obrigatório


### API deve retornar seguinte JSON:

```jsx
[
  {
    "criadoEm": "2021-06-05T01:27:40.892Z",
    "_id": "60bad3568c299c285d2685e6",
    "nome": "Spirited Away",
    "genero": "romance",
    "descricao": "SPIRITED AWAY é uma fantasia maravilhosa sobre uma jovem garota, Chihiro, presa em um estranho mundo novo de espíritos. Quando seus pais passam por uma transformação misteriosa, ela deve invocar a coragem que ela nunca soube que tinha para se libertar e retornar sua família para o mundo exterior. Uma história inesquecível e cheia de criatividade, SPIRITED AWAY o levará em uma jornada além da sua imaginação.",
    "estudio": {
      "criadoEm": "2021-06-05T01:27:40.886Z",
      "_id": "60bad33d8c299c285d2685e5",
      "nome": "Ghibli",
    }
  }
]
```
<br>
<br>

## Entregavel

Crie seu repositório contendo:
 - um readme com os maiores aprendizados nesse projeto e copiando todas as informações sobre o projeto
 - cumprimento total do contrato (requisitos e regras de negócios) 
 - realizar testes no Postman e verificar se os dados estão persistindo com o mongoDB

Subir o repositório no classroom.

## Simara Conceição
- [instagram](https://www.instagram.com/simara_conceicao)
- [linkedin](https://www.linkedin.com/in/simaraconceicao/)
- [github](https://github.com/simaraconceicao)
- [spotify](https://open.spotify.com/show/59vCz4TY6tPHXW26qJknh3)
- [quero ser dev](https://queroserdev.com)
