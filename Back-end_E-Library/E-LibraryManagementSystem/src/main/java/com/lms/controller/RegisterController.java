package com.lms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lms.bean.User;
import com.lms.service.RegisterService;

@RestController
@CrossOrigin("http://localhost:4200/")

public class RegisterController {
	@Autowired
	RegisterService service;
	
	
	
	@PostMapping("/Register")
	public String performRegister(@RequestBody User user) {
		
		service.Register(user);
		return "Registered";
	}


}
