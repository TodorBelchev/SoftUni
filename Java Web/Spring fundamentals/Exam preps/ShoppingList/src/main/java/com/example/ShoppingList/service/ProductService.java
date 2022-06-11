package com.example.ShoppingList.service;

import com.example.ShoppingList.model.entity.ProductEntity;
import com.example.ShoppingList.model.service.ProductServiceModel;
import com.example.ShoppingList.model.view.ProductViewModel;

import java.util.List;

public interface ProductService {
    ProductServiceModel create(ProductServiceModel map);

    List<ProductEntity> findAll();
}
