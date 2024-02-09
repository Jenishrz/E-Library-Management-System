package com.lms;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.testng.Assert.assertEquals;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.lms.bean.Book;
import com.lms.bean.Response;
import com.lms.bean.User;
import com.lms.service.BookService;
import com.lms.service.LoginService;
import com.lms.service.RegisterService;
import com.lms.service.UserService;

@SpringBootTest
class E_LibraryManagementSystemApplicationTests {

	@Autowired
	BookService service;
	String insert;
	String update;
	String delete;
	
	boolean result;
	boolean result1;
	
	List<Book> list1 = new ArrayList<>();
	List<Book> list2 = new ArrayList<>();
	
	Book book1 = new Book((long) 204, "Jenish", "English", 2003, "Intro to English", "Ebook");
	Book book2 = new Book((long) 205, "Delotie", "Science", 2003, "Intro to Science", "Ebook");
	Book book3;
	Book book4;

	@Test
	@Order(1)
	public void testPerformBookInsert() {
		insert = "Inserted";
		result = service.insertBook(book1);
		assertEquals(true, result);
	}

	@Test
	@Order(2)
	public void testPerformBookUpdate() {
		update = "Updated";
		result = service.insertBook(book2);
		assertEquals(true, result);
	}

	@Test
	@Order(3)
	public void testPerformBookDelete() {
		delete = "Deleted";
		result = service.deleteBook(204);
		assertEquals(true, result);
	}

	@Test
	@Order(4)
	public void testBookGetAll() {
		list1 = service.getAll();
		Book book2 = new Book((long) 205, "Delotie", "Science", 2003, "Intro to Science", "Ebook");
		Book book3 = new Book((long) 204, "Delotie", "Science", 2003, "Intro to Science", "Ebook");
		list1.add(book2);
		list1.add(book3);
		list1.equals(list2);
	}

	@Autowired
	UserService service1;
	String insertUser;
	String updateUser;
	String deleteUser;
	
	boolean result1User;
	boolean result2User;
	
	List<User> listUser1 = new ArrayList<>();
	List<User> listUser2 = new ArrayList<>();
	
	User user1 = new User(101, "abcde", "abcde@gmail.com", "1234567890", "user", "salem", "1212");
	User user2 = new User(102, "aabbcc", "aabbcc@gmail.com", "1234567890", "user", "erode", "1213");
	User user3;
	User user4;

	@Test
	@Order(5)
	public void testPreformUserInsert() {
		insertUser = "Inserted";
		result1User = service1.insertUser(user1);
		assertEquals(true, result1User);
	}

	@Test
	@Order(6)
	public void testPerformUserUpdate() {
		updateUser = "Updated";
		result1User = service1.updateUser(user2);
		assertEquals(true, result1User);
	}

	@Test
	@Order(7)
	public void testPerformUserDelete() {
		deleteUser = "Deleted";
		result1User = service1.deleteUser(101);
		result2User = service1.deleteUser(102);
		assertEquals(true, result1User);
	}

	@Test
	@Order(8)
	public void testPerformUserGetAll() {
		listUser1 = service1.getAll();
		User user1 = new User(103, "Meow", "meow@gmail.com", "1234567890", "user", "salem", "1212");
		User user3 = new User(104, "Zita", "zoya@gmail.com", "1234567890", "user", "erode", "1213");
		listUser1.add(user1);
		listUser1.add(user3);
		listUser1.equals(listUser1);
	}

	@Autowired
	LoginService loginservice;

	@Autowired
	RegisterService registerService;

	boolean res;
	boolean val;
	
	User log = new User(1, "Raja", "rajamani@gmail.com", "1234567890", "user", "raja", "1234");

	@Test
	@Order(9)
	void performLogin() {
		Response res1 = new Response("User Success");
		Response res = loginservice.login(log);
		res1.equals(res);
	}

	@Test
	@Order(10)
	void performRegister() {
		val = true;
		res = registerService.Register(log);
		assertEquals(val, res);
	}

}
