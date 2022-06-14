import { Given, Then, setDefaultTimeout} from '@cucumber/cucumber';

setDefaultTimeout(120 * 1000);
/*Given('I tap on the Cities navigation tab', async ()=>{
    await element(by.id('citiesNavigationImage')).atIndex(0).tap();
    await element(by.id('citiesNavigationSection')).atIndex(0).tap();
})*/

//await element(by.id(`continentLabel-${continent.toLowerCase()}`)).longPress(2000);
Given('I tap on the {string} navigation tab', async (section)=>{
    await element(by.id(`${section.toLowerCase()}NavigationImage`)).atIndex(0).tap();
    await element(by.id(`${section.toLowerCase()}NavigationSection`)).atIndex(0).tap();
})

Then('I tap on the Add Member icon', async () => {
    await element(by.id('memberListHeader')).atIndex(0).tap();
    await element(by.id('addMemberIcon')).atIndex(0).tap();
});

