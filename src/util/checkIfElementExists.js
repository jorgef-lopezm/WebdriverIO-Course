/**
 * Check if the given element exists in the DOM one or more times
 * @param  {String}  selector  Element selector
 * @param  {Boolean} falsCase Check if the element (does not) exists
 * @param  {Number}  exactly  Check if the element exists exactly this number
 *                            of times
 */
export default (selector, falsCase, exactly) => {
    /**
     * The number of elements found in the DOM
     * @type {Int}
     */
    const amountOfElements = browser.elements(selector);

    if (falsCase === true) {
        expect(amountOfElements).to.have.lengthOf(
            0,
            `Element with selector "${selector}" should not exist on the page`
        );
    } else if (exactly) {
        expect(amountOfElements).to.have.lengthOf(
            exactly,
            `Element with selector "${selector}" should exist exactly ${exactly} time(s)`
        );
    } else {
        expect(amountOfElements).to.have.length.of.at.least(
            1,
            `Element with selector "${selector}" should exist on the page`
        );
    }
};