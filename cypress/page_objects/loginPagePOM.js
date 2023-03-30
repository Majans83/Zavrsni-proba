class Loginpage {

    get emailInputField() {
       return cy.get('input[type="email"]');
    }
get addNew() {
    return cy.contains('Add New');
}
get addOrg() {
    return cy.contains('Add Organization');
}

get orgName() {
    return cy.get('input[placeholder="Enter name..."]');
}

get nextBtn() {
    return cy.get('[name="next_btn"]');
}

get createBtn() {
    return cy.get('button[name="next_btn"]');
}

get avatarNewOrg(){
    return cy.get('.vs-l-organization__title > .vs-c-img--avatar > span');
}
    get passwordField() {
        return cy.get('input[type="password"]');
    }

    get loginBtn() {
        return  cy.get('button[type="submit"]');
    }
    get sideBar() {
        return cy.get('p[class="vs-c-sidebar-info"]');
    }
    login(email, pass) {
        loginPage.emailInputField.type('maja.turanski+21@gmail.com');
        loginPage.passwordField.type('thermaltake08');
        loginPage.loginBtn.click();
    }
}

export const loginPage = new Loginpage()