const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/home.page');
const { ElasticSipPage } = require('../pages/elasticSip.page');

test('should go to elastic sip pricing and check if the url contains the selected currency', async ({ page }) => {
	const homePage = new HomePage(page);
	const elasticSipPage = new ElasticSipPage(page);

	await homePage.goto();
	await homePage.cookiesCloseButtonClick();
	await homePage.getMenuListHover();
	await homePage.elasticSipButtonClick();

	const currencyCount = await elasticSipPage.getCurrencyArrayButton.count();
	for (let i = 0; i < currencyCount; ++i) {
		await elasticSipPage.currencyButtonClick();
		const currency = await elasticSipPage.getCurrencyArrayButton.nth(i).textContent();
		await elasticSipPage.currencyArrayButtonClick(i);
		await expect(page).toHaveURL('https://telnyx.com/pricing/elastic-sip?currency=' + currency);
	}
});
