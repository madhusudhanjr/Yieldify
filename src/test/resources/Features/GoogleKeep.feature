#Author: madhusudhan.jr@gmail.com
Feature: Yieldify QA Automation Task on Google Keep Web App
  As an Google Keep App Tester
  I should be able to perfrom sanity check on the App
  So that I can verfiy the App functionality successfully

  Background: 
    Given A Google Keep Web app URL "https://www.google.com/keep"
    When I launch the URL on "iOS" and "10.3" and "iPhone 7 Plus"
    Then I should be able to verify Google Keep Home Page loaded successfully by chekcing button TryGoogleKeep

  Scenario: Verify navigation of button TryGoogleKeep
    Given I am on Google Keep Home Page
    When I click on button TryGoogleKeep
    Then I should be able to navigate to Google Sign-in page

  Scenario: Verify Capture Container Items
    Given I am on Google Keep Home Page
    When I scroll down to centre of the page
    Then I should be able to see below container items
      | Notes | List | Photo | Audio |

  Scenario: Verify Footer links
    Given I am on Google Keep Home Page
    When I scroll down to footer of the page
    Then I should verfy footer links navigation

  Scenario Outline: Verify Successful Login to Google Keep
    Given I am on Google Keep Home Page
    When I click on button TryGoogleKeep
    And I enter valid username "<Username>"
    And I enter valid password "<Password>"
    Then I should verfy successful login

    Examples: TestData
      | Username            | Password |
      | testqatqa@gmail.com | Test@123 |
