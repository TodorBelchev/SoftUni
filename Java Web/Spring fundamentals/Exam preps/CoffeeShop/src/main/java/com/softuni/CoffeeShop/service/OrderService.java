package com.softuni.CoffeeShop.service;

import com.softuni.CoffeeShop.model.service.OrderServiceModel;
import com.softuni.CoffeeShop.model.view.OrderViewModel;

import java.util.Collection;
import java.util.List;

public interface OrderService {
    OrderServiceModel addOrder(OrderServiceModel map);

    List<OrderViewModel> findAllOrdersOrderByPriceDesc();

    void readyOrder(Long id);
}
