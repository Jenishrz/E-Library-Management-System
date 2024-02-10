package com.elms.test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class AddressTestDeleteRunner {

	@Test
	public void openDeleteAddress() {
		WebDriver driverDelete;
		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
		driverDelete = new ChromeDriver();
		driverDelete.navigate().to("http://localhost:4200/");
		driverDelete.findElement(By.id("login")).click();
		System.out.println(driverDelete.getTitle());
		driverDelete.findElement(By.id("emailId")).sendKeys("alex@gmail.com");
		driverDelete.findElement(By.id("password")).sendKeys("1414");
		driverDelete.findElement(By.name("loginnow")).click();
		System.out.println(driverDelete.getTitle());

		driverDelete.findElement(By.id("doorNo")).sendKeys("234");
		driverDelete.findElement(By.id("delete")).submit();
		System.out.println(driverDelete.getTitle());
	}
		public static void main(String[] args) {

			AddressTestDeleteRunner obj = new AddressTestDeleteRunner();
			obj.openDeleteAddress();

		}




}
