package StreamsFilesDirectories;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

public class MergeTwoFiles {
    public static void main(String[] args) {
        String pathSrc = "C:\\Users\\Gaming Beast\\Desktop\\projects\\Java\\JavaAdvandedUpr\\04. Java-Advanced-Files-and-Streams-Exercises-Resources\\inputOne.txt";
        String pathSrcTwo = "C:\\Users\\Gaming Beast\\Desktop\\projects\\Java\\JavaAdvandedUpr\\04. Java-Advanced-Files-and-Streams-Exercises-Resources\\inputTwo.txt";
        try {
            List<String> linesOne = Files.readAllLines(Path.of(pathSrc));
            List<String> linesTwo = Files.readAllLines(Path.of(pathSrcTwo));
            PrintWriter pr = new PrintWriter(new FileOutputStream("output.txt"));
            for (String line : linesOne) {
                pr.println(line);
            }
            for (String line : linesTwo) {
                pr.println(line);
            }
            pr.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
