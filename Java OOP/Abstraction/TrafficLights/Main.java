package abstraction.traffic_lights;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] lightsInput = scanner.nextLine().split("\\s+");
        int rotations = Integer.parseInt(scanner.nextLine());

        List<TrafficLight> trafficLightList = new ArrayList<>();

        for (String light: lightsInput) {
          trafficLightList.add(new TrafficLight(Color.valueOf(light)));
        }

        for (int i = 0; i < rotations; i++) {
            for (TrafficLight tl: trafficLightList) {
                tl.changeColor();
                System.out.print(tl.getColor() + " ");
            }
            System.out.println();
        }
    }
}
