package IteratorsAndComparators.StrategyPattern;

import java.util.Comparator;

public class LengthNameComparator implements Comparator<Person> {
    @Override
    public int compare(Person o1, Person o2) {
        int result =  Integer.compare(o1.getName().length(), o2.getName().length());
        if (result == 0) {
            String firstPersonLetter = o1.getName().substring(0,1).toLowerCase();
            String secondPersonLetter = o2.getName().substring(0,1).toLowerCase();
            result = firstPersonLetter.compareTo(secondPersonLetter);
        }
        return result;
    }
}
