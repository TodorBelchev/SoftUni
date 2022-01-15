package StreamsFilesDirectories;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class CountCharacterTypes {
    public static void main(String[] args) {
        String pathSrc = "C:\\Users\\Gaming Beast\\Desktop\\projects\\Java\\JavaAdvandedUpr\\04. Java-Advanced-Files-and-Streams-Exercises-Resources\\input.txt";
        int vowels = 0;
        int consonants = 0;
        int punctuations = 0;

        try {
            BufferedReader bf = new BufferedReader(new FileReader(pathSrc));
            String line = bf.readLine();
            while (line != null) {
                for (int i = 0; i < line.length(); i++) {
                    char curr = line.charAt(i);
                    if (curr == ' ') {
                        continue;
                    }
                    if (curr == 'a' || curr == 'e' || curr == 'i' || curr == 'o' || curr == 'u') {
                        vowels++;
                    } else if (curr == '!' || curr == ',' || curr == '.' || curr == '?') {
                        punctuations++;
                    } else {
                        consonants++;
                    }
                }
                line = bf.readLine();
            }
            System.out.println("Vowels: " + vowels);
            System.out.println("Consonants: " + consonants);
            System.out.println("Punctuation: " + punctuations);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
