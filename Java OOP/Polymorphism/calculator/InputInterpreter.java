package polymorphism.calculator;

import java.util.ArrayDeque;

public class InputInterpreter {
    private CalculationEngine engine;
    private ArrayDeque<Integer> memory;

    public InputInterpreter(CalculationEngine engine) {
        this.engine = engine;
        this.memory = new ArrayDeque<>();

    }

    public boolean interpret(String input) {
        try {
            engine.pushNumber(Integer.parseInt(input));
        } catch (Exception ex) {
            engine.pushOperation(this.getOperation(input));
        }
        return true;
    }

    public Operation getOperation(String operation) {
        if (operation.equals("*")) {
            return new MultiplicationOperation();
        } else if (operation.equals("/")) {
            return new DivideOperation();
        } else if (operation.equals("ms")) {
            return new MemorySaveOperation(this.memory);
        } else if (operation.equals("mr")) {
            return new MemoryRecallOperation(this.memory);
        }

        return null;
    }
}
