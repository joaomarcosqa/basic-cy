Para instalar o cypress utilizar o comando:
npm install cypress --save-dev
ele irá instalar o cypress

Instalar tambem o Gerador de cpf o faker cpf estava com uma problemanpm install gerador-validador-cpf --save-dev


Para execução, usar o comando:
npx cypress open, selecionar E2E Testing, selecionar o navegador desejado e por fim selecionar a spec desejada.

No codigo foram inseridos alguns cy.wait(500) de forma proposital para ter uma melhor visualização do que ocorre no processo dentro do site.

Existem diversas formas de melhorar tanto a estrutura do projeto quanto o codigo, sendo, melhorar o readme, inserir custom commands, inserir um .gitignore, inserir um requirements, configurar mais formas de execução, adicionar mais ambientes para os testes serem executados, inserir tamanhos de tela diferentes, configurar uma pipeline entre outros.

Inseri dois prints do resultado na pasta chamada evidence.

de brinde foi um teste no site dos correios, estava fazendo uma busca e acabei brincando um pouco rsrs. Nele usei alguns elementos criando xpath como o cypress nao tem nada nativo para validar isso caso for rodar instalar a versão do cypress com apoio a validar xpath com o comando abaixo:
npm install -D cypress-xpath