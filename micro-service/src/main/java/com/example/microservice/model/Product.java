package com.example.microservice.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Product implements Serializable {
	@Id
    public Integer id;
    public String name;

    public Product() {
        //Default constructor needed for JPA.
    }
    public Product(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    @Override
    public String toString() {
        return "Product [id=" + id + ", name=" + name + "]";
    }

}
