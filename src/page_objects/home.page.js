import Page from './page';

/**
 * Class representing a room page.
 * In this class, all variables and methods that are proper to the room page will be declared.
 * @extends Page
 */
class Home extends Page {
    constructor(){
        super();
        this.name = 'Home';
        this.URL = '/';
    }
}

export default Home;