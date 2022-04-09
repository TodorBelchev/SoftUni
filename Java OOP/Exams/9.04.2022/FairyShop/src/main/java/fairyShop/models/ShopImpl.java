package fairyShop.models;

import java.util.Optional;

public class ShopImpl implements Shop {
    @Override
    public void craft(Present present, Helper helper) {
        Optional<Instrument> instrument = helper.getInstruments().stream().filter(i -> !i.isBroken()).findFirst();
        while (helper.canWork() && instrument.isPresent()) {
            helper.work();
            instrument.get().use();
            present.getCrafted();

            if (present.isDone()) {
                break;
            }

            if (instrument.get().isBroken()) {
                instrument = helper.getInstruments().stream().filter(i -> !i.isBroken()).findFirst();
            }
        }
    }
}
