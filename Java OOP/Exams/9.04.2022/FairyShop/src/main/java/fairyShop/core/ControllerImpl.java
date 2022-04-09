package fairyShop.core;

import fairyShop.models.*;
import fairyShop.repositories.HelperRepository;
import fairyShop.repositories.PresentRepository;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

import static fairyShop.common.ConstantMessages.*;
import static fairyShop.common.ExceptionMessages.*;

public class ControllerImpl implements Controller {
    private HelperRepository helperRepository;
    private PresentRepository presentRepository;
    private int craftedPresents;

    public ControllerImpl() {
        this.helperRepository = new HelperRepository();
        this.presentRepository = new PresentRepository();
    }

    @Override
    public String addHelper(String type, String helperName) {
        Helper helper = null;
        switch (type) {
            case "Sleepy":
                helper = new Sleepy(helperName);
                break;
            case "Happy":
                helper = new Happy(helperName);
                break;
            default:
                throw new IllegalArgumentException(HELPER_TYPE_DOESNT_EXIST);
        }

        helperRepository.add(helper);
        return String.format(ADDED_HELPER, type, helperName);
    }

    @Override
    public String addInstrumentToHelper(String helperName, int power) {
        Instrument instrument = new InstrumentImpl(power);
        Helper helper = helperRepository.findByName(helperName);
        if (helper == null) {
            throw new IllegalArgumentException(HELPER_DOESNT_EXIST);
        }

        helper.addInstrument(instrument);
        return String.format(SUCCESSFULLY_ADDED_INSTRUMENT_TO_HELPER, power, helperName);
    }

    @Override
    public String addPresent(String presentName, int energyRequired) {
        Present present = new PresentImpl(presentName, energyRequired);
        presentRepository.add(present);
        return String.format(SUCCESSFULLY_ADDED_PRESENT, presentName);
    }

    @Override
    public String craftPresent(String presentName) {
        int brokenInstruments = 0;
        List<Helper> helpers = helperRepository.getModels().stream()
                .filter(e -> e.getEnergy() > 50)
                .collect(Collectors.toList());

        if (helpers.size() == 0) {
            throw new IllegalArgumentException(NO_HELPER_READY);
        }

        Present present = presentRepository.findByName(presentName);
        Shop shop = new ShopImpl();
        for (Helper helper : helpers) {
            shop.craft(present, helper);
            for (Instrument instrument: helper.getInstruments()) {
                if (instrument.isBroken()) {
                    brokenInstruments++;
                }
            }

            if (present.isDone()) {
                craftedPresents++;
                break;
            }
        }

        StringBuilder sb = new StringBuilder();
        sb.append(String.format(PRESENT_DONE, presentName, present.isDone() ? "done" : "not done"));
        sb.append(String.format(COUNT_BROKEN_INSTRUMENTS, brokenInstruments));

        return sb.toString().trim();
    }

    @Override
    public String report() {
        StringBuilder sb = new StringBuilder();
        sb.append(String.format("%d presents are done!%n", craftedPresents));
        sb.append("Helpers info:").append(System.lineSeparator());
        helperRepository.getModels().forEach(h -> {
            sb.append(String.format("Name: %s%n", h.getName()));
            sb.append(String.format("Energy: %d%n", h.getEnergy()));
            sb.append(String.format("Instruments: %d not broken left%n", h.getInstruments().stream().filter(i -> !i.isBroken()).count()));
        });

        return sb.toString().trim();
    }
}
