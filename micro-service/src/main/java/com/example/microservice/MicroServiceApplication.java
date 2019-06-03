package com.example.microservice;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MicroServiceApplication {

	private static Logger LOGGER = LoggerFactory.getLogger(MicroServiceApplication.class);
//	@Autowired
//    HelloService service;
//	
//	@Bean
//	HelloService helloService() {
//		return new HelloService() {
//			
//			@Override
//			public void hello() {
//				System.out.println("This is a custom bean");
//			}
//		};
//	}
	public static void main(String[] args) {
		LOGGER.debug("Starting Application...");
		SpringApplication.run(MicroServiceApplication.class, args);
	}

//	@Override
//	public void run(String... args) throws Exception {
//		   service.hello();
//	}
}
