import Home from '../page_objects/home.page.js';
import Button from '../step_objects/button.js';

describe("Verify whether webdriveruniversity links on homepage work correctly", function() {
	it("check that the contact us button opens the contact us page", function(done) {
		var homePage = new Home();
		homePage.open();
		let button = new Button('body #contact-us');
		button.click();
	});
});
