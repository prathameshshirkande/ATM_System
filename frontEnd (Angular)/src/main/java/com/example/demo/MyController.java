package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class MyController {
	
	@Autowired
	private UserRepo urepo;
	
//	@RequestMapping("login{username}")
//	public int login(@PathVariable String username,@RequestBody String password) {
//		try {
//			
//			int count=userRepo.countByUsername(username);
//			
//			if(count==0) {return 0; //incorrect username				
//			}
//			else if(count==1){
//			User us=userRepo.findByUsername(username);
//			
//			if(us.getPassword().equals(password)) {
//				return 1;///login 
//			}else {
//				return 2;//wrong password 
//			}
//			
//			}
//			
//		}catch(Exception e) {
//			e.printStackTrace();
//			return -1;  //something error
//		}
//		return 0;
//	}
	
	
	@PostMapping("create")
	public boolean create(@RequestBody User user) {
		
		urepo.save(user);
		return true;
		
	}
	
	@PutMapping("procced")
	public boolean procced(@RequestBody User user) {
		int account_id=user.getAccount_id();
		int pin=user.getPin();
		
		try {
				User user1=urepo.getById(account_id);
				if(account_id==user1.getAccount_id() && pin==user1.getPin()) {
					return true;
				}
				else {
					return false;
				}
		}
		catch(Exception e){
			return false;
		}
		
	}
	
	
	
	@GetMapping("check{account_id}")
	public int balance(@PathVariable int account_id) {
		
		User user=new User();
		user=urepo.getById(account_id);
		int amount=user.getAmount();
		return amount;
	}
	
	@PutMapping("deposit")
	public boolean deposit(@RequestBody User user) {
		User user1=urepo.getById(user.getAccount_id());
		int amount=user1.getAmount()+user.getAmount();
		user1.setAmount(amount);
		urepo.save(user1);
		System.out.println(amount);
		
		return true;
	}
	
	@PutMapping("withdrawal")
	public boolean withdraw(@RequestBody User user) {
		User user1=urepo.getById(user.getAccount_id());
		if(user1.getAmount()>user.getAmount()) {
			int amount=user1.getAmount();
			amount=amount-user.getAmount();
			user1.setAmount(amount);
			urepo.save(user1);
			return true;
		}
		else {
			return false;
		}
		
	}
	

}
