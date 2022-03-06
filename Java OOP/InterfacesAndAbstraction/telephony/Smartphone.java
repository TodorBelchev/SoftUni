package interfaces_and_abstraction.telephony;

import java.util.List;

public class Smartphone implements Browsable, Callable {
    private List<String> numbers;
    private List<String> urls;

    public Smartphone(List<String> numbers, List<String> urls) {
        this.numbers = numbers;
        this.urls = urls;
    }

    @Override
    public String browse() {
        StringBuilder sb = new StringBuilder();
        for (String url: this.urls) {
            if (!url.matches("^[^0-9]+$")) {
                sb.append("Invalid URL!");
            } else {
                sb.append("Browsing: ").append(url).append('!');
            }
            sb.append(System.lineSeparator());
        }

        return sb.toString().trim();
    }

    @Override
    public String call() {
        StringBuilder sb = new StringBuilder();
        for (String num: this.numbers) {
            if (!num.matches("^[0-9]+$")) {
                sb.append("Invalid number!");
            } else {
                sb.append("Calling... ").append(num);
            }
            sb.append(System.lineSeparator());
        }

        return sb.toString().trim();
    }
}
