package StreamsFilesDirectories;

import java.io.*;
import java.util.ArrayList;

public class SerializeArrayList {
    public static void main(String[] args) {
        String src = "C:\\Users\\Gaming Beast\\Desktop\\projects\\Java\\JavaAdvandedUpr\\list.ser";
        ArrayList<Double> list = new ArrayList<>();
        list.add(2.4);
        list.add(3.2);

        try {
            ObjectOutputStream outputStream = new ObjectOutputStream(new FileOutputStream(src));
            outputStream.writeObject(list);

            ObjectInputStream inputStream = new ObjectInputStream(new FileInputStream(src));

            ArrayList<Double> returnedList = (ArrayList<Double>) inputStream.readObject();
            returnedList.forEach(System.out::println);
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
