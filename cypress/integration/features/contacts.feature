Feature: Contact page of Lodgify application

    Scenario: Verify the contact page for mandatory fields
        Given I am on the contact page
        Then I should see * mark for mandatory fields


    Scenario: Verify the contact page for mandatory fields with empty text
        Given I am on the contact page
        When I send the user contact details
        Then I should see the text message in RED color displayed for the mandatory fields:
            | Field    | Validation           |
            | Name     | Name is mandatory    |
            | Email    | Email is mandatory   |
            | Comments | Comment is mandatory |
            | Phone    | Phone is mandatory   |
            
    Scenario Outline: Select the arrival and departure dates from the date picker in the contact page
        Given I am on the contact page
        When I pick the arrival date as "<arrival_date>" and departure date as "<departure_date>"
        #And I pick the departure date as 
        Then I should see the selected dates display in arrival date and departure dates "<arrival_date>" "<departure_date>"

        Examples:
            | arrival_date | departure_date |
            | April 14     | June 14        |
            
    Scenario Outline: Add and submit comments in contact form
        Given I am on the contact page
        When I fill mandatory fields "<Name>","<Phone>","<Email>" with valid inputs
        When I pick the arrival date as "<arrival_date>" and departure date as "<departure_date>"
        And I add "<comments_text>" into the comments message box
        And I submit the contact form
        Then I should see the success message "<message_after_submission>"

        Examples:
            | Name     | Phone        | Email                 | arrival_date | departure_date | comments_text                                                                                                               | message_after_submission                 |
            | voornaam | +31659316158 | testemail@lodgify.com | April 14     | June 14        | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. | Your request has been sent successfully. |
