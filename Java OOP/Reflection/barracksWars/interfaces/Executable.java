package reflection.barracksWars.interfaces;

import jdk.jshell.spi.ExecutionControl;

import java.lang.reflect.InvocationTargetException;

public interface Executable {

	String execute() throws ExecutionControl.NotImplementedException, ClassNotFoundException, InvocationTargetException, InstantiationException, IllegalAccessException;

}
