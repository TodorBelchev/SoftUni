package reflection.task_01;

import reflection.Reflection;

import java.lang.reflect.InvocationTargetException;

public class Main {
    public static void main(String[] args) throws NoSuchMethodException, InvocationTargetException, InstantiationException, IllegalAccessException {
        Class reflection = Reflection.class;
        System.out.println("class " + reflection.getSimpleName());
        Class superClass = reflection.getSuperclass();
        System.out.println(superClass);
        Class[] interfaces = reflection.getInterfaces();
        for (Class i: interfaces ) {
            System.out.println(i);
        }
        Object reflectionObject = reflection.getDeclaredConstructor().newInstance();
        System.out.println(reflectionObject);
    }
}
