package university;

import java.util.ArrayList;
import java.util.List;

public class University {
    public int capacity;
    public List<Student> students;

    public University(int capacity) {
        this.capacity = capacity;
        this.students = new ArrayList<>();
    }

    public int getCapacity() {
        return capacity;
    }

    public List<Student> getStudents() {
        return students;
    }

    public int getStudentCount() {
        return this.students.size();
    }

    public String registerStudent(Student student) {
        StringBuilder sb = new StringBuilder();
        if (this.capacity > this.students.size() && !this.students.contains(student)) {
            this.students.add(student);
            sb.append(String.format("Added student %s %s", student.getFirstName(), student.getLastName()));
        } else if (this.capacity > this.students.size() && this.students.contains(student)) {
            sb.append("Student is already in the university");
        } else {
            sb.append("No seats in the university");
        }
        return sb.toString().trim();
    }

    public String dismissStudent(Student student) {
        int index = this.students.indexOf(student);
        String output;
        if (index == -1) {
            output = "Student not found";
        } else {
            this.students.remove(index);
            output = String.format("Removed student %s %s", student.getFirstName(), student.getLastName());
        }
        return output;
    }

    public Student getStudent(String firstName, String lastName) {
        Student result = null;
        for (int i = 0; i < this.students.size(); i++) {
            Student curr = this.students.get(i);
            if (curr.getFirstName().equals(firstName) && curr.getLastName().equals(lastName)) {
                result = curr;
                break;
            }
        }
        return result;
    }

    public String getStatistics() {
        StringBuilder sb = new StringBuilder();
        for (Student student : this.students) {
            sb.append(String.format("==Student: First Name = %s, Last Name = %s, Best Subject = %s%n",
                    student.getFirstName(),
                    student.getLastName(),
                    student.getBestSubject()));
        }

        return sb.toString().trim();
    }
}
