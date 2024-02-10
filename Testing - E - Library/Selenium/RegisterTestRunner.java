package com.elms.test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class RegisterTestRunner {
	@Test
	public void openRegister() {
		WebDriver driverInsert;
		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
		driverInsert = new ChromeDriver();
		driverInsert.navigate().to("http://localhost:4200/");
		driverInsert.findElement(By.id("register")).click();
		System.out.println(driverInsert.getTitle());

		driverInsert.findElement(By.id("userName")).sendKeys("Alex");
		driverInsert.findElement(By.id("emailId")).sendKeys("alex@gmail.com");
		driverInsert.findElement(By.id("mobileNumber")).sendKeys("7894561230");
		driverInsert.findElement(By.id("userType")).sendKeys("user");
		driverInsert.findElement(By.id("address")).sendKeys("salem");
		driverInsert.findElement(By.id("password")).sendKeys("1414");
		driverInsert.findElement(By.name("registersoon")).click();
		System.out.println(driverInsert.getTitle());
	}

	public static void main(String[] args) {
		RegisterTestRunner obj = new RegisterTestRunner();
		obj.openRegister();
	}

}
