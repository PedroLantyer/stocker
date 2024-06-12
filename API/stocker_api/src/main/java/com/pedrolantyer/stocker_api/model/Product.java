package com.pedrolantyer.stocker_api.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "product")
public class Product {
    //ATTRIBUTES
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int productId; 
    private String productName;
    private int unitCount;
    private int proprietaryId; //SERVES AS FOREIGN KEY. SAME VALUE AS userId from table user
    
    //CONSTRUCTOR
    public Product(){}
    public Product(String productNameStr, int unitCountNum, int proprietaryIdNum){
        productName = productNameStr;
        unitCount = unitCountNum;
        proprietaryId = proprietaryIdNum;
    }

    //METHODS
    public int getProductId() {
        return productId;
    }
    public void setProductId(int productId) {
        this.productId = productId;
    }

    public String getproductName() {
        return productName;
    }
    public void setproductName(String productName) {
        this.productName = productName;
    }

    public int getUnitCount() {
        return unitCount;
    }
    public void setUnitCount(int unitCount) {
        this.unitCount = unitCount;
    }

    public int getProprietaryId() {
        return proprietaryId;
    }
    public void setProprietaryId(int proprietaryId) {
        this.proprietaryId = proprietaryId;
    }
    
}
