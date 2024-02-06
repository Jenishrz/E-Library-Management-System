package com.lms.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lms.bean.Address;
import com.lms.bean.User;

public interface AddressRepo extends JpaRepository<Address, Long> {

}
