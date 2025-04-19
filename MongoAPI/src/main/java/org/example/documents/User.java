package org.example.documents;

import lombok.Getter;
import lombok.Setter;
import org.example.documents.dto.UserDTO;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Getter
@Setter
public class User {
    private String _id;
    private String name;
    private String phone;

    public User(){

    }

    public User(String id){
        _id = id;
    }

    public User(UserDTO dto){
        this.name = dto.getName();
        this.phone = dto.getPhone();
    }
}
