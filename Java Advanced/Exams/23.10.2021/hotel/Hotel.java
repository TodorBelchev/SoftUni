package exams.Exam23Oct2021.hotel;

import java.util.ArrayList;
import java.util.List;

public class Hotel {
    private String name;
    private int capacity;
    private List<Person> roster;

    public Hotel(String name, int capacity) {
        this.name = name;
        this.capacity = capacity;
        this.roster = new ArrayList<>();
    }

    public void add(Person person) {
        if (roster.size() < this.capacity) {
            this.roster.add(person);
        }
    }

    public boolean remove(String name) {
        int index = -1;
        for (int i = 0; i < this.roster.size(); i++) {
            Person curr = this.roster.get(i);
            if (curr.getName().equals(name)) {
                index = i;
                break;
            }
        }
        if (index != -1) {
            this.roster.remove(index);
        }

        return index != -1;
    }

    public Person getPerson(String name, String hometown) {
        Person result = null;
        for (int i = 0; i < this.roster.size(); i++) {
            Person curr = this.roster.get(i);
            if (curr.getName().equals(name) && curr.getHometown().equals(hometown)) {
                result = curr;
            }
        }
        return result;
    }

    public int getCount() {
        return this.roster.size();
    }

    public String getStatistics() {
        StringBuilder sb = new StringBuilder();
        sb.append("The people in the hotel ").append(this.name).append(" are:").append(System.lineSeparator());
        for (Person person: this.roster) {
            sb.append(person).append(System.lineSeparator());
        }
        return sb.toString().trim();
    }
}
