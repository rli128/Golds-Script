const puppeteer = require('puppeteer');

async function registerForGuestPass() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://offers-socal.goldsgym.com/arcadia-guest-vip');

    await page.type('input[name="firstname"]', 'XXXX');
    await page.type('input[name="lastname"]', 'XXXX');
    await page.type('input[name="phone"]', 'XXXXXX');
    await page.type('input[name="email"]', 'XXXXXXX');

    await page.type('input[name="address"]', 'XXXXXXX');
    await page.type('input[name="city"]', 'XXXXXXX');
    await page.type('input[name="zip"]', 'XXXXXXX');

    const maleLabelSelector = 'label[for="gender1-76327d51-c396-409f-80d3-44456941dee0_7552"]';
    await page.click(maleLabelSelector);
    
    //Operate Pika Date Selector
    await page.waitForSelector('input#birthdate-76327d51-c396-409f-80d3-44456941dee0_7552');
    await page.click('input#birthdate-76327d51-c396-409f-80d3-44456941dee0_7552');

    // Pika Date Selector Month
    await page.waitForSelector('select.pika-select-month');
    await page.select('select.pika-select-month', '1'); // January

    // Pika Date Selector Year
    await page.waitForSelector('select.pika-select-year');
    await page.select('select.pika-select-year', '1999'); //1999

    // Pika Date Selector Day
    await page.waitForSelector('td[data-day="1"]');
    await page.click('td[data-day="3"]'); // 1st
    
    //Accept terms and conditions
    for (let i = 0; i < 12; i++) {
        await page.keyboard.press('Tab');
    }
    await page.keyboard.press('Space');

    //Submit form
    //await page.keyboard.press('Enter');

    await page.waitForSelector('#timeline-elements');

    await browser.close();
}

registerForGuestPass();