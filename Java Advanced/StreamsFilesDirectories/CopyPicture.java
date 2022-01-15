package StreamsFilesDirectories;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class CopyPicture {
    public static void main(String[] args) {
        String src = "C:\\Users\\Gaming Beast\\Desktop\\projects\\Java\\JavaAdvandedUpr\\Udemy-React.jpg";

        try {
            FileInputStream fileInput = new FileInputStream(src);
            FileOutputStream fileOutput = new FileOutputStream("C:\\Users\\Gaming Beast\\Desktop\\projects\\Java\\JavaAdvandedUpr\\Udemy-React-copy.jpg");
            fileOutput.write(fileInput.readAllBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}
