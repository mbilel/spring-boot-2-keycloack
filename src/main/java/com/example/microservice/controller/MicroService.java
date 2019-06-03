package com.example.microservice.controller;

import java.io.IOException;
import java.net.InetAddress;
import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.microservice.model.Product;

@RestController
@RequestMapping("/api")
public class MicroService {
	
	private static Logger LOGGER = LoggerFactory.getLogger(MicroService.class);
	
	@GetMapping("/resource/{id}")
	public ResponseEntity<String> getResource(HttpServletRequest request, HttpServletResponse response,  @PathVariable long id ) throws IOException{

		LOGGER.info("111"+ request.getServerName());
		return new ResponseEntity<>( "Hello "+id, HttpStatus.OK);
	}
	
	@GetMapping("/ip")
	public ResponseEntity<String> getResource() throws IOException{

		 InetAddress localhost = InetAddress.getLocalHost(); 
	        String ipAddress = (localhost.getHostAddress()).trim();
	        LOGGER.info("System IP Address : " + ipAddress); 
		
		return new ResponseEntity<>( "IP Address "+ipAddress, HttpStatus.OK);
	}
	
	@GetMapping("/unsecured")
	public ResponseEntity<String> unsecured(HttpServletRequest request, HttpServletResponse response) throws IOException{
		LOGGER.info("Executing unsecured endpoint...");
		return new ResponseEntity<>( "Unsecured data successfully returned ", HttpStatus.OK);
	}
	
	@GetMapping("/products")
	public List<Product> getProducts(HttpServletRequest request, HttpServletResponse response) throws IOException{

		LOGGER.info("Executing product endpoint...");
		List<Product> products = Arrays.asList(new Product(1, "Product 1"), new Product(2, "Product 2"), new Product(3, "Product 3"));
		return products ;
	}

}
