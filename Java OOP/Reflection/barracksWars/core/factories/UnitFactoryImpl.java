package reflection.barracksWars.core.factories;

import reflection.barracksWars.interfaces.Unit;
import reflection.barracksWars.interfaces.UnitFactory;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;

public class UnitFactoryImpl implements UnitFactory {

    private static final String UNITS_PACKAGE_NAME =
            "reflection.barracksWars.models.units.";

    @Override
    public Unit createUnit(String unitType) throws ClassNotFoundException, InvocationTargetException, InstantiationException, IllegalAccessException {
        Class cl = Class.forName(UNITS_PACKAGE_NAME + unitType);

        Constructor<?> constructor = cl.getConstructors()[0];
        constructor.setAccessible(true);
        Unit unit = (Unit) constructor.newInstance();

        return unit;
    }
}
