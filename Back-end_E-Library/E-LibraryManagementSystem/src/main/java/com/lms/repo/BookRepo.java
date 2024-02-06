package com.lms.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lms.bean.Book;


public interface BookRepo extends JpaRepository<Book, Long> {

}
