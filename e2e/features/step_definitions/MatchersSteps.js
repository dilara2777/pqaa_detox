import {Given, When, Then, setDefaultTimeout} from '@cucumber/cucumber';

setDefaultTimeout(120 * 1000);

//March by ID
When('I tab on the Water counter by ID', async () => {
    await element(by.id('waterCounter')).longPress(5000);
});
When('I tab on the Electricity counter by ID', async () => {
    await element(by.id('electricityCounter')).multiTap(3);
});
When('I tab on the Gas counter by ID', async () => {
    await element(by.id('gasCounter')).multiTap(8);
});
When('I tab on the Broadband counter by ID', async () => {
    await element(by.id('broadbandCounter')).tap({x:5, y:250});
});

//By multiply matchers
When('I tab on the Water counter Title by type and text', async () => {
    /*  if (device.getPlatform() === 'ios') {
          await element(by.type('RCTTextView').and(by.text('WATER COUNTER'))).tap();
      } else {
          await element(by.type('android.widget.TextView').and(by.text('WATER COUNTER'))).tap();
      }*/
    const typeLocator = device.getPlatform() === 'ios' ? 'RCTTextView' : 'android.widget.TextView'
    await element(by.type(typeLocator).and(by.text('WATER COUNTER'))).tap();
})

Then('I tab on the Electricity Counter by traits and text', async () => {
    await element(by.traits(['staticText']).and(by.text('ELECTRICITY COUNTER'))).tap();
})

Then('I tab on the Gas Counter by ancestor ID and descendant text', async () => {
    await element(by.id('counterButton').withDescendant(by.text('GAS COUNTER'))).tap();
})
Then('I tab on the Broadband Counter by descendant text ancestor type', async () => {
    const typeLocator = device.getPlatform() === 'ios' ? 'RCTView' : 'android.view.ViewGroup'
    await element(by.text('BROADBAND COUNTER').withAncestor(by.type(typeLocator))).tap();
})


//March by text
Given('I tab on the Counters section by text', async () => {
    await element(by.text('Counters')).tap();
});

When('I tab on the Water counter by text', async () => {
    await element(by.text('WATER COUNTER')).tap();
});

Then('I tab on the Electricity counter by text', async () => {
    await element(by.text('ELECTRICITY COUNTER')).tap();
});

Then('I tab on the Gas counter by text', async () => {
    await element(by.text('GAS COUNTER')).tap();
});

Then('I tab on the Broadband counter by text', async () => {
    await element(by.text('BROADBAND COUNTER')).tap();
});


//Match by Label
When('I tab on the Home navigation section by label', async () => {
    await element(by.label('Home')).atIndex(0).tap();
});

Then('I tab on the Water Counter by label', async () => {
    await element(by.label('waterCounterLabel')).tap();
});


