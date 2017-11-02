package com.gk.utils;

import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.remote.DesiredCapabilities;

import com.gk.pageobjects.HomePage;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.ios.IOSDriver;
import io.appium.java_client.service.local.AppiumDriverLocalService;
import io.appium.java_client.service.local.AppiumServiceBuilder;

/**
 * CommonUtil class contains the reusable functions which can be used across the
 * project
 * 
 * @author mjr (madhusudhan.jr@gmail.com)
 */
public class CommonUtil {

	/**
	 * Class variable which holds the reference to the Logger Object
	 */
	static Logger logger = Logger.getLogger(CommonUtil.class);

	/**
	 * Class variable which holds the reference to the WebDriver Object
	 */
	public static AppiumDriver<MobileElement> m_driver;
	private static AppiumDriverLocalService service;
	public static HomePage m_homePage = null;
	public static String m_URL = null;
	
	/**
	 * Method to start Appium server programmatically
	 * 
	 * @throws Exception
	 */
	private static void startAppiumServer() {

		service = AppiumDriverLocalService
				.buildService(new AppiumServiceBuilder().usingDriverExecutable(new File("/usr/local/bin/node"))
						.withAppiumJS(new File("/usr/local/bin/appium")).withIPAddress("127.0.0.1").usingPort(4723));

		service.start();

	}

	/**
	 * This method used to setup the Appium Driver
	 * 
	 * @throws MalformedURLException
	 */
	public static void setUpDriver(String platform, String version, String deviceName) {

		logger.info("Setup Appium Driver with Platform:: " + platform + ", Version:: " + version + ", DeviceName:: "
				+ deviceName);

		if (getProperty("StartAppiumServerProgrammatically").equals("Yes")) {

			logger.info("\n******Starting Appium Server Programmatically*******\n");
			startAppiumServer();

		}

		DesiredCapabilities capabilities = new DesiredCapabilities();

		/**
		 * Below Capabilities to be added for executing tests locally
		 **/
		capabilities.setCapability("automationName", "XCUITest");
		capabilities.setCapability("browserName", "safari");
		capabilities.setCapability("platformName", platform);
		capabilities.setCapability("deviceName", deviceName);
		capabilities.setCapability("platformVersion", version);
		capabilities.setCapability("newCommandTimeout", 600);
		capabilities.setCapability("launchTimeout", 90000);
		capabilities.setCapability("autoAcceptAlerts", true);

		URL appiumURL;
		try {

			if (null != service && service.getUrl() != null)
				appiumURL = new URL(service.getUrl().toString());
			else
				appiumURL = new URL("http://127.0.0.1:4723/wd/hub");

			m_driver = new IOSDriver<MobileElement>(appiumURL, capabilities);
			m_driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		} catch (MalformedURLException e) {
			e.printStackTrace();
		}

	}

	public static void launchURL() {
		
		logger.info("Launch URL:: " + m_URL);
		m_driver.get(m_URL);
		logger.info("Google Keep URL launched successfully!!");
	}
	
	/**
	 * This method is used to quit the Driver
	 */
	public static void quitDriver() {

		logger.info("Quit Driver");
		if (null != m_driver)
			m_driver.quit();

		if (getProperty("StartAppiumServerProgrammatically").equals("Yes")) {
			if (null != service)
				service.stop();
		}
	}

	public static String getProperty(String property) {

		return PropertiesFileParser.getProperty(property);
	}
	
	/**
	 * Wait in minutes
	 * @param min
	 */
	public static void wait(int min) {

		try {
			Thread.sleep(1000 * min);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
}
