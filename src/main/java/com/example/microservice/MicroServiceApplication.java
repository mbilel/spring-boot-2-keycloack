package com.example.microservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.starter.service.HelloService;

@SpringBootApplication
public class MicroServiceApplication implements CommandLineRunner {

	@Autowired
    HelloService service;
	
	@Bean
	HelloService helloService() {
		return new HelloService() {
			
			@Override
			public void hello() {
				System.out.println("This is a custom bean");
			}
		};
	}
	public static void main(String[] args) {
		SpringApplication.run(MicroServiceApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		   service.hello();
	}
}
