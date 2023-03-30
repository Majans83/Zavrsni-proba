/// <reference types="Cypress" />

const credentials = require('../fixtures/user.json');
const { loginPage } = require('../page_objects/loginPagePOM');


describe('Login', () => {

    it('Successfull login', () => {
        cy.visit('/login');
        loginPage.emailInputField.type(credentials.userEmail);
        loginPage.passwordField.type('thermaltake08');
        loginPage.loginBtn.click();

        cy.url().should('contains', '/my-organizations');
        cy.get(('button[type="submit"]')).should('not.exist');

    })

    xit('Create new organization', () => {
        cy.visit('/login')
        loginPage.login('maja.turanski+21@gmail.com', 'thermaltake08');
        loginPage.addNew.click();
        loginPage.addOrg.click();
        loginPage.orgName.type('new org');
        loginPage.nextBtn.click();
        loginPage.createBtn.click();
        cy.url().should('contains', '/my-organizations');
        loginPage.avatarNewOrg.should('be.visible');

    })

    it.only('Login Via API', () => {
        cy.request({
            method: 'POST',
            url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/login',
            body: {

                "email": "maja.turanski+21@gmail.com",
                "password": "thermaltake08",
                "g-recaptcha-response": ""
            }
        }).then((response) => {

            expect(response.status).eq(200);
            
        })
    })
})

