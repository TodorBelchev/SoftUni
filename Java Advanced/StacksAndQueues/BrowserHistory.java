package StackAndQueues;

import java.util.ArrayDeque;
import java.util.Scanner;

public class BrowserHistory {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String url = scanner.nextLine();
        ArrayDeque <String> urlsStack = new ArrayDeque<>();

        while (!url.equals("Home")){

            if(url.equals("back")){
                if(urlsStack.size()<2){
                    System.out.println("no previous URLs");
                    url = scanner.nextLine();
                    continue;
                } else {
                    urlsStack.pop();
                }
            } else {
                urlsStack.push(url);
            }

            System.out.println(urlsStack.peek());
            url = scanner.nextLine();
        }
    }
}
