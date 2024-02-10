package com.elms.test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class AddressTestInsertRunner {

	@Test
	public void openAddAddress() {
		WebDriver driverInsert;
		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
		driverInsert = new ChromeDriver();
		driverInsert.navigate().to("http://localhost:4200/");
		driverInsert.findElement(By.id("login")).click();
		System.out.println(driverInsert.getTitle());
		driverInsert.findElement(By.id("emailId")).sendKeys("alex@gmail.com");
		driverInsert.findElement(By.id("password")).sendKeys("1414");
		driverInsert.findElement(By.name("loginnow")).click();
		System.out.println(driverInsert.getTitle());
		
		driverInsert.findElement(By.id("address")).click();
		driverInsert.findElement(By.id("doorNo")).sendKeys("234");
		driverInsert.findElement(By.id("street")).sendKeys("North");
		driverInsert.findElement(By.id("city")).sendKeys("Sivakasi");
		driverInsert.findElement(By.id("state")).sendKeys("TamilNadu");
		driverInsert.findElement(By.id("pincode")).sendKeys("626189");
		
		
		driverInsert.findElement(By.id("insert")).click();
		System.out.println(driverInsert.getTitle());
	}


	public static void main(String[] args) {
		AddressTestInsertRunner obj = new AddressTestInsertRunner();
		obj.openAddAddress();

	}

}
