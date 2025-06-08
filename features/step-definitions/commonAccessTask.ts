import { Then } from '@wdio/cucumber-framework';
import task from '../page-objects/TaskPage'
import ClioManagePage from '../page-objects/ClioManagePage';

Then(/^I able to click button Create New Task$/, async () => {
    await ClioManagePage.chooseMenu('Task')
    await task.clickBtnCreateTask();
});

Then(/^I can see the detail Form of Create New Task$/, async () => {
    await task.validateAfterClik();
});

Then(/^I click button cancel$/, async () => {
    await task.cancelNewTask();
});

Then(/^I click button cancel$/, async () => {
    await task.cancelNewTask();
});
