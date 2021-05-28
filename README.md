# desafio-descomplica-front

Esse projeto se refere à aplicação React para buscar e filtrar alunos.

É necessário rodar a API antes: https://github.com/pauloendoh/desafio-descomplica-back

## Como executar esse projeto

No diretório do projeto, você pode executar: 

### `npm install`
### `npm start`

<br>
Ou pode criar e rodar uma imagem docker 

### `docker build . -t pauloendoh/descomplica-front`
### `docker run -p 3000:3000 -d pauloendoh/descomplica-front`

<br>
Com o projeto executando, você pode selecionar e filtrar os alunos em: 

### `http://localhost:3000/`
![image](https://user-images.githubusercontent.com/17272651/120005444-363b4200-bfae-11eb-99a5-cc56580b6c57.png)

## Executando testes Cypress

No diretório do projeto, com ambas aplicações rodando (API e Front), use o comando:

### `npx cypress open`

