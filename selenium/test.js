const { By, Builder, Browser, Key } = require('selenium-webdriver');
const assert = require("assert");

async function firstTest() {
    let driver;
    try {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.get('https://www.selenium.dev/selenium/web/web-form.html');
        await driver.manage().setTimeouts({ implicit: 500 });

        let textBox = await driver.findElement(By.id('my-text-id'));
        let submitButton = await driver.findElement(By.css('button'));

        await textBox.sendKeys('NCC'); //Truyền input vào
        await driver.sleep(2000); //Delay màn hình 2s

        // await textBox.sendKeys(Key.ARROW_LEFT); //Di chuyển con trỏ qua bên trái
        // await driver.sleep(2000); //Delay màn hình 2s

        // await textBox.sendKeys(Key.ARROW_LEFT); //Di chuyển con trỏ qua bên trái
        // await driver.sleep(2000); //Delay màn hình 2s

        await textBox.sendKeys(Key.BACK_SPACE); //Xóa một chữ phía sau con trỏ chuột
        await textBox.clear() //Đợi sau 5s thì xóa text trong textbox

        await submitButton.click();
        let message = await driver.findElement(By.id('message'));
        let value = await message.getText();
        assert.equal(value, "Received!"); //so sánh, (expexted, )
    } catch (e) {
        console.log(e)
    } finally {
        driver.quit();
    }
}

firstTest();