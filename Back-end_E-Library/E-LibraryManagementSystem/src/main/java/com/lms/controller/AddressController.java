package com.lms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lms.bean.Address;
import com.lms.bean.Book;
import com.lms.service.AddressService;
import com.lms.service.BookService;

@RestController
@CrossOrigin("http://localhost:4200/")
public class AddressController {
	@Autowired
	AddressService service;

	// Insert in SB with Angular Integration
	@PostMapping("/performinsertAddress")
	public String performInsertAddress(@RequestBody Address address) {
		service.insertAddress(address);
		return "Instered";
	}

}
