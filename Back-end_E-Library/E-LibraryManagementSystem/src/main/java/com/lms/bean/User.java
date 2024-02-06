package com.lms.bean;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tbl_user")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long userId;

	@Column(name = "userName")
	private String userName;

	@Column(name = "emailId")
	private String emailId;

	@Column(name = "userMobilenumber")
	private String mobileNumber;

	@Column(name = "userType")
	private String userType;

	@Column(name = "address")
	private String address;

	@Column(name = "password")
	private String password;

	public User(int userId, String userName, String emailId, String mobileNumber, String userType, String address,
			String password) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.emailId = emailId;
		this.mobileNumber = mobileNumber;
		this.userType = userType;
		this.address = address;
		this.password = password;
	}

	public User() {
		super();
	}

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", userName=" + userName + ", emailId=" + emailId + ", mobileNumber="
				+ mobileNumber + ", userType=" + userType + ", address=" + address + ", password=" + password + "]";
	}

}
