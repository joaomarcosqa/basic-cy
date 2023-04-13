import 'cypress-xpath'

describe('Teste Correios', () => {
    it('Testar CEP 80700000', () => {
        cy.intercept('GET', 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente', (req) => {
            if (req.query.cep === '80700000') {
                req.reply({ fixture: 'cep-not-found.xml' })
            } else if (req.query.cep === '01013001') {
                req.reply({ fixture: 'cep-found.xml' })
            }
        })

        cy.visit('https://www.correios.com.br/')
        cy.wait(500)
        // Procurar por id
        cy.get('.busca-txt').click()
        cy.wait(500)
        // Procurar por id
        cy.get('#searchGadget')
            .type('80700000')
        cy.wait(500)
        // Procurar por id
        cy.get('.searchButton').click()
        cy.wait(500)
        cy.get('#search-results > p').should('have.text', 'Nenhum resultado foi encontrado.')
        cy.wait(500) // Tempo de espera mínimo para evitar sobrecarga de requisições

        // Voltar à tela inicial
        cy.get('.logo-correios').click()
        cy.wait(500)

        // Procurar por xpath
        cy.visit('https://buscacepinter.correios.com.br/app/endereco/index.php')
        cy.wait(500)
        cy.xpath('//input[@id="endereco"]')
            .type('01013-001')
        cy.wait(500)
        cy.xpath('//button[@name="btn_pesquisar"]').click()
        cy.wait(500)
        cy.get('tbody > tr > [data-th="Logradouro/Nome"]', { timeout: 10000 })
            .should('have.text', 'Rua Quinze de Novembro - lado ímpar')
        cy.wait(500) // Tempo de espera mínimo para evitar sobrecarga de requisições

        // Voltar à tela inicial
        cy.visit('https://www.correios.com.br/')
        cy.wait(500)

        // Procurar por css
        cy.get('#objetos').type('SS987654321BR')
        cy.wait(500)
        // Fechar o browser
    })
})