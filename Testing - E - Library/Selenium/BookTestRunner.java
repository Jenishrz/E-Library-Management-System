package com.elms.test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class BookTestRunner {
	@Test
	public void openAddBook() {
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
		driverInsert.findElement(By.id("book")).click();
		driverInsert.findElement(By.id("bookId")).sendKeys("11953");
		driverInsert.findElement(By.id("bookTitle")).sendKeys("General");
		driverInsert.findElement(By.id("authorName")).sendKeys("Minion");
		driverInsert.findElement(By.id("edition")).sendKeys("2001");
		driverInsert.findElement(By.id("bookType")).sendKeys("General Book");
		driverInsert.findElement(By.id("bookDetails")).sendKeys("General Book Details");
		
		driverInsert.findElement(By.id("insert")).click();
		System.out.println(driverInsert.getTitle());
	}


	public static void main(String[] args) {
		BookTestRunner obj = new BookTestRunner();
		obj.openAddBook();

	}

}
