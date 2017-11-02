package com.gk.stepdefs;

import com.gk.pageobjects.HomePage;
import com.gk.utils.CommonUtil;

import cucumber.api.java.en.When;

/**
 * Actions Class contains the Step Definitions for the Cucumber Keyword "When" and "And"
 * 
 * @author mjr (madhusudhan.jr@gmail.com)
 */
public class Actions {

	@When("^I launch the URL on \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_launch_the_app_on_and_and(String platform, String version, String deviceName) {

		CommonUtil.setUpDriver(platform, version, deviceName);
		CommonUtil.launchURL();
		CommonUtil.m_homePage = new HomePage(CommonUtil.m_driver);

	}

	@When("^I click on button TryGoogleKeep$")
	public void i_click_on_button_TryGoogleKeep() throws Throwable {

		CommonUtil.m_homePage.clickTryGoogleKeepBtn();

	}

	@When("^I scroll down to centre of the page$")
	public void i_scroll_down_to_centre_of_the_page() throws Throwable {

		CommonUtil.m_homePage.getContainerItemsList().get(0).click();
	}

	@When("^I scroll down to footer of the page$")
	public void i_scroll_down_to_footer_of_the_page() throws Throwable {

	}
	
	@When("^I enter valid username \"([^\"]*)\"$")
	public void i_enter_valid_username(String username) throws Throwable {

		CommonUtil.m_homePage.enterUsername(username);
		CommonUtil.m_homePage.clickUsernameNextBtn();
		
	}
	
	@When("^I enter valid password \"([^\"]*)\"$")
	public void i_enter_valid_password(String password) throws Throwable {

		CommonUtil.m_homePage.enterPassword(password);
		CommonUtil.m_homePage.clickPasswordNextBtn();
	}
}