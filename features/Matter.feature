Feature: Create a New Matter

  Background:
   Given I am on the Clio homepage
   When I could see the Clio homePage
   Then I can click Login to Access Clio Manage
   And I able to see detail of matters page

  Scenario: As a Clio Manage user, I am able to access menu Matters at Detail Page Clio Manage
   Then I am log out from Clio Manage Page

  Scenario: As a Clio Manage user, I am able to see the detail of the Create New Matter form
    Then I can click button New Matters
    And I can see main page of form New Matters
    Then I want to cancel to create a New Matters

  Scenario: As a Clio Manage User, I want to Directly click Save Matter without filled required    
    Then I can click button New Matters
    And I can see main page of form New Matters
    Then I want to directly click save matter

  Scenario: As a Clio Manage User, I want to Create a New Matter    
    Then I can click button New Matters
    Then I want to create new Matter