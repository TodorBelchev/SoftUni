import java.util.*;

public class FoodFinder {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayDeque<String> queue = new ArrayDeque<>();
        ArrayDeque<String> stack = new ArrayDeque<>();
        Arrays.stream(scanner.nextLine().split("\\s+"))
                .forEach(queue::offer);
        Arrays.stream(scanner.nextLine().split("\\s+"))
                .forEach(stack::push);

        String pear = "pear";
        String flour = "flour";
        String pork = "pork";
        String olive = "olive";

        List<String> pearList = new ArrayList<>();
        List<String> flourList = new ArrayList<>();
        List<String> porkList = new ArrayList<>();
        List<String> oliveList = new ArrayList<>();


        while (!stack.isEmpty()) {
            String vowel = queue.poll().toLowerCase();
            String consonant = stack.pop().toLowerCase();

            if (pear.contains(vowel) && !pearList.contains(vowel)) {
                pearList.add(vowel);
            }
            if (flour.contains(vowel) && !flourList.contains(vowel)) {
                flourList.add(vowel);
            }
            if (pork.contains(vowel) && !porkList.contains(vowel)) {
                porkList.add(vowel);
            }
            if (olive.contains(vowel) && !oliveList.contains(vowel)) {
                oliveList.add(vowel);
            }

            if (pear.contains(consonant) && !pearList.contains(consonant)) {
                pearList.add(consonant);
            }
            if (flour.contains(consonant) && !flourList.contains(consonant)) {
                flourList.add(consonant);
            }
            if (pork.contains(consonant) && !porkList.contains(consonant)) {
                porkList.add(consonant);
            }
            if (olive.contains(consonant) && !oliveList.contains(consonant)) {
                oliveList.add(consonant);
            }

            queue.offer(vowel);
        }

        int sum = 0;

        if (pearList.size() == 4) {
            sum++;
        }

        if (flourList.size() == 5) {
            sum++;
        }

        if (porkList.size() == 4) {
            sum++;
        }

        if (oliveList.size() == 5) {
            sum++;
        }

        System.out.println("Words found: " + sum);

        if (pearList.size() == 4) {
            System.out.println(pear);
        }

        if (flourList.size() == 5) {
            System.out.println(flour);
        }

        if (porkList.size() == 4) {
            System.out.println(pork);
        }

        if (oliveList.size() == 5) {
            System.out.println(olive);
        }
    }
}
