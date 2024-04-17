const { By, Builder, Browser, Key } = require('selenium-webdriver');
const assert = require('assert');
const {suite} = require('selenium-webdriver/testing');
const edge = require('selenium-webdriver/edge');

suite(function (env) {
  describe('NCC Workshop Test', function () {
    let driver;
  
    before(async function () {
      driver = await new Builder().forBrowser('chrome').build();
    });
  
    it('Submit form success', async function () {
      await driver.get('https://www.selenium.dev/selenium/web/web-form.html');
  
      // moi khi findElement doi 500ms ~ 0.5s
      await driver.manage().setTimeouts({ implicit: 500 });
  
      let textBox = await driver.findElement(By.id('my-text-id'));
      let submitButton = await driver.findElement(By.css('button'));
  
      await textBox.sendKeys('NCC');
      await submitButton.click();
  
      let message = await driver.findElement(By.id('message'));
      let value = await message.getText();
  
      assert.equal(value, 'Received!');
    });
  
    it('Submit form fail', async function () {
      await driver.get('https://www.selenium.dev/selenium/web/web-form.html');
  
      // moi khi findElement doi 500ms ~ 0.5s
      await driver.manage().setTimeouts({ implicit: 500 });
  
      let textBox = await driver.findElement(By.id('my-text-id'));
      let submitButton = await driver.findElement(By.css('button'));
  
      await textBox.sendKeys('NCC');
      await submitButton.click();
  
      let message = await driver.findElement(By.id('message'));
      let value = await message.getText();
  
      assert.equal(value, 'Noooooooooo');
    });
  
    after(async () => await driver.quit());
});
});