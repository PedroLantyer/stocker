package com.pedrolantyer.stocker_api.utility;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer{
    
    //SET CORS PERMISIONS
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/**").allowedOrigins("*").allowedHeaders("*").allowedMethods("GET", "PUT", "POST", "PATCH", "DELETE", "OPTIONS"); 
    }
}

