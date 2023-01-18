import Header from '../components/Header';
import LogInModal from '../modals/LogInModal';
import BasePage from '../base/BasePage';
import Categories from '../components/Categories';
import Carousel from '../components/slider/Carousel';
import ContactModal from '../modals/ContactModal';
import AboutUsModal from '../modals/AboutUsModal';
import SignUpModal from '../modals/SignUpModal';

class HomePage extends BasePage {

    public header: typeof Header = Header;
    public logInModal: typeof LogInModal = LogInModal;
    public categories: typeof Categories = Categories;
    public carousel: typeof Carousel = Carousel;
    public contactModal: typeof ContactModal = ContactModal;
    public aboutUsModal: typeof AboutUsModal = AboutUsModal;
    public singUpModal: typeof SignUpModal = SignUpModal;

    constructor() {
        super('index.html');
    }
}

export default new HomePage();