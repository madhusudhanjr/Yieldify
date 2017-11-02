package com.gk.tests;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

/**
 * GoogleKeepTestRunner Class is a JUnit Cucumber TestRunner
 *  
 * @author mjr (madhusudhan.jr@gmail.com)
 */
@RunWith(Cucumber.class)
@CucumberOptions(plugin = { "pretty", "html:target/cucumber_test_report" }, features = {
		"classpath:Features/GoogleKeep.feature" }, glue = { "com.gk.stepdefs" })
public class GoogleKeepTestRunner {

}
