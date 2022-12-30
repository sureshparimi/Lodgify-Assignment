Feature: Pricing plan options in Lodgify application

    Scenario Outline: Verification of different pricing plans in usd
        Given I navigate to Lodgify application
        And I am on the pricing plan page
        When I set the billing frequency as "<BillingFor>"
        And I slide to <Number_Of_rentals>
        Then I should see pricing plans display the values for "<Starter>", "<Professional>", "<Ultimate>"

        Examples:
            | Number_Of_rentals | BillingFor | Starter | Professional | Ultimate |
            | 50                | Yearly     | $64     | $375         | $525     |
    
    Scenario Outline: Verification of different pricing plans in different currencies
        Given I navigate to Lodgify application
        And I am on the pricing plan page
        When I set the billing frequency as "<BillingFor>"
        And I set the currency as "<Currency>"
        And I slide to <Number_Of_rentals>
        Then I should see pricing plans display the values for "<Starter>", "<Professional>", "<Ultimate>"

        Examples:
            | Number_Of_rentals | BillingFor | Currency | Starter | Professional | Ultimate |
            | 50                | Yearly     | $ USD    | $64     | $375         | $518     |
            | 50                | Yearly     | € EUR    | €60     | €330         | €539     |
            | 50                | Yearly     | £ GBP    | £51     | £294         | £536     |
            