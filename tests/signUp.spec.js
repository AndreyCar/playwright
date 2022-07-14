const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/home.page');
const { SignUpPage } = require('../pages/signUp.page');

test('should signUp from home page with valid information', async ({ page }) => {
	const homePage = new HomePage(page);
	const signUpPage = new SignUpPage(page);

	await homePage.goto();
	await homePage.cookiesCloseButtonClick();
	await homePage.signUpButtonClick();
	await expect(page).toHaveURL('https://telnyx.com/sign-up');

	await signUpPage.emailInputClick();
	let mail_random = (Math.random() + 1).toString(36).substring(2);
	await signUpPage.emailFill(mail_random.concat('@gmail.com'));

	await signUpPage.fullNameInputClick();
	let fullName_random = (Math.random() + 1).toString(36).substring(2);
	await signUpPage.fullNameFill(fullName_random);

	await signUpPage.passwordInputClick();
	let password_random = (Math.random() + 1).toString(36).substring(2);
	await signUpPage.passwordFill(password_random.concat('.A10'));

	await signUpPage.termsConditionsButtonClick();
	await signUpPage.submitsButtonClick();
});
