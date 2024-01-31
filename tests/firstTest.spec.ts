import  {expect, test} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/')
    await page.getByTitle('Forms').click()
    await page.getByText('Form Layouts').click()
    
});

test.skip('locator syntax rules',async ({page}) => {
    //by Tag name 
    //await page.locator('input').click()
    await page.locator('input').first().click()

    //by ID 
    //await page.locator('#inputEmail').click()

    //by Class 
    await page.locator('.shape-rectangle')

    //by attribute 
    await page.locator('[placeholder="Email"]')

    //by full class value 
    await page.locator('[class="ng-untouched ng-pristine ng-valid"]')

    //combined different selectors
    page.locator('input[placeholder="Email"][nbinput]')

    //by Xpath
    page.locator('//*[@id="inputEmail"]')

    //by partial Text Match 
    page.locator(':text("Using")')


    //by exact text match
    page.locator(':text-is("Using the Grid")')


})

//user facing locators 
test.skip('User facing locators',async ({page}) => {
    await page.getByRole('textbox', {name:"Email"}).first().click()
    await page.getByRole('button', {name:"sign-in"}).first().click()

    await page.getByLabel('Email').first().click()

    await page.getByPlaceholder('Jane Doe').click()
    await page.getByTestId('')
    
})


test('locating child elements', async ({page}) => {
    await page.locator('nb-card nb-radio :text-is("Option 1")').click()
    //await page.getByLabel(':text-is("Option 1")').first().click()
})

test('locating Parent elements', async ({page}) => {
    await page.locator('nb-card', {hasText: "Using the Grid"}).getByRole('textbox', {name:"Email"}).first().click()
})

test('Reuisng locators', async ({page}) => {
    const basicForm = page.locator('nb-card').filter({hasText: "Basic form"})
    const emailField = basicForm.getByRole('textbox', {name: "Email"})

    await emailField.fill('test@email.com')
    await basicForm.getByRole('textbox', {name: "Password"}).fill('Welcome123')
    await basicForm.locator('nb-checkbox').click()
    await basicForm.getByRole('button').click()

    await expect(emailField).toHaveValue('test@email.com')
})

test('locating elements', async ({page}) => {
    await page.locator('nb-card', {hasText: "Using the Grid"}).getByRole('textbox', {name:"Email"}).first().click()
})


test('assertions',async ({page}) => {
    const basicFormBtn = page.locator('nb-card').filter({hasText: "Basic form"}).locator('button')

    //general assertions 
    const value = 5
    expect(value).toEqual(6)

    const text = await basicFormBtn.textContent()
    expect(text).toEqual("Submit")


    //locator assertions
    await expect(basicFormBtn).toHaveText('Submit')

    //soft assertions 
    await expect.soft(basicFormBtn).toHaveText('Subss')
    await basicFormBtn.click()
})


//auto waiting



/*test.describe('test suite 1', () => {

    test ('First Test', async ({page}) => {
        await page.getByText('Form Layouts').click()
       })
       
       test ('navigate datepicker', async ({page}) => {
           await page.getByText('Datepicker').click()
          })

})
*/

   


