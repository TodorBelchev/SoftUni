package bakery;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Bakery {
    private List<Employee> employees;
    private String name;
    private int capacity;

    public Bakery(String name, int capacity) {
        this.name = name;
        this.capacity = capacity;
        this.employees = new ArrayList<>();
    }

    public void add(Employee employee) {
        if (this.employees.size() < this.capacity) {
            this.employees.add(employee);
        }
    }

    public boolean remove(String name) {
        int index = -1;

        for (int i = 0; i < this.employees.size(); i++) {
            Employee curr = this.employees.get(i);
            if (curr.getName().equals(name)) {
                index = i;
                break;
            }
        }

        if (index != -1) {
            this.employees.remove(index);
        }

        return index != -1;
    }

    public Employee getOldestEmployee() {
        List<Employee> sorted = this.employees.stream()
                .sorted((e1, e2) -> Integer.compare(e2.getAge(), e1.getAge()))
                .collect(Collectors.toList());
        return sorted.get(0);
    }

    public Employee getEmployee(String name) {
        Employee result = null;

        for (int i = 0; i < this.employees.size(); i++) {
            Employee curr = this.employees.get(i);
            if (curr.getName().equals(name)) {
                result = curr;
                break;
            }
        }

        return result;
    }

    public int getCount() {
        return this.employees.size();
    }

    public String report() {
        StringBuilder sb = new StringBuilder();
        sb.append(String.format("Employees working at Bakery %s:%n", this.name));

        for (Employee employee : this.employees) {
            sb.append(employee).append(System.lineSeparator());
        }

        return sb.toString().trim();
    }
}
