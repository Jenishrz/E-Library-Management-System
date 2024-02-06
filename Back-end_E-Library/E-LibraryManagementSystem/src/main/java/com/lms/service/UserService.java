package com.lms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lms.bean.User;
import com.lms.repo.UserRepo;

@Service
public class UserService {
	@Autowired
	UserRepo dao;
	
	public boolean insert(User user) {
		dao.save(user);
		return true;
	}

}
