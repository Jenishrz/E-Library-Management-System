package com.lms.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.lms.bean.Address;
import com.lms.bean.Book;
import com.lms.repo.AddressRepo;
@Service
public class AddressService {
	@Autowired
	AddressRepo dao;
	
	public boolean insertAddress(Address address) {
		dao.save(address);
		return true;
	}
	public boolean updateAddress( Address address) {
		dao.save(address);
		return true;
	}
	public boolean deleteAddress(@PathVariable("id") long id) {
		dao.deleteById(id);
		return true;
	}


	public List<Address> getAll() {
		Iterator<Address> it =  dao.findAll().iterator();
		List<Address> list = new ArrayList<Address>();
		while(it.hasNext()) {
			list.add(it.next());
		}
		return list;
	}


}
