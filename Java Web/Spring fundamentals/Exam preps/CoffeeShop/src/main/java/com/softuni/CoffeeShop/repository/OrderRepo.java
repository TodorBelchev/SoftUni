package com.softuni.CoffeeShop.repository;

import com.softuni.CoffeeShop.model.entity.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepo extends JpaRepository<OrderEntity, Long> {
    List<OrderEntity> findAllOrdersByOrderByPriceDesc();
}
