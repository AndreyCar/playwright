const { expect } = require('@playwright/test');

exports.SignUpVerifyPage = class SignUpVerifyPage {
	constructor(page) {
		this.page = page;
		this.getEmailText = page.locator('.sc-81d2e95d-3.lghbwG strong');
	}
};
