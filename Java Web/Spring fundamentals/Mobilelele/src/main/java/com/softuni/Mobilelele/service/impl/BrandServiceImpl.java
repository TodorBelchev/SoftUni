package com.softuni.Mobilelele.service.impl;

import com.softuni.Mobilelele.model.entity.Brand;
import com.softuni.Mobilelele.repository.BrandRepository;
import com.softuni.Mobilelele.service.BrandService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BrandServiceImpl implements BrandService {

    private final BrandRepository brandRepository;

    public BrandServiceImpl(BrandRepository brandRepository) {
        this.brandRepository = brandRepository;
    }

    @Override
    public void initBrands() {
        if (brandRepository.count() != 0) {
            return;
        }

        Brand brand1 = new Brand("VW");
        Brand brand2 = new Brand("Toyota");
        Brand brand3 = new Brand("Ford");
        Brand brand4 = new Brand("Mercedes");

        brandRepository.saveAll(List.of(brand1, brand2, brand3, brand4));
    }

    @Override
    public Brand findByName(String name) {
        return brandRepository.findByName(name);
    }
}
