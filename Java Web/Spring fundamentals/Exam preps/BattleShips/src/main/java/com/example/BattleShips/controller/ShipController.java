package com.example.BattleShips.controller;

import com.example.BattleShips.model.binding.ShipBindingModel;
import com.example.BattleShips.model.service.ShipServiceModel;
import com.example.BattleShips.service.ShipService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;

@Controller
@RequestMapping("/ships")
public class ShipController {

    private final ShipService shipService;
    private final ModelMapper modelMapper;

    public ShipController(ShipService shipService, ModelMapper modelMapper) {
        this.shipService = shipService;
        this.modelMapper = modelMapper;
    }

    @GetMapping("/add")
    public String getAddShip() {
        return "ship-add";
    }

    @PostMapping("/add")
    public String postAddShip(@Valid ShipBindingModel shipBindingModel,
                              BindingResult bindingResult,
                              RedirectAttributes redirectAttributes) {

        if (bindingResult.hasErrors()) {
            redirectAttributes.addFlashAttribute("shipBindingModel", shipBindingModel);
            redirectAttributes.addFlashAttribute("org.springframework.validation.BindingResult.shipBindingModel", bindingResult);

            return "redirect:add";
        }

        shipService.add(modelMapper.map(shipBindingModel, ShipServiceModel.class));

        return "redirect:/";
    }

    @ModelAttribute
    public ShipBindingModel shipBindingModel() {
        return new ShipBindingModel();
    }
}
