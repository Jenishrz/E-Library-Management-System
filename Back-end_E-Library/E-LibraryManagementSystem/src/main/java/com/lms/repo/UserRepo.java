package com.lms.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lms.bean.User;

public interface UserRepo extends JpaRepository<User, Long> {
	
	public User findByEmailId(String email);
	public User findByPassword(String password);


}
 