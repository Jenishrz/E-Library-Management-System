package com.elms.test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class BookTestUpdateRunner {

	@Test
	public void openUpdateBook() {
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
		driverUpdate.findElement(By.id("book")).click();
		driverUpdate.findElement(By.id("bookId")).sendKeys("11953");
		driverUpdate.findElement(By.id("bookTitle")).sendKeys("Economics");
		driverUpdate.findElement(By.id("authorName")).sendKeys("Naveen");
		driverUpdate.findElement(By.id("edition")).sendKeys("1910");
		driverUpdate.findElement(By.id("bookType")).sendKeys("Currency");
		driverUpdate.findElement(By.id("bookDetails")).sendKeys("General Economics Details");
		
		driverUpdate.findElement(By.id("insert")).click();
		System.out.println(driverUpdate.getTitle());
	}


	public static void main(String[] args) {
		BookTestUpdateRunner obj = new BookTestUpdateRunner();
		obj.openUpdateBook();

	}

}
