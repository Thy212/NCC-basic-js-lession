const { By, Builder, Browser, Key, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Login page', function () {
  let driver;
  
  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
  });
  
  it('Empty user name field', async function () {
    await driver.get('https://hoangduy0610.github.io/ncc-sg-automation-workshop-1/login.html');
  
    // moi khi findElement doi 500ms ~ 0.5s
    await driver.manage().setTimeouts({ implicit: 500 });
  
    let password = await driver.findElement(By.id('password'));
    let submitButton = await driver.findElement(By.css('button'));
  
    await password.sendKeys('Thy123');
    await submitButton.click();
    await driver.manage().setTimeouts({ implicit: 1000 });

    let message = await driver.findElement(By.className('alert-danger'));
    let errorMessage = await message.getText();
  
    assert.equal(errorMessage, 'Invalid username or password');
    
  });
  
  it('Empty password field', async function () {
    await driver.get('https://hoangduy0610.github.io/ncc-sg-automation-workshop-1/login.html');
  
    // moi khi findElement doi 500ms ~ 0.5s
    await driver.manage().setTimeouts({ implicit: 500 });
  
    let userName = await driver.findElement(By.id('username'));
    let submitButton = await driver.findElement(By.css('button'));
  
    await userName.sendKeys('Thytest04');
    await submitButton.click();
    await driver.manage().setTimeouts({ implicit: 1000 });

    let message = await driver.findElement(By.className('alert-danger'));
    let errorMessage = await message.getText();
  
    assert.equal(errorMessage, 'Invalid username or password');
    
  });

  //Hong Di chua lam validation :v
//   it('Empty user name & password field', async function () {
//     await driver.get('https://hoangduy0610.github.io/ncc-sg-automation-workshop-1/login.html');
  
//     // moi khi findElement doi 500ms ~ 0.5s
//     await driver.manage().setTimeouts({ implicit: 500 });
  
//     let submitButton = await driver.findElement(By.css('button'));
  
//     await submitButton.click();
//     await driver.manage().setTimeouts({ implicit: 1000 });

//     let message = await driver.findElement(By.className('alert-danger'));
//     let errorMessage = await message.getText();
  
//     assert.equal(errorMessage, 'Invalid username or password');

//   });

  it('Login fail with the account has not registered yet', async function () {
    await driver.get('https://hoangduy0610.github.io/ncc-sg-automation-workshop-1/login.html');
  
    // moi khi findElement doi 500ms ~ 0.5s
    await driver.manage().setTimeouts({ implicit: 500 });
  
    let userName = await driver.findElement(By.id('username'));
    let password = await driver.findElement(By.id('password'));
    let submitButton = await driver.findElement(By.css('button'));
  
    await userName.sendKeys('Thy1003');
    await password.sendKeys('Thy123456');
    await submitButton.click();
    await driver.manage().setTimeouts({ implicit: 1000 });

    let message = await driver.findElement(By.className('alert-danger'));
    let errorMessage = await message.getText();
  
    assert.equal(errorMessage, 'Invalid username or password');
 
  });

  it('Login success', async function () {
    await driver.get('https://hoangduy0610.github.io/ncc-sg-automation-workshop-1/login.html');
  
    // moi khi findElement doi 500ms ~ 0.5s
    await driver.manage().setTimeouts({ implicit: 500 });
  
    let userName = await driver.findElement(By.id('username'));
    let password = await driver.findElement(By.id('password'));
    let submitButton = await driver.findElement(By.css('button'));
  
    await userName.sendKeys('Thytest01');
    await password.sendKeys('Thy123');
    await submitButton.click();
    await driver.sleep(500);
    

    let message = await driver.findElement(By.css('h1'));
    let value = await message.getText();
    assert.equal("Hello World", value);
  });
  
  after(async () => await driver.quit());
});