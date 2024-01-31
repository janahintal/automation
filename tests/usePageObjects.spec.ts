import  {expect, test} from '@playwright/test'
import { NavigationPage } from '../page-object/navigationPage';

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/')
    
});

test('navigate to forms',async ({page}) => {
    const navigateTo = new NavigationPage(page)
    await navigateTo.formLayoutsPage()
    await navigateTo.datePickerPage()
    await navigateTo.toastPage()
    await navigateTo.tooltipPage()
})

