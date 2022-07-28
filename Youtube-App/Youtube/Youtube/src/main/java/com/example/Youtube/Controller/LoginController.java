package com.example.Youtube.Controller;

import com.example.Youtube.Model.Login;
import com.example.Youtube.Service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:58008")
public class LoginController {
    @Autowired
    private LoginService loginService;

    @PostMapping("/login")
    public Login Login(@RequestBody Login login) throws Exception {
        System.out.println("login is Triggered");
        Login user = loginService.login(login);
        if(user == null)
        {
            throw new Exception("Bad Credentials!!! EmailId or Password does not Exists");
        }
        System.out.println("user present");
        return user;
    }
}
