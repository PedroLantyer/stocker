package com.pedrolantyer.stocker_api.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.pedrolantyer.stocker_api.model.Product;

@Repository
public interface ReposProduct extends CrudRepository<Product, Integer>{
    List<Product> findByProductName(String productName);
    List<Product> findByProductId(int productId);
    List<Product> findByProprietaryId(int proprietaryId);
    
} 
