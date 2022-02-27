package encapsulation.football_team_generator;

public class Player {
    private String name;
    private int endurance;
    private int sprint;
    private int dribble;
    private int passing;
    private int shooting;

    public Player(String name, int endurance, int sprint, int dribble, int passing, int shooting) {
        setName(name);
        setEndurance(endurance);
        setSprint(sprint);
        setDribble(dribble);
        setPassing(passing);
        setShooting(shooting);
    }

    public String getName() {
        return name;
    }

    private void setName(String name) {
        if (name == null || name.trim().isEmpty()) {
            throw new IllegalArgumentException("A name should not be empty.");
        }

        this.name = name;
    }

    private void setEndurance(int endurance) {
        ensureStat(endurance, "Endurance");
        this.endurance = endurance;
    }

    private void setSprint(int sprint) {
        ensureStat(sprint, "Spring");
        this.sprint = sprint;
    }

    private void setDribble(int dribble) {
        ensureStat(dribble, "Dribble");
        this.dribble = dribble;
    }

    private void setPassing(int passing) {
        ensureStat(passing, "Passing");
        this.passing = passing;
    }

    private void setShooting(int shooting) {
        ensureStat(shooting, "Shooting");
        this.shooting = shooting;
    }

    public double overallSkillLevel() {
        return (endurance + sprint + dribble + passing + shooting) / 5.0;
    }

    private void ensureStat(int value, String stat) {
        if (value < 0 || value > 100) {
            throw new IllegalArgumentException(stat + " should be between 0 and 100.");
        }
    }
}
