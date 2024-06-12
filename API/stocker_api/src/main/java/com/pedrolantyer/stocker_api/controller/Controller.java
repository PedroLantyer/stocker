package com.pedrolantyer.stocker_api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.pedrolantyer.stocker_api.model.ConnectedUser;
import com.pedrolantyer.stocker_api.model.Product;
import com.pedrolantyer.stocker_api.model.User;
import com.pedrolantyer.stocker_api.repository.ReposProduct;
import com.pedrolantyer.stocker_api.repository.ReposUser;




@RestController
public class Controller {
    
    @Autowired
    private ReposUser actionUser;

    @PostMapping("/register")
    public Boolean register(@RequestBody User userObj)
    {
        try {
            actionUser.save(userObj);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @GetMapping("/login")
    public ConnectedUser loginSuccess(@RequestParam("username") String username, @RequestParam("password") String password)
    {
        List<User> matches = actionUser.findByUsername(username);
        if(matches.size() == 0)
        {
            ConnectedUser fail = new ConnectedUser();
            return fail;
        }

        User u = matches.get(0);
        if(u.getPassword().equals(password))
        {
            String userStr = u.getUsername();
            int id = u.getUserId();
            boolean connected = true;
            ConnectedUser user = new ConnectedUser(userStr, id, connected);
            return user;
        }
        else
        {
            ConnectedUser fail = new ConnectedUser();
            return fail;
        }
    }

    @GetMapping("/register/usercheck")
    public Boolean userIsDuplicate(@RequestParam("username") String username)
    {
        List<User> matches = actionUser.findByUsername(username);
        if(matches.size() == 0){return false;}
        else{return true;}
        
    }

    @GetMapping("/register/duplicatemail")
    public Boolean emailIsDuplicate(@RequestParam("email") String email)
    {

        List<User> matches = actionUser.findByEmail(email);
        if(matches.size() == 0){return false;}
        else{return true;}
    }

    @GetMapping("/helloworld")
    public String helloWorld()
    {
        return "Hello World!";
    }

    /*PRODUCT RELATED MAPPINGS - MOVE TO DIFFERENT FILE*/
    @Autowired
    private ReposProduct actionProduct;


    @GetMapping("/getproductlist")
    public List<Product> getProductList(@RequestParam("proprietaryId") int proprietaryId){
        List<Product> productList = actionProduct.findByProprietaryId(proprietaryId);
        return productList;
    }

    @PostMapping("/addproduct")
    public Boolean addProduct(@RequestBody Product productObj){
        try {
            actionProduct.save(productObj);
            return true;    
        } catch (Exception e) {
            return false;
        }
    }

    @DeleteMapping("/deleteproduct")
    public Boolean deleteProduct(@RequestParam("productId") int productId)
    {
        try
        {
            actionProduct.deleteById(productId);
            return true;
        } catch(Exception e){
            return false;
        }
    }

    @PatchMapping("/updateproductname")
    public Boolean updateProductName(@RequestParam("productId") int productId, @RequestParam("updatedName") String updatedName){
        try
        {
            List<Product> matches = actionProduct.findByProductId(productId);
            if(matches.size() == 0){
                return false;
            }
            Product prodObj = matches.get(0);
            prodObj.setproductName(updatedName);
            actionProduct.save(prodObj);
            return true;
        } catch(Exception e){
            return false;
        }
    }

    @PatchMapping("/updateunitcount")
    public Boolean updateUnitCount(@RequestParam("productId") int productId, @RequestParam("unitCount") int unitCount){
        try
        {
            List<Product> matches = actionProduct.findByProductId(productId);
            if(matches.size() == 0){
                return false;
            }
            Product prodObj = matches.get(0);
            prodObj.setUnitCount(unitCount);
            actionProduct.save(prodObj);
            return true;
        } catch(Exception e){
            return false;
        }
    }

    /*PRODUCT RELATED MAPPINGS - MOVE TO DIFFERENT FILE*/
}
