
public class ClockV2 {
    public static void main(String[] args) {
        for (int hour = 0; hour < 24; hour++) {
            for (int minute = 0; minute < 60; minute++) {
                for (int second = 0; second < 60; second++) {
                    System.out.printf("%d : %d : %d%n", hour, minute, second);
                }
            }
        }
    }
}
