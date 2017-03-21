package com.example.controller;

import java.util.List;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.Dao.LoginDao;
import com.example.bean.AddStatus;
import com.example.bean.Login;

@Controller
@RequestMapping("/LoginUser")
public class LoginUser {
	@Autowired
	LoginDao login;
	
	
	@RequestMapping(method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody String doLogin(@RequestBody Login userDetails)
	{
		try{
		boolean ifValidUser = login.checkLogin(userDetails);
		if(ifValidUser)
			return "true";
		else
			return "false";
		//return Collections.singletonMap("response", "Updated Successfully");
		}
		catch(Exception e)
		{
			return JSONObject.quote(e.getMessage());
		}
		
	} 

}