$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/GoogleKeep.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: madhusudhan.jr@gmail.com"
    }
  ],
  "line": 2,
  "name": "Yieldify QA Automation Task on Google Keep Web App",
  "description": "As an Google Keep App Tester\nI should be able to perfrom sanity check on the App\nSo that I can verfiy the App functionality successfully",
  "id": "yieldify-qa-automation-task-on-google-keep-web-app",
  "keyword": "Feature"
});
formatter.before({
  "duration": 84910899,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "A Google Keep Web app URL \"https://www.google.com/keep\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I launch the URL on \"iOS\" and \"10.3\" and \"iPhone 7 Plus\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be able to verify Google Keep Home Page loaded successfully by chekcing button TryGoogleKeep",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com/keep",
      "offset": 27
    }
  ],
  "location": "Setup.a_Google_Keep_Web_app_URL(String)"
});
formatter.result({
  "duration": 232178413,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iOS",
      "offset": 21
    },
    {
      "val": "10.3",
      "offset": 31
    },
    {
      "val": "iPhone 7 Plus",
      "offset": 42
    }
  ],
  "location": "Actions.i_launch_the_app_on_and_and(String,String,String)"
});
formatter.result({
  "duration": 27208834990,
  "status": "passed"
});
formatter.match({
  "location": "Verifications.i_should_be_able_to_verify_Google_Keep_Home_Page_loaded_successfully_by_chekcing_TryGoogleKeep_button()"
});
formatter.result({
  "duration": 6984932923,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify navigation of button TryGoogleKeep",
  "description": "",
  "id": "yieldify-qa-automation-task-on-google-keep-web-app;verify-navigation-of-button-trygooglekeep",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I am on Google Keep Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on button TryGoogleKeep",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should be able to navigate to Google Sign-in page",
  "keyword": "Then "
});
formatter.match({
  "location": "Setup.i_am_on_Google_Keep_Home_Page()"
});
formatter.result({
  "duration": 411815,
  "status": "passed"
});
formatter.match({
  "location": "Actions.i_click_on_button_TryGoogleKeep()"
});
formatter.result({
  "duration": 3452796550,
  "status": "passed"
});
formatter.match({
  "location": "Verifications.i_should_be_able_to_navigate_to_Google_Sign_in_page()"
});
formatter.result({
  "duration": 3774778726,
  "status": "passed"
});
formatter.after({
  "duration": 604158012,
  "status": "passed"
});
formatter.before({
  "duration": 2602184,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "A Google Keep Web app URL \"https://www.google.com/keep\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I launch the URL on \"iOS\" and \"10.3\" and \"iPhone 7 Plus\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be able to verify Google Keep Home Page loaded successfully by chekcing button TryGoogleKeep",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com/keep",
      "offset": 27
    }
  ],
  "location": "Setup.a_Google_Keep_Web_app_URL(String)"
});
formatter.result({
  "duration": 1722126,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iOS",
      "offset": 21
    },
    {
      "val": "10.3",
      "offset": 31
    },
    {
      "val": "iPhone 7 Plus",
      "offset": 42
    }
  ],
  "location": "Actions.i_launch_the_app_on_and_and(String,String,String)"
});
formatter.result({
  "duration": 20711487856,
  "status": "passed"
});
formatter.match({
  "location": "Verifications.i_should_be_able_to_verify_Google_Keep_Home_Page_loaded_successfully_by_chekcing_TryGoogleKeep_button()"
});
formatter.result({
  "duration": 6650980860,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify Capture Container Items",
  "description": "",
  "id": "yieldify-qa-automation-task-on-google-keep-web-app;verify-capture-container-items",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I am on Google Keep Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I scroll down to centre of the page",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should be able to see below container items",
  "rows": [
    {
      "cells": [
        "Notes",
        "List",
        "Photo",
        "Audio"
      ],
      "line": 21
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Setup.i_am_on_Google_Keep_Home_Page()"
});
formatter.result({
  "duration": 267326,
  "status": "passed"
});
formatter.match({
  "location": "Actions.i_scroll_down_to_centre_of_the_page()"
});
formatter.result({
  "duration": 11269838380,
  "status": "passed"
});
formatter.match({
  "location": "Verifications.i_should_be_able_to_see_below_container_items(DataTable)"
});
formatter.result({
  "duration": 13684946793,
  "status": "passed"
});
formatter.after({
  "duration": 653219792,
  "status": "passed"
});
formatter.before({
  "duration": 2247641,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "A Google Keep Web app URL \"https://www.google.com/keep\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I launch the URL on \"iOS\" and \"10.3\" and \"iPhone 7 Plus\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be able to verify Google Keep Home Page loaded successfully by chekcing button TryGoogleKeep",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com/keep",
      "offset": 27
    }
  ],
  "location": "Setup.a_Google_Keep_Web_app_URL(String)"
});
formatter.result({
  "duration": 430875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iOS",
      "offset": 21
    },
    {
      "val": "10.3",
      "offset": 31
    },
    {
      "val": "iPhone 7 Plus",
      "offset": 42
    }
  ],
  "location": "Actions.i_launch_the_app_on_and_and(String,String,String)"
});
formatter.result({
  "duration": 27917787216,
  "status": "passed"
});
formatter.match({
  "location": "Verifications.i_should_be_able_to_verify_Google_Keep_Home_Page_loaded_successfully_by_chekcing_TryGoogleKeep_button()"
});
formatter.result({
  "duration": 6516054360,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify Footer links",
  "description": "",
  "id": "yieldify-qa-automation-task-on-google-keep-web-app;verify-footer-links",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "I am on Google Keep Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I scroll down to footer of the page",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I should verfy footer links navigation",
  "keyword": "Then "
});
formatter.match({
  "location": "Setup.i_am_on_Google_Keep_Home_Page()"
});
formatter.result({
  "duration": 261211,
  "status": "passed"
});
formatter.match({
  "location": "Actions.i_scroll_down_to_footer_of_the_page()"
});
formatter.result({
  "duration": 34111,
  "status": "passed"
});
formatter.match({
  "location": "Verifications.i_should_verify_footer_links_navigation()"
});
formatter.result({
  "duration": 32888099559,
  "status": "passed"
});
formatter.after({
  "duration": 576284838,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Verify Successful Login to Google Keep",
  "description": "",
  "id": "yieldify-qa-automation-task-on-google-keep-web-app;verify-successful-login-to-google-keep",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "I am on Google Keep Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I click on button TryGoogleKeep",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter valid username \"\u003cUsername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter valid password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should verfy successful login",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "TestData",
  "description": "",
  "id": "yieldify-qa-automation-task-on-google-keep-web-app;verify-successful-login-to-google-keep;testdata",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 36,
      "id": "yieldify-qa-automation-task-on-google-keep-web-app;verify-successful-login-to-google-keep;testdata;1"
    },
    {
      "cells": [
        "testqatqa@gmail.com",
        "Test@123"
      ],
      "line": 37,
      "id": "yieldify-qa-automation-task-on-google-keep-web-app;verify-successful-login-to-google-keep;testdata;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2497899,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "A Google Keep Web app URL \"https://www.google.com/keep\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I launch the URL on \"iOS\" and \"10.3\" and \"iPhone 7 Plus\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be able to verify Google Keep Home Page loaded successfully by chekcing button TryGoogleKeep",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com/keep",
      "offset": 27
    }
  ],
  "location": "Setup.a_Google_Keep_Web_app_URL(String)"
});
formatter.result({
  "duration": 509469,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iOS",
      "offset": 21
    },
    {
      "val": "10.3",
      "offset": 31
    },
    {
      "val": "iPhone 7 Plus",
      "offset": 42
    }
  ],
  "location": "Actions.i_launch_the_app_on_and_and(String,String,String)"
});
formatter.result({
  "duration": 26125079691,
  "status": "passed"
});
formatter.match({
  "location": "Verifications.i_should_be_able_to_verify_Google_Keep_Home_Page_loaded_successfully_by_chekcing_TryGoogleKeep_button()"
});
formatter.result({
  "duration": 6619007616,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Verify Successful Login to Google Keep",
  "description": "",
  "id": "yieldify-qa-automation-task-on-google-keep-web-app;verify-successful-login-to-google-keep;testdata;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "I am on Google Keep Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I click on button TryGoogleKeep",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter valid username \"testqatqa@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter valid password \"Test@123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should verfy successful login",
  "keyword": "Then "
});
formatter.match({
  "location": "Setup.i_am_on_Google_Keep_Home_Page()"
});
formatter.result({
  "duration": 244277,
  "status": "passed"
});
formatter.match({
  "location": "Actions.i_click_on_button_TryGoogleKeep()"
});
formatter.result({
  "duration": 3547178861,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testqatqa@gmail.com",
      "offset": 24
    }
  ],
  "location": "Actions.i_enter_valid_username(String)"
});
formatter.result({
  "duration": 3942652244,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test@123",
      "offset": 24
    }
  ],
  "location": "Actions.i_enter_valid_password(String)"
});
formatter.result({
  "duration": 2938629330,
  "status": "passed"
});
formatter.match({
  "location": "Verifications.i_should_verfy_successful_login()"
});
formatter.result({
  "duration": 6712858515,
  "status": "passed"
});
formatter.after({
  "duration": 608064189,
  "status": "passed"
});
});