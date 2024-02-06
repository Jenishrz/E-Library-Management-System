package com.lms.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lms.bean.User;
import com.lms.service.UserService;

@RestController
@CrossOrigin("http://localhost:4200/")
public class UserController {
		@Autowired
		UserService service;

		// Insert in SB with Angular Integration
		@PostMapping("/PerformInsert")
		public String performInsert(@ModelAttribute User user) {
			service.insert(user);
			return "Instered";
		}

		/*// Update in SB with Angular Integration
		@PutMapping("/PerformUpdate")
		public void performUpdate(@RequestBody User user) {
			dao.save(user);
		}

		// Delete in SB with Angular Integration
		@DeleteMapping("/PerformDelete/{id}")
		public void performDelete(@PathVariable("id") Long id) {
			dao.deleteById(id);
		}

		@GetMapping("/ViewAll")
		public List<User> getAllLaptop() {
			System.out.println("Inside ViewAll");
			Iterator<User> it = dao.findAll().iterator();
			ArrayList<User> list = new ArrayList<User>();
			while (it.hasNext()) {
				list.add(it.next());
			}
			return list;
		}*/

}
