const { expect } = require('@playwright/test');

exports.ElasticSipPage = class ElasticSipPage {
	constructor(page) {
		this.page = page;

		this.getCurrencyButton = page.locator('.sc-ecffda1a-1.hVpqmy').nth(1);
		this.getCurrencyListBox = page.locator('.sc-ecffda1a-2.csMQtW').nth(1);
		this.getCurrencyArrayButton = page.locator('.sc-ecffda1a-4.dCDohY:nth-child(2) .sc-e64845a7-1.dQoFtc');
	}

	async goto() {
		await this.page.goto('https://telnyx.com/pricing/elastic-sip');
	}
	async toBeVisibleEnabled(element) {
		await expect(element).toBeVisible();
		await expect(element).toBeEnabled();
	}

	async currencyButtonClick() {
		await this.toBeVisibleEnabled(this.getCurrencyButton);
		await this.getCurrencyButton.click();
		await expect(this.getCurrencyListBox).not.toBeHidden();
	}

	async currencyArrayButtonClick(index) {
		await this.toBeVisibleEnabled(this.getCurrencyArrayButton.nth(index));
		await this.getCurrencyArrayButton.nth(index).click();
	}
};
