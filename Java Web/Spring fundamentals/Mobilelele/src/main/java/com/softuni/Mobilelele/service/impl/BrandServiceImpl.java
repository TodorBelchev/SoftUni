package com.softuni.Mobilelele.service.impl;

import com.softuni.Mobilelele.model.entity.Brand;
import com.softuni.Mobilelele.model.view.BrandViewModel;
import com.softuni.Mobilelele.model.view.ModelViewModel;
import com.softuni.Mobilelele.repository.BrandRepository;
import com.softuni.Mobilelele.service.BrandService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BrandServiceImpl implements BrandService {

    private final BrandRepository brandRepository;
    private final ModelMapper modelMapper;

    public BrandServiceImpl(BrandRepository brandRepository, ModelMapper modelMapper) {
        this.brandRepository = brandRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public Brand findByName(String name) {
        return brandRepository.findByName(name);
    }

    @Override
    public List<BrandViewModel> getBrands() {
        return brandRepository.findAll()
                .stream()
                .map(brand -> {
                    BrandViewModel brandViewModel = new BrandViewModel();
                    brandViewModel.setName(brand.getName());

                    brandViewModel.setModels(brand.getModels()
                            .stream()
                            .map(x -> modelMapper.map(x, ModelViewModel.class))
                            .collect(Collectors.toList()));
                    return brandViewModel;
                })
                .collect(Collectors.toList());
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
}
