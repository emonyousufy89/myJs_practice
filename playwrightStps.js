const { chromium, devices } = require("playwright");

// Initialize a Playwright browser instance
let browser;

// Initialize a Playwright page instance
let page;

// Function to launch a browser and a new page
async function launchBrowser() {
  browser = await chromium.launch();
  page = await browser.newPage();
}

// Function to click an element by selector
async function click(selector) {
  await page.click(selector);
}

// Function to type text into an input field by selector
async function write(selector, text) {
  await page.fill(selector, text);
}

// Function to clear an input field by selector
async function clear(selector) {
  await page.fill(selector, "");
}

// Function to take a screenshot of the page
async function takeScreenshot(filename) {
  await page.screenshot({ path: filename });
}

// Function to navigate to a URL
async function navigate(url) {
  await page.goto(url);
}

// Function to validate text content of an element by selector
async function validateText(selector, expectedText) {
  const element = await page.locator(selector);
  const actualText = await element.textContent();
  expect(actualText).toBe(expectedText);
}

// Function to validate the existence of an element by selector
async function validateElementExistence(selector) {
  const element = await page.locator(selector);
  expect(element).toBeTruthy();
}

// Function to switch to an iframe by selector
async function switchToIframe(selector) {
  const frame = await page.frame({ selector });
  await frame.waitForLoadState();
  page = frame;
}

// Function to switch to the next tab
async function switchToNextTab() {
  const pages = await browser.pages();
  page = pages[1];
}

// Function to open a new incognito tab
async function openIncognitoTab() {
  const context = await browser.newContext({ incognito: true });
  page = await context.newPage();
}

// Function to clear cookies
async function clearCookies() {
  await page.context().clearCookies();
}

// Function to clear cache
async function clearCache() {
  await page.context().clearStorage();
}

// Function to upload a file to an input field by selector
async function uploadFile(selector, filePath) {
  const input = await page.locator(selector);
  await input.setInputFiles(filePath);
}

// Function to handle an alert dialog
async function handleAlert(accept = true) {
  const dialog = await page.waitForEvent("dialog");
  if (accept) {
    await dialog.accept();
  } else {
    await dialog.dismiss();
  }
}

// Function to handle a prompt dialog
async function handlePrompt(accept = true, inputValue = "") {
  const dialog = await page.waitForEvent("dialog");
  if (accept) {
    await dialog.accept(inputValue);
  } else {
    await dialog.dismiss();
  }
}

// Function to perform mouse actions
async function performMouseActions(actions) {
  await page.mouse().performActions(actions);
}

// Function to perform keyboard actions
async function performKeyboardActions(actions) {
  await page.keyboard().performActions(actions);
}

// Function to maximize the browser window
async function maximizeBrowser() {
  await page.setViewportSize({ width: 1920, height: 1080 });
}

// Function to minimize the browser window
async function minimizeBrowser() {
  await page.evaluate(() => {
    window.minimize(); // You might need to implement a custom minimize function on the page
  });
}

// Function to set a custom browser window size
async function setBrowserSize(width, height) {
  await page.setViewportSize({ width, height });
}

// Function to clear browsing history
async function clearHistory() {
  await page.context().clearPermissions();
}

// Function to click on a shadow DOM element by selector
async function clickShadowElement(rootSelector, shadowSelector) {
  const root = await page.locator(rootSelector);
  const shadow = await root.shadow(shadowSelector);
  await shadow.click();
}

// Usage example:
(async () => {
  await launchBrowser();
  await navigate("https://example.com");
  await click("button");
  await write("input", "Hello, Playwright!");
  await takeScreenshot("screenshot.png");
  await validateText("h1", "Example Domain");
  await validateElementExistence("a");
  await switchToIframe("iframe");
  await switchToNextTab();
  await openIncognitoTab();
  await clearCookies();
  await clearCache();
  await uploadFile('input[type="file"]', "path/to/file.txt");
  await handleAlert(true);
  await handlePrompt(true, "Prompt input");
  await maximizeBrowser();
  await minimizeBrowser();
  await setBrowserSize(800, 600);
  await clearHistory();
  await clickShadowElement("#shadow-host", "#shadow-element");
})();
