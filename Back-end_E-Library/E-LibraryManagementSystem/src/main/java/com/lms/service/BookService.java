package com.lms.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.lms.bean.Book;
import com.lms.repo.BookRepo;



@Service
public class BookService {
	@Autowired
	BookRepo repo;

	public boolean insertBook(Book book) {
		repo.save(book);
		return true;
	}

	public boolean updateBook(Book book) {
		repo.save(book);
		return true;
	}
	public boolean deleteBook(@PathVariable("id") long id) {
		repo.deleteById(id);
		return true;
	}


	public List<Book> getAll() {
		Iterator<Book> it =  repo.findAll().iterator();
		List<Book> list = new ArrayList<Book>();
		while(it.hasNext()) {
			list.add(it.next());
		}
		return list;
	}



}
