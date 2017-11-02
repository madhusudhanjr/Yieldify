Yieldify QA Automation Task - Google Keep

Goal:
To Automate 3 - 5 of the test scenarios for Google Keep Web App

Test Scenarios:
1. Verify Application launch
2. Verify button "Try Google Keep"
3. Verify Capture Container Items
4. Verify Footer links
5. Verify User Sign-in

Tech Stack details:

Created a Cucumber Feature file with the above mentioned Test Scenarios

Project Type: Maven
Tool: Appium Java Client (v 5.0.4), Appium Server (v 1.6.5 / v 1.7.1)
Program Language: Java (v 1.8 SDK)
Testing Framework: Cucumber BDD with JUnit Test Runner
Test Framework Design: Page Object Model (POM) with Page Factory Pattern
Logging: Log4j
Reproting: Default Cucumber HTML Reporting
Test App: Google Keep Web App
Device Tested: iOS Simulators (iPhone 5s, iPhone 6 Plus, iPhone 7 Plus)
Platform: macOS Sierra (v 10.12.6)


Steps to run the Tetsts:
Pre-requisites: Appium setup should be done on Mac. (Please refer http://appium.io/ for complete details)

Firstly we need to update the **config.properties** file located under "src/test/resources/" with the below details:
StartAppiumServerProgrammatically = No (we need to start the Appium Server Manually) 
StartAppiumServerProgrammatically = Yes (Appoum server will be triggered through the Test Scripts. **(Appium and Node.js should be installed under "/usr/local/bin/" dir))

Run the the **JUnit Test Runner** Class located at "src/test/java/com/gk/tests/GoogleKeep.java" as JUnit Test, test execution report will be generated under "target/cucumber_test_report" folder of the project. 
Added Default Test Execution Report: Default_Cucumber_TestExecution_Report.html
