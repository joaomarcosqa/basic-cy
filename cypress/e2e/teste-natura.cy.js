import faker from 'faker';

const { generate } = require('gerador-validador-cpf');

describe('Cadastro de usuário', () => {
    beforeEach(() => {
        // Acessa a página de cadastro
        cy.visit('https://www.natura.com.br/cadastre-se?redirect=%2F');
        cy.contains('Aceitar todos os cookies').should('be.visible');
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

        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(nome);
        cy.wait(500)
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(sobrenome);
        cy.wait(500)
        cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(email);
        cy.wait(500)
        cy.get('#password-field').type('12DSe#$12');
        cy.wait(500)
        cy.get('#confirmPassword-field').type('12DSe#$12');
        cy.wait(500)
        cy.get(':nth-child(8) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(cpfNumber);
        cy.wait(500)
        cy.get(':nth-child(9) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('10102000');
        cy.wait(500)
        cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiIconButton-label > .natds59').click();
        cy.wait(500)
        cy.get(':nth-child(11) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('11999999999');
        cy.wait(500)
        // Clica no botão de aceitartermos
        
        cy.get('#acceptedterms').click();
        cy.wait(500)
        // Clica no botão de cadastrar
        
        cy.get('.natds93 > .MuiButtonBase-root').click();
        cy.wait(500)
        // Verifica se a mensagem de sucesso é exibida
        // cy.contains('Usuário cadastrado com sucesso!').should('be.visible');
    });

    it('Deve cadastrar um novo usuário sem sucesso', () => {
        // Gera dados falsos usando o 'Faker'
        const nome = faker.name.firstName();
        const sobrenome = faker.name.lastName();
        const email = faker.internet.email();
        const cpfNumber = generate();

        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(nome);
        cy.wait(500)
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(sobrenome);
        cy.wait(500)
        cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(email);
        cy.wait(500)
        cy.get('#password-field').type('12DSe#$12');
        cy.wait(500)
        cy.get('#confirmPassword-field').type('12DSe#$12');
        cy.wait(500)
        cy.get(':nth-child(8) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(cpfNumber);
        cy.wait(500)
        cy.get(':nth-child(9) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('10102000');
        cy.wait(500)
        cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiIconButton-label > .natds59').click();
        cy.wait(500)
        cy.get(':nth-child(11) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('11999999999');
        cy.wait(500)
        // Clica no botão de cadastrar
        
        cy.get('.natds93 > .MuiButtonBase-root').click();
        cy.wait(500)
        //Valida mensagem de necessidade de selecionar termos
        cy.contains('É necessário aderir aos termos de uso', { timeout: 10000 }).should('be.visible');

    });

    
});
