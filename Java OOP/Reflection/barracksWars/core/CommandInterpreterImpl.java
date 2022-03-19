package reflection.barracksWars.core;

import reflection.barracksWars.interfaces.CommandInterpreter;
import reflection.barracksWars.interfaces.Executable;
import reflection.barracksWars.interfaces.Repository;
import reflection.barracksWars.interfaces.UnitFactory;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;

public class CommandInterpreterImpl implements CommandInterpreter {

    private static final String COMMAND_CLASS_NAME = "reflection.barracksWars.core.commands.";

    private Repository repository;
    private UnitFactory unitFactory;

    public CommandInterpreterImpl(Repository repository, UnitFactory unitFactory) {
        this.repository = repository;
        this.unitFactory = unitFactory;
    }

    @Override
    public Executable interpretCommand(String[] data, String commandName) throws ClassNotFoundException, IllegalAccessException, InvocationTargetException, InstantiationException {
        final String className = COMMAND_CLASS_NAME + Character.toUpperCase(commandName.charAt(0)) + commandName.substring(1);

        Class commandClass = Class.forName(className);
        Constructor<?> commandCTOR = commandClass.getDeclaredConstructors()[0];
        commandCTOR.setAccessible(true);
        Executable command = (Executable) commandCTOR.newInstance(new Object[]{data});

        Field[] executableFields = command.getClass().getDeclaredFields();
        Field[] thisFields = this.getClass().getDeclaredFields();
        for (Field executableField : executableFields) {
            if(executableField.isAnnotationPresent(Inject.class)){
                for (Field thisField : thisFields) {
                    if(executableField.getType().equals(thisField.getType())){
                        executableField.setAccessible(true);
                        executableField.set(command, thisField.get(this));
                    }
                }
            }
        }

        return command;
    }
}
