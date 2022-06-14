import { Then, When, setDefaultTimeout } from '@cucumber/cucumber';
import utilities from '../../helper/Utilities'

setDefaultTimeout(120 * 1000);

//typing
Then('I type {string} as Name and {string} as Surname', async(name, surname) => {
    await element(by.id('formInput-name')).typeText(name);
    await element(by.id('formInput-surname')).typeText(surname);
    await element(by.id('formInput-surname')).tapBackspaceKey();
    //await utilities.sleep(5000)
});

Then('I replace {string} in Name and {string} in Surname',  async(name, surname) => {
    await element(by.id('formInput-name')).replaceText(name);
    await element(by.id('formInput-surname')).replaceText(surname);
    await element(by.id('formInput-surname')).tapReturnKey();
    //await utilities.sleep(5000)
});

Then('I enter {string} in Name and {string} in Surname', async(name, surname) => {
    await utilities.typeInElement(element(by.id('formInput-name')), name)
    await utilities.typeInElement(element(by.id('formInput-surname')), surname)
    await utilities.sleep(5000)
});

//swiping actions
Then('I swipe {string} {string}', async(elementId, direction) => {
    await element(by.id(elementId)).swipe(direction);
});
Then('I swipe {string} {string} {string}', async(elementId, direction,speed) => {
    await element(by.id(elementId)).swipe(direction,speed);
});

Then('I swipe {string} {string} {string} for {float} of the screen', async(elementId, direction,speed, float) => {
    await element(by.id(elementId)).swipe(direction,speed, float);
});


//scrolling
Then('I scroll {string} {int} pixels {string}', async(elementId,pixels, direction) => {
    await element(by.id(elementId)).scroll(pixels,direction);
});

Then('I scroll {string} {int} pixels {string} with X: {float} and Y: {float}', async(elementId,pixels, direction, x, y) => {
    await element(by.id(elementId)).scroll(pixels,direction, x, y);
});

Then('I scroll {string} to the {string}', async(elementId,edge) => {
    await element(by.id(elementId)).scrollTo(edge);
});

When('I scroll {string} to {string} at {int} pixels {string}', async(backgroundId,targetEl,pixels,  direction) => {
   // await waitFor(element(by.id(targetEl))).toBeVisible().whileElement(by.id(backgroundId)).scroll(pixels, direction);
    await utilities.scrollToElement(element(by.id(targetEl)), by.id(backgroundId), pixels, direction);
});



//calendar
Then('I select {string} {string} of {string} {string} date in the Calendar', async (weekday, day, month, year) => {
    await utilities.scrollToElement(element(by.id('formInput-startDate')), by.id('formBackground'), 300, 'down');
    await element(by.id('formLabel-startDate')).tap();
    await element(by.id('formBackground')).swipe('up');
    await  utilities.selectCalendarDate(weekday,day,month,year);
});
