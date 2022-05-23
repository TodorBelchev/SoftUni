package com.softuni.Mobilelele.service.impl;

import com.softuni.Mobilelele.model.entity.Brand;
import com.softuni.Mobilelele.model.entity.Model;
import com.softuni.Mobilelele.model.enums.CategoryEnum;
import com.softuni.Mobilelele.repository.BrandRepository;
import com.softuni.Mobilelele.repository.ModelRepository;
import com.softuni.Mobilelele.service.ModelService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ModelServiceImpl implements ModelService {

    private final ModelRepository modelRepository;
    private final BrandRepository brandRepository;

    public ModelServiceImpl(ModelRepository modelRepository, BrandRepository brandRepository) {
        this.modelRepository = modelRepository;
        this.brandRepository = brandRepository;
    }

    @Override
    public Optional<Model> findByName(String name) {
        return modelRepository.findByName(name);
    }

    @Override
    public void initModels() {
        if (modelRepository.count() != 0) {
            return;
        }

        Brand volkswagen = brandRepository.findByName("VW");
        Brand mercedes = brandRepository.findByName("Mercedes");
        Brand toyota = brandRepository.findByName("Toyota");
        Brand ford = brandRepository.findByName("Ford");

        Model focus = createModel("Focus",
                ford,
                CategoryEnum.Car,
                "https://dizzyriders.bg/uploads/avtomobili/2021_10/ford-focus-st-7.jpg",
                1999,
                null);

        Model sierra = createModel("Sierra",
                ford,
                CategoryEnum.Car,
                "https://i0.wp.com/www.motorwebargentina.com/wp-content/uploads/2021/04/Ford-Sierra-Cosworth-1.jpg?fit=1024%2C717&ssl=1",
                1982,
                1993);

        Model golf = createModel("Golf",
                volkswagen,
                CategoryEnum.Car,
                "https://images.ams.bg/images/galleries/161282/oshte-za-vw-golf-gti-tcr-2018-s-290-k-s-1526029911_big.jpg",
                1974,
                null);

        Model a_class = createModel("A class",
                mercedes,
                CategoryEnum.Car,
                "https://www.auto-data.net/images/f29/Mercedes-Benz-A-class-Sedan-V177.jpg",
                1997,
                null);

        Model avensis = createModel("Avensis",
                toyota,
                CategoryEnum.Car,
                "https://www.auto-data.net/images/f18/file8882006.jpg",
                1997,
                2018);

        modelRepository.saveAll(List.of(focus, sierra, golf, a_class, avensis));
    }

    private Model createModel(String name, Brand brand, CategoryEnum category, String imageUrl, int startYear, Integer endYear) {
        Model model = new Model();
        model.setName(name);
        model.setBrand(brand);
        model.setCategory(category);
        model.setImageUrl(imageUrl);
        model.setStartYear(startYear);
        if (endYear != null) {
            model.setEndYear(endYear);
        }

        return model;
    }
}
