import BasePage from '../base/BasePage';

class CartPage extends BasePage {
    private get productItemInCart(): Cypress.Chainable {
        return cy.get('.success');
    }

    public checkThatProductVisibleInCart(): this {
        this.productItemInCart.should('be.visible');
        return this;
    }

    public checkFirstProductThatAddedInCard(titleProduct: string): this {
        this.productItemInCart.contains(titleProduct);
        return this;
    }
}

export default new CartPage();