package com.softuni.Mobilelele.service.impl;

import com.softuni.Mobilelele.model.entity.Model;
import com.softuni.Mobilelele.model.entity.Offer;
import com.softuni.Mobilelele.model.entity.User;
import com.softuni.Mobilelele.model.enums.EngineEnum;
import com.softuni.Mobilelele.model.enums.TransmissionEnum;
import com.softuni.Mobilelele.repository.ModelRepository;
import com.softuni.Mobilelele.repository.OfferRepository;
import com.softuni.Mobilelele.repository.UserRepository;
import com.softuni.Mobilelele.service.OfferService;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class OfferServiceImpl implements OfferService {

    private final OfferRepository offerRepository;
    private final ModelRepository modelRepository;
    private final UserRepository userRepository;

    public OfferServiceImpl(OfferRepository offerRepository, ModelRepository modelRepository, UserRepository userRepository) {
        this.offerRepository = offerRepository;
        this.modelRepository = modelRepository;
        this.userRepository = userRepository;
    }

    @Override
    public void initOffers() {
        if (offerRepository.count() != 0) {
            return;
        }

        Model golf = modelRepository.findByName("Golf").get();
        Model focus = modelRepository.findByName("Focus").get();
        User seller = userRepository.findByUsername("admin").get();
        User seller2 = userRepository.findByUsername("user").get();

        Offer offer = createOffer(seller, golf, EngineEnum.GASOLINE,
                "https://cdn3.focus.bg/autodata/i/volkswagen/golf/golf-v/large/923677578ad776d4434948b5216f73e5.jpg",
                "My grandmother drive it only weekends!",
                123456,
                BigDecimal.valueOf(5999),
                TransmissionEnum.Manual,
                2006);

        Offer offer2 = createOffer(seller2, focus, EngineEnum.DIESEL,
                "https://mobistatic1.focus.bg/mobile/photosmob/481/1/big/11603828667479481_JY.jpg",
                "Top condition, get in and drive it!",
                111222,
                BigDecimal.valueOf(5499),
                TransmissionEnum.Manual,
                2004);


        offerRepository.saveAll(List.of(offer, offer2));
    }

    private Offer createOffer(
            User seller,
            Model model,
            EngineEnum engine,
            String imageUrl,
            String desc,
            int mileage,
            BigDecimal price,
            TransmissionEnum transmission,
            int year
    ) {
        Offer offer = new Offer();
        offer.setSeller(seller);
        offer.setModel(model);
        offer.setEngine(engine);
        offer.setImageUrl(imageUrl);
        offer.setDescription(desc);
        offer.setMileage(mileage);
        offer.setPrice(price);
        offer.setTransmission(transmission);
        offer.setYear(year);
        return offer;
    }
}
