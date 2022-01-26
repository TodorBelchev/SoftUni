package IteratorsAndComparators.EqualityLogic;

import java.util.Comparator;

public class LengthNameComparator implements Comparator<Person> {
    @Override
    public int compare(Person o1, Person o2) {
        int result =  Integer.compare(o1.getName().length(), o2.getName().length());
        if (result == 0) {
            result = o1.getName().compareTo(o2.getName());
        }
        return result;
    }
}
