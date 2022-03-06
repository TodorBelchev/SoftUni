package interfaces_and_abstraction.collection_hierarchy;

public class AddCollection extends Collection implements Addable {
    @Override
    public int add(String item) {
        super.getItems().add(item);
        return super.getItems().indexOf(item);
    }
}
