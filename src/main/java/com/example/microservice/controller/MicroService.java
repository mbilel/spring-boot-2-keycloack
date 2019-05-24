package com.example.microservice.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UrlPathHelper;

@RestController
@RequestMapping("/api")
public class MicroService {
	
	@GetMapping("/resource/{id}")
	public ResponseEntity<String> getResource(HttpServletRequest request, HttpServletResponse response,  @PathVariable long id ) throws IOException{

		System.out.println("111"+ request.getServerName());
		
		System.out.println("222"+ request.getRequestURI().substring(request.getContextPath().length()));
		
		System.out.println("333"+ new UrlPathHelper().getPathWithinApplication(request));
		
		return new ResponseEntity<>( "Hello "+id, HttpStatus.OK);
	}

}
