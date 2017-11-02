package com.gk.pageobjects;

import java.util.List;

import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.support.FindBy;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;

/**
 * HomePage Class contains info on all the WebElements and its Operations
 * 
 * @author mjr (madhusudhan.jr@gmail.com)
 */
public class HomePage extends BasePage {

	/**
	 * Class variable which holds the reference to the Logger Object
	 */
	static Logger logger = Logger.getLogger(HomePage.class);

	@FindBy(id = "identifierId")
	MobileElement userName;

	@FindBy(id = "identifierNext")
	MobileElement userNameNextBtn;

	@FindBy(name = "password")
	MobileElement password;

	@FindBy(id = "passwordNext")
	MobileElement passwordNextBtn;

	@FindBy(css = ".keep-item-container")
	List<MobileElement> containerItems;

	@FindBy(css = "#maia-footer-global a")
	List<MobileElement> footerLinks;

	@FindBy(id = "ognwrapper")
	MobileElement wrapperHeader;

	@FindBy(xpath = "//*[text()='Try Google Keep']")
	MobileElement tryGoogleKeepBtn;

	@FindBy(xpath = "//*[text()='No thanks']")
	MobileElement appAlert;

	public HomePage(AppiumDriver driver) {

		super(driver);
	}

	/**
	 * This method is used to enter the username
	 * 
	 * @param username
	 */
	public void enterUsername(String username) {

		logger.info("Enter UserName :: " + username);
		userName.sendKeys(username);
	}

	/**
	 * This method is used to enter the password
	 * 
	 * @param password
	 */
	public void enterPassword(String pwd) {

		logger.info("Enter Password :: " + pwd);
		password.sendKeys(pwd);
	}

	/**
	 * This method is used to click the "Try Google Keep" button
	 */
	public void clickTryGoogleKeepBtn() {

		logger.info("Click TryGoogleKeep Button");
		tryGoogleKeepBtn.click();
	}

	/**
	 * This method is used to click the "Next" button in Google Sign-in form
	 * after entering username
	 */
	public void clickUsernameNextBtn() {

		logger.info("Click Username -> Next Button");
		userNameNextBtn.click();
	}

	/**
	 * This method is used to click the "Next" button in Google Sign-in form
	 * after entering password
	 */
	public void clickPasswordNextBtn() {

		logger.info("Click Password -> Next Button");
		passwordNextBtn.click();
	}

	/**
	 * This method is used to verify the presence of "Try Google Keep Button"
	 */
	public void verifyTryGoogleKeepBtn() {

		logger.info("Verify Try Google Keep Button");

		Assert.assertTrue("Try Google Keep Button not displayed!!", tryGoogleKeepBtn.isDisplayed());
		Assert.assertTrue("Try Google Keep Button not enabled!!", tryGoogleKeepBtn.isEnabled());

		logger.info("Google Keep Button verified successfully!!");

	}

	/**
	 * This method is used to get the container items list
	 * 
	 * @return List<MobileElement>
	 */
	public List<MobileElement> getContainerItemsList() {

		logger.info("Get Container Items List");

		return containerItems;
	}

	/**
	 * This method is used to verify the presence of "Try Google Keep Button"
	 */
	public void verifyGoogleSigninForm() {

		logger.info("Verify Google Sign-in Form");

		Assert.assertTrue("Google Sign-in Form displayed!!", userName.isDisplayed());
		Assert.assertTrue("Google Sign-in Form enabled!!", userName.isEnabled());

		logger.info("Google Sign-in Form verified successfully!!");

	}

	/**
	 * This method is used to get the footer links list
	 * 
	 * @return List<MobileElement>
	 */
	public List<MobileElement> getFooterLinks() {

		logger.info("Get Footer Links");

		return footerLinks;
	}

	/**
	 * This method is used to get the Header Text
	 * 
	 * @return String
	 */
	public String getHeaderText() {

		logger.info("Get Header Text");

		return wrapperHeader.getText();
	}

	/**
	 * This method is used to click on the Alert
	 */
	public void handleAppAlert() {

		logger.info("Handle App Alert");

		appAlert.click();
	}
}
