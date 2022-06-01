package com.softuni.CoffeeShop.service.impl;

import com.softuni.CoffeeShop.model.entity.OrderEntity;
import com.softuni.CoffeeShop.model.entity.UserEntity;
import com.softuni.CoffeeShop.model.service.OrderServiceModel;
import com.softuni.CoffeeShop.model.view.OrderViewModel;
import com.softuni.CoffeeShop.repository.OrderRepo;
import com.softuni.CoffeeShop.service.CategoryService;
import com.softuni.CoffeeShop.service.OrderService;
import com.softuni.CoffeeShop.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements OrderService {

    private final OrderRepo orderRepo;
    private final ModelMapper modelMapper;
    private final UserService userService;
    private final CategoryService categoryService;

    public OrderServiceImpl(OrderRepo orderRepo, ModelMapper modelMapper, UserService userService, CategoryService categoryService) {
        this.orderRepo = orderRepo;
        this.modelMapper = modelMapper;
        this.userService = userService;
        this.categoryService = categoryService;
    }

    @Override
    public OrderServiceModel addOrder(OrderServiceModel orderServiceModel) {
        OrderEntity order = modelMapper.map(orderServiceModel, OrderEntity.class);
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            String currentUserName = authentication.getName();
            UserEntity user = userService.findByUsername(currentUserName);
            order.setEmployee(user);
        }

        order.setCategory(categoryService.findByCategoryNameEnum(orderServiceModel.getCategory()).get());

        orderRepo.save(order);
        return modelMapper.map(order, OrderServiceModel.class);
    }

    @Override
    public List<OrderViewModel> findAllOrdersOrderByPriceDesc() {
        return orderRepo.findAllOrdersByOrderByPriceDesc()
                .stream()
                .map(order -> modelMapper.map(order, OrderViewModel.class))
                .collect(Collectors.toList());
    }

    @Override
    public void readyOrder(Long id) {
        orderRepo.deleteById(id);
    }
}
