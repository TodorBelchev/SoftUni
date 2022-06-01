package com.softuni.CoffeeShop.controller;

import com.softuni.CoffeeShop.model.binding.OrderBindingModel;
import com.softuni.CoffeeShop.model.service.OrderServiceModel;
import com.softuni.CoffeeShop.service.OrderService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;

@Controller
@RequestMapping("/orders")
public class OrderController {

    private final OrderService orderService;
    private final ModelMapper modelMapper;

    public OrderController(OrderService orderService, ModelMapper modelMapper) {
        this.orderService = orderService;
        this.modelMapper = modelMapper;
    }

    @GetMapping("/add")
    public String getAdd() {
        return "order-add";
    }

    @PostMapping("/add")
    public String postAdd(@Valid OrderBindingModel orderBindingModel,
                          BindingResult bindingResult,
                          RedirectAttributes redirectAttributes) {

        if (bindingResult.hasErrors()) {
            redirectAttributes.addFlashAttribute("orderBindingModel", orderBindingModel);
            redirectAttributes.addFlashAttribute("org.springframework.validation.BindingResult.orderBindingModel", bindingResult);

            return "redirect:add";
        }

        orderService.addOrder(modelMapper.map(orderBindingModel, OrderServiceModel.class));

        return "redirect:/";
    }

    @GetMapping("/ready/{id}")
    public String getReady(@PathVariable Long id) {
        orderService.readyOrder(id);
        return "redirect:/";
    }

    @ModelAttribute
    public OrderBindingModel orderBindingModel() {
        return new OrderBindingModel();
    }
}
