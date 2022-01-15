package StreamsFilesDirectories;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Collections;
import java.util.List;

public class SortLines {
    public static void main(String[] args) {
        String pathSrc = "C:\\Users\\Gaming Beast\\Desktop\\projects\\Java\\JavaAdvandedUpr\\04. Java-Advanced-Files-and-Streams-Lab-Resources\\input.txt";
        try {
            List<String> lines = Files.readAllLines(Path.of(pathSrc));
            Collections.sort(lines);
            PrintWriter pr = new PrintWriter(new FileOutputStream("output.txt"));
            lines.forEach(line -> pr.println(line));
            pr.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
