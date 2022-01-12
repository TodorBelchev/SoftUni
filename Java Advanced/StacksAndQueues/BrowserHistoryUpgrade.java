package StackAndQueues;

import java.util.ArrayDeque;
import java.util.Scanner;

public class BrowserHistoryUpgrade {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String url = scanner.nextLine();

        ArrayDeque<String> urlsStackBack = new ArrayDeque<>();
        ArrayDeque<String> urlsQueueForward = new ArrayDeque<>();

        while (!url.equals("Home")) {

            if (url.equals("back")) {
                if (urlsStackBack.size() < 2) {
                    System.out.println("no previous URLs");
                } else {
                    urlsQueueForward.addFirst(urlsStackBack.pop());
                    System.out.println(urlsStackBack.peek());
                }

            } else if (url.equals("forward")) {
                if (urlsQueueForward.size() < 1) {
                    System.out.println("no next URLs");
                } else {
                    System.out.println(urlsQueueForward.peek());
                    urlsStackBack.push(urlsQueueForward.pop());
                }

            } else {
                System.out.println(url);
                urlsStackBack.push(url);
                urlsQueueForward.clear();
            }

            url = scanner.nextLine();
        }
    }
}
