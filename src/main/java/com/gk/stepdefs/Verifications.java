package com.gk.stepdefs;

import java.util.List;

import org.apache.log4j.Logger;
import org.junit.Assert;

import com.gk.utils.CommonUtil;

import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import io.appium.java_client.MobileElement;

/**
 * Verifications Class contains the Step Definitions for the Cucumber Keyword
 * "Then"
 * 
 * @author mjr (madhusudhan.jr@gmail.com)
 */
public class Verifications {

	/**
	 * Class variable which holds the reference to the Logger Object
	 */
	static Logger logger = Logger.getLogger(Verifications.class);

	@Then("^I should be able to verify Google Keep Home Page loaded successfully by chekcing button TryGoogleKeep$")
	public void i_should_be_able_to_verify_Google_Keep_Home_Page_loaded_successfully_by_chekcing_TryGoogleKeep_button()
			throws Throwable {

		CommonUtil.m_homePage.verifyTryGoogleKeepBtn();

		logger.info("\n******Test Scenario Execution Ends*******");
	}

	@Then("^I should be able to navigate to Google Sign-in page$")
	public void i_should_be_able_to_navigate_to_Google_Sign_in_page() throws Throwable {

		CommonUtil.m_homePage.verifyGoogleSigninForm();
	}

	@Then("^I should be able to see below container items$")
	public void i_should_be_able_to_see_below_container_items(DataTable datatable) throws Throwable {

		List<List<String>> data = datatable.raw();
		int itemsListSize = data.get(0).size();
		int size = CommonUtil.m_homePage.getContainerItemsList().size();
		logger.info("Actual Container Items List size:: " + size);
		
		Assert.assertTrue("Container Items List Mismatched!!", itemsListSize == size);
		logger.info("Container Items List verified successfully");
	}

	@Then("^I should verfy footer links navigation$")
	public void i_should_verify_footer_links_navigation() throws Throwable {

		for (MobileElement el : CommonUtil.m_homePage.getFooterLinks()) {

			logger.info("Footer Link Text:: " + el.getText());
			el.click();
			CommonUtil.wait(5);
			logger.info("Window Title:: " + CommonUtil.m_driver.getCurrentUrl());
			CommonUtil.m_driver.navigate().back();
		}

		logger.info("Footer links verified successfullly!!");
	}

	@Then("^I should verfy successful login$")
	public void i_should_verfy_successful_login() throws Throwable {

		CommonUtil.m_homePage.handleAppAlert();
		Assert.assertTrue("Header Text mismatched!!", CommonUtil.m_homePage.getHeaderText().contains("Keep"));
		
		logger.info("Login verified successfully!!");
	}
}