import  {expect, test} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/')
    
});


test.describe('Input Fields',() => {
    test.beforeEach(async({page}) => {
        await page.getByTitle('Forms').click()
        await page.getByText('Form Layouts').click()
        
    });

    test('test 1', async ({page}) => {
        const usingGridEmail = page.locator('nb-card', {hasText: "Using the Grid"}).getByRole('textbox', {name: "Email"})

        await usingGridEmail.fill('test@test.com')
        await usingGridEmail.clear()
        

        //generic assertion
        const inputVal = await usingGridEmail.inputValue()
        expect(inputVal).toEqual('test@test.com')

        //locator 
        await expect(usingGridEmail).toHaveValue('test@test.com')
    })

    test.only('dg test',async ({page}) => {

        await page.getByText('Tables & Data').click()
        await page.getByText('Smart Table').click()

        //get the row by any test in this row 
        const targetRow = page.getByRole('row', {name: "twitter@outlook.com"})
        await targetRow.locator('.nb-edit').click()

        await page.locator('input-editor').getByPlaceholder('Age').clear()
        await page.locator('input-editor').getByPlaceholder('Age').fill('45')
        await page.locator('.nb-checkmark').click()


 })



})







