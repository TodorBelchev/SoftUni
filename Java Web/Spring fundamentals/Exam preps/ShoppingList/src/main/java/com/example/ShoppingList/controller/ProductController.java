package com.example.ShoppingList.controller;

import com.example.ShoppingList.model.binding.ProductBindingModel;
import com.example.ShoppingList.model.service.ProductServiceModel;
import com.example.ShoppingList.service.ProductService;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;
    private final ModelMapper modelMapper;

    public ProductController(ProductService productService, ModelMapper modelMapper) {
        this.productService = productService;
        this.modelMapper = modelMapper;
    }

    @GetMapping("/add")
    public String getAddProduct() {
        return "product-add";
    }

    @PostMapping("/add")
    public String getPostProduct(@Valid ProductBindingModel productBindingModel,
                                 BindingResult bindingResult,
                                 RedirectAttributes redirectAttributes) {

        if (bindingResult.hasErrors()) {
            redirectAttributes.addFlashAttribute("productBindingModel", productBindingModel);
            redirectAttributes.addFlashAttribute("org.springframework.validation.BindingResult.productBindingModel", bindingResult);

            return "redirect:add";
        }

        productService.create(modelMapper.map(productBindingModel, ProductServiceModel.class));
        return "redirect:/";
    }

    @ModelAttribute
    public ProductBindingModel productBindingModel() {
        return new ProductBindingModel();
    }
}
