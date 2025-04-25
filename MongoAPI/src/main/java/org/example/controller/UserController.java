package org.example.controller;

import org.example.documents.User;
import org.example.documents.dto.UserDTO;
import org.example.info.Constant;
import org.example.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000/", methods = {RequestMethod.GET, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.POST})
@RestController
public class UserController {
    @Autowired
    private UserService service;

    //Create
    @PostMapping(Constant.API_USER)
    public void insert(@RequestBody UserDTO dto){
        service.save(new User(dto));
    }

    //Update

    //Read
    @GetMapping(Constant.API_USER)
    public List<User> findAll(){
        return service.findAll();
    }

    @GetMapping(Constant.API_USER + "/{id}")
    public Optional<User> findOne(@RequestBody String _id){
        return service.findById(_id);
    }

    //Delete
    @DeleteMapping(Constant.API_USER + "/{id}")
    public void remove(@RequestBody String _id){
        service.deleteById(_id);
    }
}
