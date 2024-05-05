import { browser } from 'k6/experimental/browser';
import { check } from 'k6'


export const options = {

    scenarios: {
        browser_test: {
            executor: 'shared-iterations',
            options: {
                browser: {
                    type: 'chromium'
                }
            }
        }
    }
}

export default async function () {
    const page = browser.newPage()
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
    page.locator('#input-firstname').type('k6')
    page.locator('#input-lastname').type('demo')
    page.locator('#input-email').type('ab.testingk6@dispostable.com')
    page.locator('#input-telephone').type('1234567890')
    page.locator('#input-password').type('Test123!!')
    page.locator('#input-confirm').type('Test123!!')
    page.check('input[type="checkbox"]')
    const submit = page.locator('input[type="submit"]')
    await Promise.all([page.waitForNavigation(), submit.click()])
    page.screenshot({fullPage:true,
        path: 'screenshots/test1.png'
    })

    check(page, {
        ' Text Validation': p => p.locator('h1').textContent() == "Your Account Has Been Created!"
    });

    page.close()
}