import HomePage from '../src/pages/HomePage';
import {Accounts} from '../src/Accounts';
import Credentials from '../src/Credentials';

describe('Login and Logout tests', () => {
    it('Login and Logout first user in page', () => {
        const {name, password} = Credentials.getCredentials(Accounts.Active);

        HomePage
            .visit()
            .checkPageUrl()
            .header.clickOnLogInButton()
            .logInWithCredentials(name, password)
            .header.checkUserName(name)
            .clickOnLogOutButton()
            .checkPageUrl()
            .header.checkLogInButton();
    });
});