package com.example.BattleShips.controller;

import com.example.BattleShips.model.binding.BattleBindingModel;
import com.example.BattleShips.model.service.ShipServiceModel;
import com.example.BattleShips.model.view.ShipViewModel;
import com.example.BattleShips.service.ShipService;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;


@Controller
public class HomeController {

    private final ShipService shipService;
    private final ModelMapper modelMapper;

    public HomeController(ShipService shipService, ModelMapper modelMapper) {
        this.shipService = shipService;
        this.modelMapper = modelMapper;
    }

    @GetMapping("/")
    public String home(Model model) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();

        if (currentPrincipalName.equals("anonymousUser")) {
            return "index";
        }

        List<ShipViewModel> currentUserShips = shipService.getByUsername(currentPrincipalName);
        List<ShipViewModel> otherShips = shipService.getOther(currentPrincipalName);
        List<ShipViewModel> allShips = Stream.concat(currentUserShips.stream(), otherShips.stream())
                .collect(Collectors.toList());

        model.addAttribute("currentUserShips", currentUserShips);
        model.addAttribute("otherShips", otherShips);
        model.addAttribute("allShips", allShips);

        return "home";
    }

    @PostMapping("/home/battle")
    public String postBattle(@Valid BattleBindingModel battleBindingModel,
                             BindingResult bindingResult,
                             RedirectAttributes redirectAttributes) {

        if (bindingResult.hasErrors()) {
            redirectAttributes.addFlashAttribute("error", battleBindingModel);
            redirectAttributes.addFlashAttribute("org.springframework.validation.BindingResult.battleBindingModel", bindingResult);

            return "redirect:/";
        }

        shipService.attack(battleBindingModel.getAttackerName(), battleBindingModel.getDefenderName());
        return "redirect:/";
    }

    @ModelAttribute
    public BattleBindingModel battleBindingModel() {
        return new BattleBindingModel();
    }
}
