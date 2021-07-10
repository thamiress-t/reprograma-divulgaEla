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

* GET **"/"** Retorna a apresentação da API.

* GET **"/areas"** Retorna todas as áreas de estudo cadastradas
* GET  "**/superior**" Retorna todos os cursos de nível superior cadastrados, cada um fazendo referencia à sua respectiva área de estudo.

* GET  **"/superior/fisica"** Retorna todos os cursos de nível superior da área da Física.
* GET  **"/superior/matematica"** Retorna todos os cursos de nível superior da área da Matemática.
* GET  **"/superior/engenharia"** Retorna todos os cursos de nível superior da área da Engenharia.

* POST  **"/areas"** Recebe uma nova area de estudo, adiciona ela ao acervo e retorna o item criado
* POST  **"/superior"** Recebe um novo curso, adiciona ele ao acervo de cursos superiores e retorna o item criado.

* DELETE  **"/areas/[ID]"** Deleta uma área de estudo cadastrada baseada em seu id.
* DELETE  **"/superior/[ID]"**  Deleta um curso de nível superior baseado em seu id.

* PATCH  **"/areas/[ID]"** Atualiza alguma propriedade da área de estudo cadastrada e retorna o item atualizado
* PATCH  **"/superior/[ID]"** Atualiza alguma propriedade de um curso de nível superior cadastrado e retorna o item atualizado


### Regras de negócio

-  Não é possível criar uma área com o mesmo nome de alguma já cadastrada.
-  Não é possível criar um curso com o mesmo nome de algum já cadastrado.
-  Para criar um novo curso, deverá vinculá-lo no momento da criação a uma área de estudo já cadastrada no sistema.

<br>
<br>

### Dados para Collection Areas

- id: autogerado e obrigatório
- nome: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório


### API retorna o seguinte JSON:

```jsx
[
  {
    "criadoEm": "2021-09-07T00:00:00.000Z",
    "_id": "60e91363a0a7e300042d2d56",
    "nome": "Fisica",
    "__v": 0
  },
  {
    "criadoEm": "2021-09-07T00:00:00.000Z",
    "_id": "60e91384a0a7e300042d2d5a",
    "nome": "Matematica",
    "__v": 0
  },
  {
    "criadoEm": "2021-09-07T00:00:00.000Z",
    "_id": "60e91390a0a7e300042d2d5d",
    "nome": "Engenharia",
    "__v": 0
  }
]
```
<br>
<br>

### Dados para Collection Titulos

- id: autogerado e obrigatório
- nome: texto e obrigatório
- descricao: texto e obrigatório
- pre_requisito: texto e obrigatório
- area: referencia da área cadastrada previamente. Obrigatório.
- criadoEm: data gerada automaticamente e obrigatório


### API retorna seguinte JSON (exemplo):

```jsx
{
    "criadoEm": "2021-09-07T00:00:00.000Z",
    "_id": "60e91546a0a7e300042d2d61",
    "nome": "Cálculo Diferencial e Integral 3",
    "descricao": "SÉRIES, FÓRMULA DE TAYLOR. MÁXIMOS E MÍNIMOS. INTEGRAIS TRIPLAS. INTEGRAIS DE LINHA E DE SUPERFÍCIE. TEOREMAS DE GREEN, GAUSS E STOKES.",
    "pre_requisito": "Cálculo Diferencial e Integral 2",
    "area": {
      "criadoEm": "2021-09-07T00:00:00.000Z",
      "_id": "60e91384a0a7e300042d2d5a",
      "nome": "Matematica",
      "__v": 0
    },
    "__v": 0
  }
```
## Melhorias Futuras

Nos próximos passos, pretende-se acrescentar o nível de ensino pré-vestibular na API, já que o objetivo da plataforma é de não só diminuir a evasão e desmotivação das estudantes universitárias, mas também aumentar o interesse de novas garotas nas ciências exatas e engenharias, fazendo-as se sentirem pertencentes, representadas, acolhidas e capazes.

<br>
<br>

## Thamires Tavares
- [instagram](https://www.instagram.com/thamiress_t)
- [linkedin](https://www.linkedin.com/in/thamires-tavares-989b771a7/)
- [github](https://github.com/thamiress-t)
- [heroku](https://reprograma-elaexplica.herokuapp.com/)
