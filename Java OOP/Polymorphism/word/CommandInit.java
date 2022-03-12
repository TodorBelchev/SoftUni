package polymorphism.word;

import java.util.List;

public class CommandInit extends CommandImpl {
    public CommandInit(StringBuilder text) {
        super(text);
    }

    @Override
    protected List<Command> initCommands() {
        List<Command> commands = super.initCommands();
        CutTransform cutTransform = new CutTransform();
        PasteTransform pasteTransform = new PasteTransform(cutTransform);

        commands.add(new Command("cut", cutTransform));
        commands.add(new Command("paste", pasteTransform));

        return commands;
    }
}
