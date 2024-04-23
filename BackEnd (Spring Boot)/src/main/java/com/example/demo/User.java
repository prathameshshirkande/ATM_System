package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class User {
	
	@Id
	private int account_id;
	private int pin;
	private int amount;
	private String name;
	
	public int getAccount_id() {
		return account_id;
	}
	public void setAccount_id(int account_id) {
		this.account_id = account_id;
	}
	public int getPin() {
		return pin;
	}
	public void setPin(int pin) {
		this.pin = pin;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public User(int account_id, int pin, int amount, String name) {
		super();
		this.account_id = account_id;
		this.pin = pin;
		this.amount = amount;
		this.name = name;
	}
	public User() {
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "User [account_id=" + account_id + ", pin=" + pin + ", amount=" + amount + ", name=" + name + "]";
	}
	
	
	
	

}
