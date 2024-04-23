package com.hello.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {


    @PostMapping("/login")
    public Result login(@RequestParam("username") String username,
                        @RequestParam("password") String password){
        System.out.println(username);
        System.out.println(password);
        return new Result(222,"成功",null);
    }
}
