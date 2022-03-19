package reflection.barracksWars.core.commands;

import reflection.barracksWars.core.Inject;
import reflection.barracksWars.interfaces.Repository;


public class Report extends Command {

    @Inject
    Repository repository;

    public Report(String[] data) {
        super(data);
    }

    @Override
    public String execute() {
        String output = this.repository.getStatistics();
        return output;
    }
}
