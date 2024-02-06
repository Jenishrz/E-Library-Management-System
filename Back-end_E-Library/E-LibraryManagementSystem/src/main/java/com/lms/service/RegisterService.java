package com.lms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lms.bean.User;
import com.lms.repo.UserRepo;
@Service
public class RegisterService {
	@Autowired
	UserRepo repo;
	
    public boolean Register(User user) {
		repo.save(user);
		return true;
	}


}
