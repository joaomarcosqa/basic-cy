Para instalar o cypress utilizar o comando:
npm install cypress-xpath --save-dev

ele irá instalar o cypress já com a funcção de inspecionar por xpath, pois não é padrão do cypress, o import ja esta feito no arquivo de teste.

Para execução, usar o comando:
npx cypress open, selecionar E2E Testing, selecionar o navegador desejado e por fim selecionar a spec desejada, no caso a "teste-br.cy.js".

No codigo foram inseridos alguns cy.wait(500) de forma proposital para ter uma melhor visualização do que ocorre no processo dentro do site dos correios.

Existem diversas formas de melhorar tanto o projeto quanto o codigo, sendo, melhorar o readme, inserir custom commands, configurar mais formas de execução, adicionar mais ambientes para os testes serem executados, configurar uma pipeline entre outros.

Neste site existem muitos erros de backend que encontrei na execução dos testes, isso é um problema porque nao tem como garantir que o teste funcione 100% se o site esta com erros.

Inseri um video da execução dentro do projeto na pasta evidence.