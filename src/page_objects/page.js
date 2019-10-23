/** Class representing a page */
class Page{
    /**
     * Create a page.
     * In this class, all variables and methods that are common to all pages will be declared.
     * @param {Object} brand The brand for the instance of the page.
     */
    constructor(){
        this.name = '';
        this.URL = '';
    }

    /**
     * Opens the page using domain for brand specified on page creation and port speficied on execution.
     * @param {Object} urlParameters The parameters to be placed in the url after the '?' symbol (www.example.com/?param=value).
     * @example 
     */
    open(){
        browser.url(this.URL);
    }
}

export default Page;