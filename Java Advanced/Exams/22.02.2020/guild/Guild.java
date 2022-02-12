package guild;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

public class Guild {
    private String name;
    private int capacity;
    private List<Player> roster;

    public Guild(String name, int capacity) {
        this.name = name;
        this.capacity = capacity;
        this.roster = new ArrayList<>();
    }

    public void addPlayer(Player player) {
        if (this.capacity > this.roster.size()) {
            this.roster.add(player);
        }
    }

    public boolean removePlayer(String name) {
        int index = -1;

        for (int i = 0; i < this.roster.size(); i++) {
            Player curr = this.roster.get(i);
            if (curr.getName().equals(name)) {
                index = i;
                break;
            }
        }

        if (index != -1) {
            this.roster.remove(index);
        }

        return index != -1;
    }

    public void promotePlayer(String name) {
        for (int i = 0; i < this.roster.size(); i++) {
            Player curr = this.roster.get(i);
            if (curr.getName().equals(name)) {
                curr.setRank("Member");
                break;
            }
        }
    }

    public void demotePlayer(String name) {
        for (int i = 0; i < this.roster.size(); i++) {
            Player curr = this.roster.get(i);
            if (curr.getName().equals(name)) {
                curr.setRank("Trial");
                break;
            }
        }
    }

    public Player[] kickPlayersByClass(String clazz) {
        List<Player> kicked = new ArrayList<>();

        for (int i = 0; i < this.roster.size(); i++) {
            Player curr = this.roster.get(i);
            if (curr.getClazz().equals(clazz)) {
                Player kickedPlayer = this.roster.remove(i);
                kicked.add(kickedPlayer);
                i--;
            }
        }

        return kicked.toArray(Player[]::new);
    }

    public int count() {
        return this.roster.size();
    }

    public String report() {
        StringBuilder sb = new StringBuilder();
        sb.append(String.format("Players in the guild: %s:%n", this.name));
        for (Player player : this.roster) {
            sb.append(player).append(System.lineSeparator());
        }
        return sb.toString();
    }
}
