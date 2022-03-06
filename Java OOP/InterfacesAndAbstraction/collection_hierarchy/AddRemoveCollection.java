package interfaces_and_abstraction.collection_hierarchy;

public class AddRemoveCollection extends Collection implements AddRemovable {
    @Override
    public String remove() {
        int lastIndex = super.getItems().size() - 1;
        return super.getItems().remove(lastIndex);
    }

    @Override
    public int add(String item) {
        super.getItems().add(0, item);
        return 0;
    }
}
