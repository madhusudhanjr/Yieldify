package com.gk.stepdefs;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

import com.gk.utils.CommonUtil;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;

/**
 * Setup Class contains the Step Definitions for the Cucumber Keyword "Given"
 * 
 * @author mjr (madhusudhan.jr@gmail.com)
 */
public class Setup {

	/**
	 * Class variable which holds the reference to the Logger Object
	 */
	static Logger logger = Logger.getLogger(Setup.class);

	// Before Feature
	@Before
	public static void setup() {

		PropertyConfigurator.configure("src/main/resources/Logger/log4j.properties");
		logger.info("\n******Test Feature Execution Satrted*******");
	}

	// After Feature
	@After
	public static void teardown() {
		CommonUtil.quitDriver();
		logger.info("\n******Test Feature Execution Ends*******");
	}

	@Given("^A Google Keep Web app URL \"([^\"]*)\"$")
	public void a_Google_Keep_Web_app_URL(String url) throws Throwable {
	   
		logger.info("\n******Test Background Execution Satrted*******");
		CommonUtil.m_URL = url;
	}
	
	@Given("^I am on Google Keep Home Page$")
	public void i_am_on_Google_Keep_Home_Page() throws Throwable {
		
		logger.info("\n******Test Scenario Execution Satrted*******");
	}
	
	
}