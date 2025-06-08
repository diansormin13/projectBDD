@task
Feature: Create a New Task

  Background:
   Given I am on the Clio homepage
   When I could see the Clio homePage
   Then I can click Login to Access Clio Manage
   Then I able to click button Create New Task
   
  Scenario: As a Clio Manage User, I able to see the form to create new Task
    Then I can see the detail Form of Create New Task

  Scenario: As a Clio Manage User, I want to Cancel to Create New Task
    And I click button cancel