package StreamsFilesDirectories;

import java.io.*;

public class LineNumbers {
    public static void main(String[] args) {
        String pathSrc = "C:\\Users\\Gaming Beast\\Desktop\\projects\\Java\\JavaAdvandedUpr\\04. Java-Advanced-Files-and-Streams-Exercises-Resources\\inputLineNumbers.txt";
        try {
            BufferedReader bf = new BufferedReader(new FileReader(pathSrc));
            PrintWriter pr = new PrintWriter(new FileOutputStream("output.txt"));
            String line = bf.readLine();
            int count = 1;
            while (line != null) {
                pr.println(count + ". " + line);

                count++;
                line = bf.readLine();
            }
            pr.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
