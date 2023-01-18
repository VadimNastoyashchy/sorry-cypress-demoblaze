import HomePage from '../src/pages/HomePage';

describe('Order test', () => {
    it('Check the addition of the first mobile product to the basket', () => {
        const firstMobileTitleProductItem: string = 'Samsung galaxy s6';

        HomePage
            .visit()
            .categories.clickOnPhonesCategoryButton()
            .clickOnFirstTitleProductItem()
            .checkProductName(firstMobileTitleProductItem)
            .clickAddToCardButton()
            .checkAlertWindow()
            .header.clickOnCartButton()
            .checkThatProductVisibleInCart()
            .checkFirstProductThatAddedInCard(firstMobileTitleProductItem);
    });
});