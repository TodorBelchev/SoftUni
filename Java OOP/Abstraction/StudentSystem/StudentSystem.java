package abstraction.student_system;

import java.util.HashMap;
import java.util.Map;

public class StudentSystem {
    private Map<String, Student> repo;

    public StudentSystem() {
        this.repo = new HashMap<>();
    }

    public Map<String, Student> getRepo() {
        return this.repo;
    }

    public void addStudent(Student student) {
        this.repo.put(student.getName(), student);
    }

    public void parseCommand(String[] args) {
        String command = args[0];
        String studentName = args[1];

        switch (command) {
            case "Create":
                int age = Integer.parseInt(args[2]);
                double grade = Double.parseDouble(args[3]);
                if (!this.checkForStudent(studentName)) {
                    Student student = new Student(studentName, age, grade);
                    this.addStudent(student);
                }
                break;
            case "Show":
                if (this.checkForStudent(studentName)) {
                    System.out.println(this.show(studentName));
                }
                break;
        }
    }

    public String show(String name) {
        Student student = this.repo.get(name);
        String commentary = "Very nice person";

        if (student.getGrade() >= 5.00) {
            commentary = "Excellent student";
        } else if (student.getGrade() < 5.00 && student.getGrade() >= 3.50) {
            commentary = "Average student";
        }

        return String.format("%s is %d years old. %s.", student.getName(), student.getAge(), commentary);
    }

    public boolean checkForStudent(String name) {
        return this.repo.get(name) != null;
    }
}
