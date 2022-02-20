package abstraction.student_system;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class StudentSystem {
    private Map<String, Student> repo;

    public StudentSystem() {
        this.repo = new HashMap<>();
    }

    public Map<String, Student> getRepo() {
        return Collections.unmodifiableMap(this.repo);
    }

    public void addStudent(Student student) {
        this.repo.put(student.getName(), student);
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
