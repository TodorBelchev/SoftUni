package com.softuni.Mobilelele.service;

import com.softuni.Mobilelele.model.entity.Brand;

public interface BrandService {
    void initBrands();

    Brand findByName(String name);
}
