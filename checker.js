const { chromium } = require('playwright');
//const { test, expect } = require('playwright/test');

Given('User navigate to the checker page', async () => {
  const browser = await chrome.launch();
  const page = await browser.newPage();
  await page.goto('https://www.gamesforthebrain.com/game/checkers/');
})
Then('User confirm the landng on checker page', async () => {
  const siteTitle = await page.title();
  if (siteTitle !== 'Checkers') {
    return;
  }
})
Then('User makes five orange moves', async () => {
    const buttonSelectors = [
        '.space1',
        '.space2',
        '.button3',
        '.space4', 
        '.space5' 
      ];
      const destinationSelectors = [
        '.space1',   
        '.space2',
        '.space3',   
        '.space4',
        '.space5'
      ];

      for (let i = 0; i < buttonSelectors.length; i++) {
        const button = await page.$(buttonSelectors[i]);
        const destination = await page.$(destinationSelectors[i]);
    
        if (button && destination) {
          await button.click();
          await destination.click();
        } 
        await page.waitForTimeout(1000);
      }
  
})
Then('User click on restart and validat the game restarted', async () => {
await page.locator('Restart').click()
  await page.waitForTimeout(2000);
  await browser.close();
})();
