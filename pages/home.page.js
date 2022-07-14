const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {
	constructor(page) {
		this.page = page;
		this.getCookiesCloseButton = page.locator('.sc-df34c536-5.jRrWoh');
		this.getMenuList = page.locator('.sc-7b3980dc-6.gdETaM');
		this.getElasticSipButton = page.locator('.sc-7b3980dc-2.bjOBlW [href="/pricing/elastic-sip"]');
		this.getSignUpButton = page.locator('.sc-9d98fd33-5.dVueFL.sc-9d98fd33-7.kpJVrZ [href="/sign-up"]');
	}

	async goto() {
		await this.page.goto('https://telnyx.com/');
	}

	async toBeVisibleEnabled(element) {
		await expect(element).toBeVisible();
		await expect(element).toBeEnabled();
	}

	async getMenuListHover() {
		await this.getMenuList.last().hover();
	}

	async elasticSipButtonClick() {
		await this.toBeVisibleEnabled(this.getElasticSipButton);
		await this.getElasticSipButton.click();
	}

	async cookiesCloseButtonClick() {
		await this.toBeVisibleEnabled(this.getCookiesCloseButton);
		await this.getCookiesCloseButton.click();
	}

	async signUpButtonClick() {
		await this.toBeVisibleEnabled(this.getSignUpButton);
		await this.getSignUpButton.click();
	}
};
