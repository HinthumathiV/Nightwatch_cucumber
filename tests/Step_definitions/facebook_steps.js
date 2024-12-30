const{client}= require('nightwatch-api');
  const {Given, When, Then} = require('@cucumber/cucumber');
  
    Given('User on the facebook login page', async ()=> {
      await client.url('https://www.facebook.com/').waitForElementVisible('body',3000);
    });

    When('User enter {string} in the email field', async (email) =>{
     await client.setValue('#email',email);
    });

    When('User enter {string} in the password field', async (password) =>{
     await client.setValue('#pass',password);
    });

     When('User click the login button', async ()=> {           
     await client.click('[name="login"]');
     });

    // Then('User should be able to login successfully', async ()=> {
    // await client.waitForElementVisible('#userNavigationLabel',3000);
      
   // });
