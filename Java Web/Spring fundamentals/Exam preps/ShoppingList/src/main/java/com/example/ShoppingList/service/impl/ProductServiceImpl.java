package com.example.ShoppingList.service.impl;

import com.example.ShoppingList.model.entity.ProductEntity;
import com.example.ShoppingList.model.service.ProductServiceModel;
import com.example.ShoppingList.repository.ProductRepo;
import com.example.ShoppingList.service.CategoryService;
import com.example.ShoppingList.service.ProductService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepo productRepo;
    private final ModelMapper modelMapper;
    private final CategoryService categoryService;

    public ProductServiceImpl(ProductRepo productRepo, ModelMapper modelMapper, CategoryService categoryService) {
        this.productRepo = productRepo;
        this.modelMapper = modelMapper;
        this.categoryService = categoryService;
    }

    @Override
    public ProductServiceModel create(ProductServiceModel productServiceModel) {
        ProductEntity product = modelMapper.map(productServiceModel, ProductEntity.class);

        System.out.println(productServiceModel.getCategory());

        product.setCategory(categoryService.findByCategoryNameEnum(productServiceModel.getCategory()).get());

        productRepo.save(product);
        return modelMapper.map(product, ProductServiceModel.class);
    }

    @Override
    public List<ProductEntity> findAll() {
        return productRepo.findAll();
    }

    @Override
    public void buy(Long id) {
        productRepo.deleteById(id);
    }

    @Override
    public void buyAll() {
        productRepo.deleteAll();
    }
}
