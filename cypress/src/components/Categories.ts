import Laptops from './categories/Laptops';
import Monitors from './categories/Monitors';
import Phone from './categories/Phone';

class Categories {

    private listCategoriesContainer: string = '.list-group';

    private get categoryButton(): Cypress.Chainable {
        return cy.get(`${this.listCategoriesContainer} [id="itemc"]`);
    }

    public clickOnPhonesCategoryButton(): typeof Phone {
        this.categoryButton
            .should('be.visible')
            .contains('Phones')
            .click();
        return Phone;
    }

    public clickOnLaptopsCategoryButton(): typeof Laptops {
        this.categoryButton
            .should('be.visible')
            .contains('Laptops')
            .click();
        return Laptops;
    }

    public clickOnMonitorsCategoryButton(): typeof Monitors {
        this.categoryButton.should('be.visible')
            .contains('Monitors')
            .click();
        return Monitors;
    }
}

export default new Categories();