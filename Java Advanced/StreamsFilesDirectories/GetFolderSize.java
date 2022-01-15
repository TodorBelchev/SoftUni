package StreamsFilesDirectories;

import java.io.File;

public class GetFolderSize {
    public static void main(String[] args) {
        String pathSrc = "C:\\Users\\Gaming Beast\\Desktop\\projects\\Java\\JavaAdvandedUpr\\04. Java-Advanced-Files-and-Streams-Exercises-Resources\\Exercises Resources";

        int size = 0;
        File file = new File(pathSrc);
        if (file.exists()) {
            File[] files = file.listFiles();
            for (File f: files) {
                size += f.length();
            }
        }

        System.out.println("Folder size: " + size);
    }
}
