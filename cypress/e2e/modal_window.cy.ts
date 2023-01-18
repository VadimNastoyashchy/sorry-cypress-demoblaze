import HomePage from '../src/pages/HomePage';

describe('Check modals window on the page', () => {
    it('Check Contact modal window', () => {
        HomePage
            .visit()
            .header.clickOnContactButton()
            .checkTextInModalHeader('New message')
            .checkTextFormAndInputField('Contact Email:')
            .checkTextFormAndInputField('Contact Name:')
            .checkTextFormAndInputField('Message:')
            .checkHeaderCloseButton()
            .checkFooterCloseButton()
            .checkFooterSendButton('Send message');
    });

    it('Check About us modal window', () => {
        HomePage
            .visit()
            .header.clickOnAboutUsButton()
            .checkTextInModalHeader('About us')
            .checkThatAboutUsVideoVisible()
            .checkHeaderCloseButton()
            .checkFooterCloseButton();
    });

    it('Check Log in modal window', () => {
        HomePage
            .visit()
            .header.clickOnLogInButton()
            .checkTextInModalHeader('Log in')
            .checkTextFormAndInputField('Username:')
            .checkTextFormAndInputField('Password:')
            .checkHeaderCloseButton()
            .checkFooterCloseButton()
            .checkFooterLogInButton('Log in');
    });

    it('Check Sign up modal window', () => {
        HomePage.visit()
            .header.clickOnSignUpButton()
            .checkTextInModalHeader('Sign up')
            .checkTextFormAndInputField('Username:')
            .checkTextFormAndInputField('Password:')
            .checkHeaderCloseButton()
            .checkFooterCloseButton()
            .checkFooterSignUpButton('Sign up');
    });
});