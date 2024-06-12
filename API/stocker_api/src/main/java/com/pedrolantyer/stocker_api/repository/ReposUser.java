package com.pedrolantyer.stocker_api.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.pedrolantyer.stocker_api.model.User;
import java.util.List;


@Repository
public interface ReposUser extends CrudRepository<User, Integer>{
    List<User> findByUserId(int userId);
    List<User> findByEmail(String email);
    List<User> findByUsername(String username);
}

