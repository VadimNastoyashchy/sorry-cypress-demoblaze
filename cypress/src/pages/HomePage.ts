import Header from '../components/Header';
import BasePage from '../base/BasePage';
import Categories from '../components/Categories';
import Carousel from '../components/slider/Carousel';

class HomePage extends BasePage {

    public header: typeof Header = Header;
    public categories: typeof Categories = Categories;
    public carousel: typeof Carousel = Carousel;

    constructor() {
        super('index.html');
    }
}

export default new HomePage();