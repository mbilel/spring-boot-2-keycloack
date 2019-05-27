package com.example.microservice.controller;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UrlPathHelper;

import com.example.microservice.model.Product;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class MicroService {
	
	@GetMapping("/resource/{id}")
	public ResponseEntity<String> getResource(HttpServletRequest request, HttpServletResponse response,  @PathVariable long id ) throws IOException{
		
		System.out.println("111"+ request.getServerName());
		
		System.out.println("222"+ request.getRequestURI().substring(request.getContextPath().length()));
		
		System.out.println("333"+ new UrlPathHelper().getPathWithinApplication(request));
		
		return new ResponseEntity<>( "Hello "+id, HttpStatus.OK);
	}
	
	@GetMapping("/unsecured")
	public ResponseEntity<String> getUnsecuredResource(HttpServletRequest request, HttpServletResponse response,  @PathVariable long id ) throws IOException{
		
		System.out.println("111"+ request.getServerName());
		
		System.out.println("222"+ request.getRequestURI().substring(request.getContextPath().length()));
		
		System.out.println("333"+ new UrlPathHelper().getPathWithinApplication(request));
		
		return new ResponseEntity<>( "unsecured "+id, HttpStatus.OK);
	}

	
	
	@GetMapping("/products")
	public List<Product> getProducts(HttpServletRequest request, HttpServletResponse response) throws IOException{
		
		List<Product> products = Arrays.asList(
				new Product(1, "Prodcut 1"),
				new Product(2, "Prodcut 2"),
				new Product(3, "Prodcut 3"),
				new Product(4, "Prodcut 4"));
		return products;
	}

}
