package com.lms.bean;

public class Response {
	
	String message;

	public Response(String message) {
		super();
		this.message = message;
	}

	public Response() {
		super();
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
