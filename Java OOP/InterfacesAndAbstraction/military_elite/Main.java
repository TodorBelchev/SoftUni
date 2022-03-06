package interfaces_and_abstraction.military_elite;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        Map<Integer, Private> privates = new HashMap<>();

        String input = reader.readLine();
        while (!input.equals("End")) {
            String[] data = input.split("[\\s]+");

            String command = data[0];
            int id = Integer.parseInt(data[1]);
            String firstName = data[2];
            String lastName = data[3];

            switch (command) {
                case "Private":
                    addPrivate(privates, data, id, firstName, lastName);
                    break;

                case "LieutenantGeneral":
                    addPrivatesLieutenant(privates, data, id, firstName, lastName);
                    break;

                case "Engineer":
                    addRepairEngineers(data, id, firstName, lastName);
                    break;

                case "Commando":
                    addMissionsCommando(data, id, firstName, lastName);
                    break;

                case "Spy":
                    createSpy(data, id, firstName, lastName);
                    break;
            }

            input = reader.readLine();
        }
    }

    private static void addMissionsCommando(String[] data, int id, String firstName, String lastName) {
        double salary = Double.parseDouble(data[4]);

        if (isValidCorps(data[5])) {
            Corps corps = Corps.valueOf(data[5]);
            Commando commando = new CommandoImpl(id, firstName, lastName, salary, corps);

            for (int i = 6; i < data.length; i += 2) {
                String missionCodeName = data[i];
                if (!isValidMissionState(data[i + 1])) continue;
                MissionState missionState = MissionState.valueOf(data[i + 1]);
                commando.addMission(new Mission(missionCodeName, missionState));
            }

            System.out.println(commando);
        }
    }

    private static void createSpy(String[] data, int id, String firstName, String lastName) {
        String codeNumber = data[4];
        Spy spy = new SpyImpl(id, firstName, lastName, codeNumber);

        System.out.println(spy);
    }

    private static void addRepairEngineers(String[] data, int id, String firstName, String lastName) {
        double salary = Double.parseDouble(data[4]);

        if (isValidCorps(data[5])) {
            Corps corps = Corps.valueOf(data[5]);
            Engineer engineer = new EngineerImpl(id, firstName, lastName, salary, corps);

            for (int i = 6; i < data.length; i += 2) {
                String repairPart = data[i];
                int repairHours = Integer.parseInt(data[i + 1]);
                engineer.addRepair(new Repair(repairPart, repairHours));
            }

            System.out.println(engineer);
        }
    }

    private static void addPrivate(Map<Integer, Private> privates, String[] data, int id,
                                   String firstName, String lastName) {
        double salary = Double.parseDouble(data[4]);

        Private priv = new PrivateImpl(id, firstName, lastName, salary);
        privates.put(id, priv);

        System.out.println(priv);
    }

    private static void addPrivatesLieutenant(Map<Integer, Private> privates, String[] data, int id,
                                              String firstName, String lastName) {

        double salary = Double.parseDouble(data[4]);
        LieutenantGeneral lieutenantGeneral = new LieutenantGeneralImpl(id, firstName, lastName, salary);

        for (int i = 5; i < data.length; i++) {
            int privateId = Integer.parseInt(data[i]);
            lieutenantGeneral.addPrivate(privates.get(privateId));
        }

        System.out.println(lieutenantGeneral);
    }

    private static boolean isValidMissionState(String missionState) {
        return missionState.equals(MissionState.inProgress.toString()) ||
                missionState.equals(MissionState.finished.toString());
    }

    private static boolean isValidCorps(String corps) {
        return corps.equals(Corps.Airforces.toString()) ||
                corps.equals(Corps.Marines.toString());
    }
}
