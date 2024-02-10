package com.elms.test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class AddressTestUpdateRunner {
	@Test
	public void openUpdateAddress() {
		WebDriver driverUpdate;
		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
		driverUpdate = new ChromeDriver();
		driverUpdate.navigate().to("http://localhost:4200/");
		driverUpdate.findElement(By.id("login")).click();
		System.out.println(driverUpdate.getTitle());
		driverUpdate.findElement(By.id("emailId")).sendKeys("alex@gmail.com");
		driverUpdate.findElement(By.id("password")).sendKeys("1414");
		driverUpdate.findElement(By.name("loginnow")).click();
		System.out.println(driverUpdate.getTitle());
		
		driverUpdate.findElement(By.id("address")).click();
		driverUpdate.findElement(By.id("doorNo")).sendKeys("234");
		driverUpdate.findElement(By.id("street")).sendKeys("East");
		driverUpdate.findElement(By.id("city")).sendKeys("Rajapalayam");
		driverUpdate.findElement(By.id("state")).sendKeys("TamilNadu");
		driverUpdate.findElement(By.id("pincode")).sendKeys("626119");
		
		
		driverUpdate.findElement(By.id("update")).click();
		System.out.println(driverUpdate.getTitle());
		
	}


	public static void main(String[] args) {
		AddressTestUpdateRunner obj = new AddressTestUpdateRunner();
		obj.openUpdateAddress();

	}


}
