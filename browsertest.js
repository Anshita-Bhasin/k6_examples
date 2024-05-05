import { browser } from 'k6/experimental/browser';

export const options = {

    scenarios: {
        browser_test: {
            executor: 'constant-vus',
            vus: 2,
            duration: '10s',
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
    page.setViewportSize({
        width: 375,
        height: 812
    })
    await page.goto('https://www.google.com')
    page.screenshot({
        fullPage: true,
        path: 'screenshots/test2.png'
    })
    page.close()
}