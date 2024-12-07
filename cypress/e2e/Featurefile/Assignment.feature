Feature: Simple form
Scenario: To verify the form is working for all mandatory field
Given open the form page
And Fill in the fields with the provided data
When click the submit button
Then Confirmation message
