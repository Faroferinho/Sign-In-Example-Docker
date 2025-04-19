package org.example.services;

import org.example.documents.User;
import org.example.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository repository;

    //Create
    public void save(User user){
        repository.save(user);
    }

    //Read
    public List<User> findAll(){
        return repository.findAll();
    }

    public Optional<User> findById(String id){
        return repository.findById(id);
    }

    //Delete
    public void deleteById(String id){
        repository.deleteById(id);
    }
}
