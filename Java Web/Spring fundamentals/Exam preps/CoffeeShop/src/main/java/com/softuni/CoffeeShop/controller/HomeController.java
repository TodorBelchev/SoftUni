package com.softuni.CoffeeShop.controller;

import com.softuni.CoffeeShop.model.entity.UserEntity;
import com.softuni.CoffeeShop.model.view.OrderViewModel;
import com.softuni.CoffeeShop.service.OrderService;
import com.softuni.CoffeeShop.service.UserService;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.stream.Collectors;


@Controller
public class HomeController {

    private final OrderService orderService;
    private final UserService userService;

    public HomeController(OrderService orderService, UserService userService) {
        this.orderService = orderService;
        this.userService = userService;
    }

    @GetMapping("/")
    public String home(Model model) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();

        if (currentPrincipalName.equals("anonymousUser")) {
            return "index";
        }
        List<OrderViewModel> orders = orderService.findAllOrdersOrderByPriceDesc();

        model.addAttribute("orders", orders);
        model.addAttribute("totalTime", orders.stream()
                .map(orderViewModel -> orderViewModel.getCategory().getNeededTime())
                .reduce(Integer::sum)
                .orElse(0));
        List<UserEntity> all = userService.findAll()
                .stream()
                .sorted((a, b) -> Integer.compare(b.getOrders().size(), a.getOrders().size()))
                .collect(Collectors.toList());
        model.addAttribute("users", all);

        return "home";
    }
}
