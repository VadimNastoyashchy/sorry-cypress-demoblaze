import HomePage from '../src/pages/HomePage';

describe('Functionality tests', () => {
    it('Check that the product exists in the Phone category', () => {
        HomePage
            .visit()
            .categories.clickOnPhonesCategoryButton()
            .checkFirstProductItemIsVisible();
    });

    it('Check that the product exists in the Laptops category', () => {
        HomePage
            .visit()
            .categories.clickOnLaptopsCategoryButton()
            .checkFirstProductItemIsVisible();
    });

    it('Check that the product exists in the Monitors category', () => {
        HomePage
            .visit()
            .categories.clickOnMonitorsCategoryButton()
            .checkFirstProductItemIsVisible();
    });

    it('Check that the carousel works consistently.', () => {
        HomePage
            .visit()
            .carousel.clickCarouselNextButton()
            .checkActiveItem('Second slide')
            .clickCarouselPreviousButton()
            .checkActiveItem('First slide')
            .clickCarouselNextButton()
            .checkActiveItem('Second slide')
            .clickCarouselNextButton()
            .checkActiveItem('Third slide')
            .clickCarouselNextButton()
            .checkActiveItem('First slide');
    });
});