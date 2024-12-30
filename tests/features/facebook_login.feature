Feature:Facebook login

    Scenario: User logs into the facebook with valid credentials
        Given User on the facebook login page
        When User enter "hinthukarthik09@gmail.com" in the email field
        And User enter "Hinthu@26" in the password field
        And User click the login button
     #   Then User should be able to login successfully