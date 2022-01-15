package StreamsFilesDirectories;

import java.io.*;

public class WriteEveryThirdLine {
    public static void main(String[] args) {
        String pathSrc = "C:\\Users\\Gaming Beast\\Desktop\\projects\\Java\\JavaAdvandedUpr\\04. Java-Advanced-Files-and-Streams-Lab-Resources\\input.txt";
        try {
            int count = 1;
            BufferedReader br = new BufferedReader(new FileReader(pathSrc));
            PrintWriter pr = new PrintWriter(new FileOutputStream("output.txt"));
            String line = br.readLine();
            while (line != null) {
                if (count % 3 == 0) {
                    pr.println(line);
                }
                count++;
                line = br.readLine();
            }
            pr.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
