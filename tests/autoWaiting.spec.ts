import  {expect, test} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('http://uitestingplayground.com/ajax')
    await page.locator('#ajaxButton').click()
    
});

test('auto waiting', async({page}) => {
    const successBtn = page.locator('.bg-success')
    //await successBtn.click()
    //const text  = await successBtn.textContent()

    //await successBtn.waitFor({state: "attached"})
    //const text = await successBtn.allTextContents()

    //expect(text).toContain('Data loaded with AJAX get request.')

    await expect(successBtn).toHaveText('Data loaded with AJAX get request.', {timeout: 20000})
})

test('alt  waits', async({page}) => {
    const successBtn = page.locator('.bg-success')

    //___ wait for seletor 
    //await page.waitForSelector('.bg_success')

    //__ wait for particular response 
    await page.waitForResponse('http://uitestingplayground.com/ajaxdata')

    const text  = await successBtn.textContent()

    expect(text).toContain('Data loaded with AJAX get request.')

})