import {Given,And,When,Then} from "cypress-cucumber-preprocessor/steps";
Given('open the form page',()=>{
cy.visit("https://v1.training-support.net/selenium/simple-form");
});

And('Fill in the fields with the provided data',()=>{
cy.get('[placeholder="First Name"]').type("Palak");
cy.get('[placeholder="Last Name"]').type("Mangal");
cy.get('[placeholder="abc@xyz.com"]').type("palakmangal@gmail.com");
cy.get('[placeholder="9876543210"]').type("9876543210");
cy.get('[rows="2"]').type("Hello");
});

When('click the submit button',()=>{
cy.get('[value="submit"]').click();
});

Then('Confirmation message',()=>{
    cy.on('window:alert', (alertText)=>{
        expect(alertText).to.equal('Thank You for reaching out to us, Palak Mangal');
    });
});