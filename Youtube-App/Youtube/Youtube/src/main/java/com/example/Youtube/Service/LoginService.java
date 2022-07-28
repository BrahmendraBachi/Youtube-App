package com.example.Youtube.Service;

import com.example.Youtube.Model.Login;
import com.example.Youtube.Repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoginService {
    @Autowired
    private LoginRepository loginRepository;

    public Login login(Login login) {
        System.out.println("Log in is Triggered");
        List<Login> users = loginRepository.findAll();
        System.out.println(login.getUsername()+" "+login.getPassword());
        for(Login user : users)
        {
            if(user.getUsername().equals(login.getUsername()))
            {
                if(user.getPassword().equals(login.getPassword()))
                {
                    return user;
                }
            }
        }
        return null;
    }
}
