package com.davidagood.objectstorebrowser;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ObjectStoreController {

    @GetMapping("/world")
    public String test() {
        return "world";
    }

}