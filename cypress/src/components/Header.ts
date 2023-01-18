import CartPage from '../pages/CartPage';
import LogInModal from '../modals/LogInModal';
import HomePage from '../pages/HomePage';
import ContactModal from '../modals/ContactModal';
import AboutUsModal from '../modals/AboutUsModal';
import SignUpModal from '../modals/SignUpModal';

class Header {

    private get logInButton(): Cypress.Chainable {
        return cy.get('#login2');
    }

    private get logOutButton(): Cypress.Chainable {
        return cy.get('#logout2');
    }

    private get userNameInHeader(): Cypress.Chainable {
        return cy.get('#nameofuser');
    }

    private get headerButton(): Cypress.Chainable {
        return cy.get('.nav-link');
    }

    public clickOnLogInButton(): typeof LogInModal {
        this.logInButton.contains('Log in').click();
        return LogInModal;
    }

    public clickOnContactButton(): typeof ContactModal {
        this.headerButton.contains('Contact').click();
        return ContactModal;
    }

    public clickOnAboutUsButton(): typeof AboutUsModal {
        this.headerButton.contains('About us').click();
        return AboutUsModal;
    }

    public clickOnSignUpButton(): typeof SignUpModal {
        this.headerButton.contains('Sign up').click();
        return SignUpModal;
    }

    public clickOnCartButton(): typeof CartPage {
        this.headerButton.contains('Cart').click();
        return CartPage;
    }

    public checkUserName(userName: string): this {
        this.userNameInHeader.should('have.text', `Welcome ${userName}`);
        return this;
    }

    public clickOnLogOutButton(): typeof HomePage {
        this.logOutButton.click();
        return HomePage;
    }

    public checkLogInButton(): this {
        this.logInButton.should('have.text', 'Log in');
        return this;
    }
}

export default new Header();