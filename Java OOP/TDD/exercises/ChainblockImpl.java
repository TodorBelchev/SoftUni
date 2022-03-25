package tdd.exercises;

import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class ChainblockImpl implements Chainblock {

    private Map<Integer, Transaction> transactions;

    public ChainblockImpl() {
        this.transactions = new LinkedHashMap<>();
    }

    public int getCount() {
        return this.transactions.size();
    }

    public void add(Transaction transaction) {
        this.transactions.putIfAbsent(transaction.getId(), transaction);
    }

    public boolean contains(Transaction transaction) {
        return this.transactions.containsKey(transaction.getId());
    }

    public boolean contains(int id) {
        return this.transactions.containsKey(id);
    }

    public void changeTransactionStatus(int id, TransactionStatus newStatus) {
        if (!this.transactions.containsKey(id)) {
            throw new IllegalArgumentException();
        }

        this.transactions.get(id).setStatus(newStatus);
    }

    public void removeTransactionById(int id) {
        if (!this.transactions.containsKey(id)) {
            throw new IllegalArgumentException();
        }

        this.transactions.remove(id);
    }

    public Transaction getById(int id) {
        if (!this.transactions.containsKey(id)) {
            throw new IllegalArgumentException();
        }

        return this.transactions.get(id);
    }

    public Iterable<Transaction> getByTransactionStatus(TransactionStatus status) {
        List<Transaction> transactions = this.transactions.values().stream()
                .filter(t -> t.getStatus().equals(status))
                .sorted((t1, t2) -> Double.compare(t2.getAmount(), t1.getAmount()))
                .collect(Collectors.toList());

        if (transactions.size() == 0) {
            throw new IllegalArgumentException();
        }

        return transactions;
    }

    public Iterable<String> getAllSendersWithTransactionStatus(TransactionStatus status) {
        List<String> transactions = this.transactions.values().stream()
                .filter(t -> t.getStatus().equals(status))
                .sorted((t1, t2) -> Double.compare(t2.getAmount(), t1.getAmount()))
                .map(Transaction::getFrom)
                .collect(Collectors.toList());

        if (transactions.size() == 0) {
            throw new IllegalArgumentException();
        }

        return transactions;
    }

    public Iterable<String> getAllReceiversWithTransactionStatus(TransactionStatus status) {
        List<String> transactions = this.transactions.values().stream()
                .filter(t -> t.getStatus().equals(status))
                .sorted((t1, t2) -> Double.compare(t2.getAmount(), t1.getAmount()))
                .map(Transaction::getTo)
                .collect(Collectors.toList());

        if (transactions.size() == 0) {
            throw new IllegalArgumentException();
        }

        return transactions;
    }

    public Iterable<Transaction> getAllOrderedByAmountDescendingThenById() {
        return this.transactions.values().stream()
                .sorted((t1, t2) -> {
                    int result = Double.compare(t2.getAmount(), t1.getAmount());

                    if (result == 0) {
                        result = Integer.compare(t1.getId(), t2.getId());
                    }

                    return result;
                })
                .collect(Collectors.toList());
    }

    public Iterable<Transaction> getBySenderOrderedByAmountDescending(String sender) {
        List<Transaction> collect = this.transactions.values().stream()
                .filter(t -> t.getFrom().equals(sender))
                .sorted((t1, t2) -> Double.compare(t2.getAmount(), t1.getAmount()))
                .collect(Collectors.toList());

        if (collect.size() == 0) {
            throw new IllegalArgumentException();
        }

        return collect;
    }

    public Iterable<Transaction> getByReceiverOrderedByAmountThenById(String receiver) {
        return this.transactions.values().stream()
                .filter(t -> t.getTo().equals(receiver))
                .sorted((t1, t2) -> {
                    int result = Double.compare(t2.getAmount(), t1.getAmount());

                    if (result == 0) {
                        result = Integer.compare(t1.getId(), t2.getId());
                    }

                    return result;
                })
                .collect(Collectors.toList());
    }

    public Iterable<Transaction> getByTransactionStatusAndMaximumAmount(TransactionStatus status, double amount) {
        return this.transactions.values().stream()
                .filter(t -> t.getStatus().equals(status) && t.getAmount() <= amount)
                .sorted((t1, t2) -> Double.compare(t2.getAmount(), t1.getAmount()))
                .collect(Collectors.toList());
    }

    public Iterable<Transaction> getBySenderAndMinimumAmountDescending(String sender, double amount) {
        List<Transaction> transactions = this.transactions.values().stream()
                .filter(t -> t.getFrom().equals(sender) && t.getAmount() > amount)
                .sorted((t1, t2) -> Double.compare(t2.getAmount(), t1.getAmount()))
                .collect(Collectors.toList());
        if (transactions.size() == 0) {
            throw new IllegalArgumentException();
        }

        return transactions;
    }

    public Iterable<Transaction> getByReceiverAndAmountRange(String receiver, double lo, double hi) {
        List<Transaction> transactions = this.transactions.values().stream()
                .filter(t -> t.getTo().equals(receiver) && t.getAmount() >= lo && t.getAmount() < hi)
                .sorted((t1, t2) -> Double.compare(t2.getAmount(), t1.getAmount()))
                .collect(Collectors.toList());

        if (transactions.size() == 0) {
            throw new IllegalArgumentException();
        }

        return transactions;
    }

    public Iterable<Transaction> getAllInAmountRange(double lo, double hi) {
        return this.transactions.values().stream()
                .filter(t -> t.getAmount() >= lo && t.getAmount() <= hi)
                .collect(Collectors.toList());
    }

    public Iterator<Transaction> iterator() {
        return this.transactions.values().iterator();
    }
}
