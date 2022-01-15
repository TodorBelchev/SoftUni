package StreamsFilesDirectories;

import java.io.*;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

public class CreateZipArchive {
    public static void main(String[] args) {
        String [] paths = {
                "C:\\Users\\Gaming Beast\\Desktop\\projects\\Java\\JavaAdvandedUpr\\04. Java-Advanced-Files-and-Streams-Exercises-Resources\\inputOne.txt",
                "C:\\Users\\Gaming Beast\\Desktop\\projects\\Java\\JavaAdvandedUpr\\04. Java-Advanced-Files-and-Streams-Exercises-Resources\\inputTwo.txt",
                "C:\\Users\\Gaming Beast\\Desktop\\projects\\Java\\JavaAdvandedUpr\\04. Java-Advanced-Files-and-Streams-Exercises-Resources\\input.txt"
        };

        try {
            ZipOutputStream zio = new ZipOutputStream(new FileOutputStream("archivedText.zip"));

            for (String path :paths) {
                File fileToZip = new File(path);
                FileInputStream fis = new FileInputStream(fileToZip);

                ZipEntry zipEntry = new ZipEntry(fileToZip.getName());

                zio.putNextEntry(zipEntry);
                zio.write(fis.readAllBytes());
            }

            zio.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
