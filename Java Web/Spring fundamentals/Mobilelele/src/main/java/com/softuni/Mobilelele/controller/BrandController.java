package com.softuni.Mobilelele.controller;

import com.softuni.Mobilelele.model.view.BrandViewModel;
import com.softuni.Mobilelele.service.BrandService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/brands")
public class BrandController {

    private final BrandService brandService;

    public BrandController(BrandService brandService) {
        this.brandService = brandService;
    }

    @GetMapping("/all")
    public String getBrand(Model model) {
        List<BrandViewModel> brands = this.brandService.getBrands();
        model.addAttribute("brands", brands);
        return "brands";
    }
}
