package Classes.FamilyTree;


import java.util.ArrayList;
import java.util.List;

public class Person {
    private String name;
    private String birthday;
    private List<String> parents;
    private List<String> children;

    public Person(String name, String birthday) {
        this.name = name;
        this.parents = new ArrayList<>();
        this.children = new ArrayList<>();
        this.birthday = birthday;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public String getName() {
        return name;
    }

    public String getBirthday() {
        return birthday;
    }

    public List<String> getParents() {
        return parents;
    }

    public List<String> getChildren() {
        return children;
    }
}
