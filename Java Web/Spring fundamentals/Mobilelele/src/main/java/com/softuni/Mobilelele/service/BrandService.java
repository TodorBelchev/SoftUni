package com.softuni.Mobilelele.service;

import com.softuni.Mobilelele.model.entity.Brand;
import com.softuni.Mobilelele.model.view.BrandViewModel;

import java.util.List;

public interface BrandService {
    void initBrands();

    Brand findByName(String name);

    List<BrandViewModel> getBrands();
}
