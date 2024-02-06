package com.lms.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tbl_book")
public class Book {
	@Id
	//@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "bookId")
	private Long bookId;

	@Column(name = "book_title")
	private String bookTitle;

	@Column(name = "authorName")
	private String authorName;

	@Column(name = "edition")
	private int edition;

	@Column(name = "book_Type")
	private String bookType;

	@Column(name = "book_Details")
	private String bookDetails;

	public Book(Long bookId, String bookTitle, String authorName, int edition, String bookType, String bookDetails) {
		super();
		this.bookId = bookId;
		this.bookTitle = bookTitle;
		this.authorName = authorName;
		this.edition = edition;
		this.bookType = bookType;
		this.bookDetails = bookDetails;
	}

	public Book() {
		super();
	}

	public Long getBookId() {
		return bookId;
	}

	public void setBookId(Long bookId) {
		this.bookId = bookId;
	}

	public String getBookTitle() {
		return bookTitle;
	}

	public void setBookTitle(String bookTitle) {
		this.bookTitle = bookTitle;
	}

	public String getAuthorName() {
		return authorName;
	}

	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}

	public int getEdition() {
		return edition;
	}

	public void setEdition(int edition) {
		this.edition = edition;
	}

	public String getBookType() {
		return bookType;
	}

	public void setBookType(String bookType) {
		this.bookType = bookType;
	}

	public String getBookDetails() {
		return bookDetails;
	}

	public void setBookDetails(String bookDetails) {
		this.bookDetails = bookDetails;
	}

	@Override
	public String toString() {
		return "Book [bookId=" + bookId + ", bookTitle=" + bookTitle + ", authorName=" + authorName + ", edition="
				+ edition + ", bookType=" + bookType + ", bookDetails=" + bookDetails + "]";
	}

}
