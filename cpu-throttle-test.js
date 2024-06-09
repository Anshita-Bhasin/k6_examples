import { browser } from 'k6/experimental/browser';


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
    page.setViewportSize({
        width: 414,
        height: 896

    })
    page.throttleCPU({ rate: 4 })

    //{ rate: 4 })
    await page.goto('https://www.google.com/')
    page.close()
}