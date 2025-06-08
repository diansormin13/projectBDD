import { Given, When, Then } from '@wdio/cucumber-framework';
import ClioHomePage from '../page-objects/ClioHomePage';
import managePage from '../page-objects/ClioManagePage';
import credential from '../support/data/credentials.json';
import mattersPage from '../page-objects/MattersPage';


const { email, password } = credential.clioLogin;

Given(/^I am on the Clio homepage$/, async () => {
    await ClioHomePage.open();
});

When(/^I could see the Clio homePage$/, async () => {
    await ClioHomePage.validateOtherElements();
}); 

Then(/^I can click Login to Access Clio Manage$/, async () => {
    await managePage.navigateToManagePage();
    await managePage.validateClioManage()
    await managePage.loginToClioManage(email,password);
    await managePage.validateDetailManagePage();
}); 

Then(/^I able to see detail of matters page$/, async () => {
    await managePage.chooseMenu('Matters')
    await mattersPage.validatePageMatters()
}); 

Then(/^I can click button New Matters$/, async () => {
    await mattersPage.clickBtnNeeMatter()
}); 

Then(/^I am log out from Clio Manage Page$/, async () => {
    await managePage.logOutFromClioManage()
}); 

Then(/^I can see main page of form New Matters$/, async () => {
    await mattersPage.validateFormNewMatter()
}); 

Then(/^I want to cancel to create a New Matters$/, async () => {
    await mattersPage.cancelCreateNewMatter()
}); 

Then(/^I want to directly click save matter$/, async () => {
    await mattersPage.negativeValidateDirectlySaveMatter()
}); 

Then(/^I want to create new Matter$/, async () => {
    await mattersPage.createNewMatter('sumala', 'ini sumala')
}); 

