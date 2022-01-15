package StreamsFilesDirectories;

import java.io.*;

public class SerializeCustomObject {
    public static void main(String[] args) {
        String src = "C:\\Users\\Gaming Beast\\Desktop\\projects\\Java\\JavaAdvandedUpr\\course.ser";
        try {
            ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(src));
            Course course = new Course("Java Advanced", 69);
            oos.writeObject(course);

            ObjectInputStream ois = new ObjectInputStream(new FileInputStream(src));
            Course deserializedCourse = (Course) ois.readObject();
            System.out.println(deserializedCourse.getName());
            System.out.println(deserializedCourse.getStudentsCount());
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
