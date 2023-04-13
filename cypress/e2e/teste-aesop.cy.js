import faker from 'faker';

const { generate } = require('gerador-validador-cpf');

describe('Cadastro de usuário', () => {
    beforeEach(() => {
        // Acessa a página de cadastro
        cy.visit('https://www.aesop.com.br/cadastre-se');
        cy.contains('Configurações de cookies').should('be.visible');
        cy.wait(500)
        cy.get('#onetrust-accept-btn-handler').click();
        cy.wait(500)
    });

    it('Deve cadastrar um novo usuário com sucesso', () => {
        // Gera dados falsos usando o 'Faker'
        const nome = faker.name.firstName();
        const sobrenome = faker.name.lastName();
        const email = faker.internet.email();
        const cpfNumber = generate();

        cy.get(':nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(nome);
        cy.wait(500)
        cy.get(':nth-child(1) > :nth-child(2) >.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(sobrenome);
        cy.wait(500)
        cy.get('.natds40 > :nth-child(2) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(email);
        cy.wait(500)
        cy.get('#password-field').type('125DSD333e@@e');
        cy.wait(500)
        cy.get('#confirmPassword-field').type('125DSD333e@@e');
        cy.wait(500)
        cy.get(':nth-child(3) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(cpfNumber);
        cy.wait(500)
        cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiIconButton-label > .natds72').click();
        cy.wait(500)
        cy.get(':nth-child(4) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('10102000');
        cy.wait(500)
        cy.get(':nth-child(4) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('11999999997');
        cy.wait(500)
        // Clica no botão de aceitartermos
        
        cy.get('#acceptedterms').click();
        cy.wait(500)
        // Clica no botão de cadastrar
        cy.get('.natds81 > .MuiButtonBase-root').click();
        cy.wait(500)
        cy.get('.natds5 > .MuiButtonBase-root > .MuiIconButton-label > .material-icons').click();
        
        // Verifica se a mensagem de sucesso é exibida
        cy.contains('Olá', { timeout: 10000 }).should('be.visible');
        cy.contains('Meus dados', { timeout: 10000 }).should('be.visible');
    });

    it('Deve cadastrar um novo usuário sem sucesso', () => {
        // Gera dados falsos usando o 'Faker'
        const nome = faker.name.firstName();
        const sobrenome = faker.name.lastName();
        const email = faker.internet.email();
        const cpfNumber = generate();

        cy.get(':nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(nome);
        cy.wait(500)
        cy.get(':nth-child(1) > :nth-child(2) >.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(sobrenome);
        cy.wait(500)
        cy.get('.natds40 > :nth-child(2) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(email);
        cy.wait(500)
        cy.get('#password-field').type('125DSD333e@@e');
        cy.wait(500)
        cy.get('#confirmPassword-field').type('125DSD333e@@e');
        cy.wait(500)
        cy.get(':nth-child(3) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(cpfNumber);
        cy.wait(500)
        cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiIconButton-label > .natds72').click();
        cy.wait(500)
        cy.get(':nth-child(4) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('10102000');
        cy.wait(500)
        cy.get(':nth-child(4) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('11999999997');
        cy.wait(500)
        cy.get('.natds81 > .MuiButtonBase-root').click();
        //Valida mensagem de necessidade de selecionar termos
        cy.contains('É necessário aderir aos termos de uso', { timeout: 10000 }).should('be.visible');

    });

    
});
