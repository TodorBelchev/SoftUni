package com.example.ShoppingList.controller;

import com.example.ShoppingList.model.enums.CategoryEnum;
import com.example.ShoppingList.model.view.ProductViewModel;
import com.example.ShoppingList.service.ProductService;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Controller
public class HomeController {

    private final ProductService productService;
    private final ModelMapper modelMapper;

    public HomeController(ProductService productService, ModelMapper modelMapper) {
        this.productService = productService;
        this.modelMapper = modelMapper;
    }

    @GetMapping("/")
    public String getHome(Model model) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();

        if (currentPrincipalName.equals("anonymousUser")) {
            return "index";
        }

        List<ProductViewModel> products = productService.findAll()
                .stream()
                .map(p -> modelMapper.map(p, ProductViewModel.class))
                .collect(Collectors.toList());

        BigDecimal totalPrice = products.stream().map(p -> p.getPrice())
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        model.addAttribute("foods", products.stream()
                .filter(p -> p.getCategory().getName().equals(CategoryEnum.values()[0])).collect(Collectors.toList()));
        model.addAttribute("drinks", products.stream()
                .filter(p -> p.getCategory().getName().equals(CategoryEnum.values()[1])).collect(Collectors.toList()));
        model.addAttribute("households", products.stream()
                .filter(p -> p.getCategory().getName().equals(CategoryEnum.values()[2])).collect(Collectors.toList()));
        model.addAttribute("other", products.stream()
                .filter(p -> p.getCategory().getName().equals(CategoryEnum.values()[3])).collect(Collectors.toList()));
        model.addAttribute("totalPrice", totalPrice);
        return "home";
    }
}
