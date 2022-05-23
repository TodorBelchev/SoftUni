package com.softuni.Mobilelele.init;

import com.softuni.Mobilelele.service.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseInit implements CommandLineRunner {

    private final UserRoleService userRoleService;
    private final UserService userService;
    private final BrandService brandService;
    private final ModelService modelService;
    private final OfferService offerService;

    public DatabaseInit(UserRoleService userRoleService, UserService userService, BrandService brandService, ModelService modelService, OfferService offerService) {
        this.userRoleService = userRoleService;
        this.userService = userService;
        this.brandService = brandService;
        this.modelService = modelService;
        this.offerService = offerService;
    }

    @Override
    public void run(String... args) throws Exception {
        userRoleService.initRoles();
        userService.initUsers();
        brandService.initBrands();
        modelService.initModels();
        offerService.initOffers();
    }
}
