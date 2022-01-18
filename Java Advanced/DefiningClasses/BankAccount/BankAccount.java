package Classes.BankAccount;

public class BankAccount {
    static int nextId = 1;
    private int id;
    private double balance;
    private static double interestRate = 0.02;

    public BankAccount() {
        this.id = nextId;
        nextId++;
    }

    public int getId() {
        return id;
    }

    public void deposit(double amount) {
        this.balance += amount;
    }

    public static void setInterestRate(double interest) {
        interestRate = interest;
    }

    public double getInterest(int years) {
        return this.balance * years * interestRate;
    }
}
