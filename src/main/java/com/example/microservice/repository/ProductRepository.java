package com.example.microservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import com.example.microservice.model.Product;

@RepositoryRestResource
public interface ProductRepository extends JpaRepository<Product, Integer> {

	public List<Product> findByNameContainingIgnoreCase(String searchString);
	
	@Query("select p from Product p where p.name = :name")
    public List<Product> findByNameIs(@Param("name") String name);
	
}
