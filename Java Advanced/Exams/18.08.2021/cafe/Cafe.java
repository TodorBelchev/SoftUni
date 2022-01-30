package cafe;

import java.util.ArrayList;
import java.util.List;

public class Cafe {
    private String name;
    private int capacity;
    private List<Employee> employees;

    public Cafe(String name, int capacity) {
        this.name = name;
        this.capacity = capacity;
        this.employees = new ArrayList<>();
    }

    public void addEmployee(Employee employee) {
        if (this.employees.size() < this.capacity) {
            this.employees.add(employee);
        }
    }

    public boolean removeEmployee(String name) {
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
        Employee employee = null;
        for (int i = 0; i < this.employees.size(); i++) {
            Employee curr = this.employees.get(i);
            if (employee == null) {
                employee = curr;
            }

            if (employee.getAge() < curr.getAge()) {
                employee = curr;
            }
        }
        return employee;
    }

    public Employee getEmployee(String name) {
        Employee employee = null;
        for (int i = 0; i < this.employees.size(); i++) {
            Employee curr = this.employees.get(i);
            if (curr.getName().equals(name)) {
                employee = curr;
                break;
            }
        }
        return employee;
    }

    public int getCount() {
        return this.employees.size();
    }

    public String report() {
        StringBuilder sb = new StringBuilder();
        sb.append(String.format("Employees working at Cafe %s:%n", this.name));
        for (int i = 0; i < this.employees.size(); i++) {
            sb.append(this.employees.get(i)).append(System.lineSeparator());
        }
        return sb.toString().trim();
    }
}
