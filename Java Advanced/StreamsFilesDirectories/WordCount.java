package StreamsFilesDirectories;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public class WordCount {
    public static void main(String[] args) {
        String pathSrc = "C:\\Users\\Gaming Beast\\Desktop\\projects\\Java\\JavaAdvandedUpr\\04. Java-Advanced-Files-and-Streams-Exercises-Resources\\words.txt";
        String textPathSrc = "C:\\Users\\Gaming Beast\\Desktop\\projects\\Java\\JavaAdvandedUpr\\04. Java-Advanced-Files-and-Streams-Exercises-Resources\\text.txt";
        LinkedHashMap<String, Integer> wordsCount = new LinkedHashMap<>();

        try {
            List<String> wordsLines = Files.readAllLines(Path.of(pathSrc));
            List<String> textLines = Files.readAllLines(Path.of(textPathSrc));
            PrintWriter pr = new PrintWriter(new FileOutputStream("output.txt"));
            for (String line : wordsLines) {
                String[] words = line.split("\\s+");
                for (String word : words) {
                    wordsCount.putIfAbsent(word, 0);
                }
            }

            for (String line : textLines) {
                String[] words = line.split("\\s+");
                for (String word : words) {
                    if (wordsCount.containsKey(word)) {
                        wordsCount.put(word, wordsCount.get(word) + 1);
                    }
                }
            }
            wordsCount.entrySet().stream()
                    .sorted(Map.Entry.comparingByValue(Comparator.reverseOrder()))
                    .forEach(x -> pr.printf("%s - %d%n", x.getKey(), x.getValue()));
            pr.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
