package tdd.exercises;

import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;

import static org.junit.Assert.*;

public class ChainblockImplTest {

    ChainblockImpl chainblock;

    @Before
    public void setup() {
        this.chainblock = new ChainblockImpl();
    }

    @Test
    public void getCountShouldReturnZero() {
        assertEquals(0, this.chainblock.getCount());
    }

    @Test
    public void getCountShouldReturnThree() {
        addTransactions();
        assertEquals(4, this.chainblock.getCount());
    }

    @Test
    public void containsShouldReturnFalse() {
        Transaction transaction = new TransactionImpl(1, TransactionStatus.SUCCESSFUL, "Pesho", "Gosho", 9.99);
        assertFalse(this.chainblock.contains(transaction));
    }

    @Test
    public void containsShouldReturnTrueAfterSuccessfulAdd() {
        List<Transaction> transactions = addTransactions();
        assertTrue(this.chainblock.contains(transactions.get(0)));
    }

    @Test
    public void testContainsShouldReturnFalse() {
        assertFalse(this.chainblock.contains(1));
    }

    @Test
    public void testContainsShouldReturnTrueAfterSuccessfulAdd() {
        List<Transaction> transactions = addTransactions();
        assertTrue(this.chainblock.contains(1));
    }

    @Test(expected = IllegalArgumentException.class)
    public void changeTransactionStatusShouldThrowIfIdDoesNotExist() {
        this.chainblock.changeTransactionStatus(1, TransactionStatus.SUCCESSFUL);
    }

    @Test
    public void changeTransactionStatusShouldSucceed() {
        addTransactions();
        this.chainblock.changeTransactionStatus(1, TransactionStatus.ABORTED);
        Transaction transaction = this.chainblock.getById(1);
        assertEquals(TransactionStatus.ABORTED, transaction.getStatus());
    }

    @Test(expected = IllegalArgumentException.class)
    public void removeTransactionByIdShouldThrow() {
        this.chainblock.removeTransactionById(1);
    }

    @Test
    public void removeTransactionById() {
        addTransactions();
        this.chainblock.removeTransactionById(1);
        assertEquals(3, this.chainblock.getCount());
    }

    @Test(expected = IllegalArgumentException.class)
    public void getByIdShouldThrow() {
        this.chainblock.getById(1);
    }

    @Test
    public void getById() {
        addTransactions();
        Transaction transaction = this.chainblock.getById(1);
        assertEquals(1, transaction.getId());
    }

    @Test(expected = IllegalArgumentException.class)
    public void getByTransactionStatusShouldThrow() {
        this.chainblock.getByTransactionStatus(TransactionStatus.ABORTED);
    }

    @Test
    public void getByTransactionStatus() {
        addTransactions();
        List<Transaction> byTransactionStatus = (List<Transaction>) this.chainblock.getByTransactionStatus(TransactionStatus.SUCCESSFUL);
        assertEquals(1, byTransactionStatus.size());
        assertEquals(TransactionStatus.SUCCESSFUL, byTransactionStatus.get(0).getStatus());
    }

    @Test(expected = IllegalArgumentException.class)
    public void getAllSendersWithTransactionStatusShouldThrow() {
        this.chainblock.getAllSendersWithTransactionStatus(TransactionStatus.ABORTED);
    }

    @Test
    public void getAllSendersWithTransactionStatus() {
        addTransactions();
        List<String> byTransactionStatus = (List<String>) this.chainblock.getAllSendersWithTransactionStatus(TransactionStatus.SUCCESSFUL);
        assertEquals(1, byTransactionStatus.size());
        assertEquals("Pesho", byTransactionStatus.get(0));
    }

    @Test(expected = IllegalArgumentException.class)
    public void getAllReceiversWithTransactionStatusShouldThrow() {
        this.chainblock.getAllReceiversWithTransactionStatus(TransactionStatus.ABORTED);
    }

    @Test
    public void getAllReceiversWithTransactionStatus() {
        addTransactions();
        List<String> byTransactionStatus = (List<String>) this.chainblock.getAllReceiversWithTransactionStatus(TransactionStatus.SUCCESSFUL);
        assertEquals(1, byTransactionStatus.size());
        assertEquals("Gosho", byTransactionStatus.get(0));
    }

    @Test
    public void getAllOrderedByAmountDescendingThenById() {
        List<Transaction> transactions = addTransactions();
        List<Transaction> expected = transactions.stream()
                .sorted((t1, t2) -> {
                    int result = Double.compare(t2.getAmount(), t1.getAmount());

                    if (result == 0) {
                        result = Integer.compare(t1.getId(), t2.getId());
                    }

                    return result;
                })
                .collect(Collectors.toList());
        List<Transaction> allOrderedByAmountDescendingThenById = (List<Transaction>) this.chainblock.getAllOrderedByAmountDescendingThenById();
        assertEquals(expected, allOrderedByAmountDescendingThenById);
    }

    @Test(expected = IllegalArgumentException.class)
    public void getBySenderOrderedByAmountDescendingShouldThrow() {
        List<Transaction> getBySenderOrderedByAmountDescending = (List<Transaction>) this.chainblock.getBySenderOrderedByAmountDescending("Tosho0o0o");
    }

    @Test
    public void getBySenderOrderedByAmountDescending() {
        List<Transaction> transactions = addTransactions();
        List<Transaction> expected = transactions.stream()
                .filter(t -> t.getFrom().equals("Tosho"))
                .sorted((t1, t2) -> Double.compare(t2.getAmount(), t1.getAmount()))
                .collect(Collectors.toList());
        List<Transaction> getBySenderOrderedByAmountDescending = (List<Transaction>) this.chainblock.getBySenderOrderedByAmountDescending("Tosho");
        assertEquals(expected, getBySenderOrderedByAmountDescending);
    }

    @Test
    public void getByReceiverOrderedByAmountThenById() {
        List<Transaction> transactions = addTransactions();
        List<Transaction> expected = transactions.stream()
                .filter(t -> t.getTo().equals("Tosho"))
                .sorted((t1, t2) -> {
                    int result = Double.compare(t2.getAmount(), t1.getAmount());

                    if (result == 0) {
                        result = Integer.compare(t1.getId(), t2.getId());
                    }

                    return result;
                })
                .collect(Collectors.toList());
        Iterable<Transaction> byReceiverOrderedByAmountThenById = this.chainblock.getByReceiverOrderedByAmountThenById("Tosho");
        assertEquals(expected, byReceiverOrderedByAmountThenById);
    }

    @Test
    public void getByTransactionStatusAndMaximumAmount() {
        List<Transaction> transactions = addTransactions();
        List<Transaction> expected = transactions.stream()
                .filter(t -> t.getStatus().equals(TransactionStatus.FAILED) && t.getAmount() <= 4.99)
                .sorted((t1, t2) -> Double.compare(t2.getAmount(), t1.getAmount()))
                .collect(Collectors.toList());
        Iterable<Transaction> byTransactionStatusAndMaximumAmount = this.chainblock.getByTransactionStatusAndMaximumAmount(TransactionStatus.FAILED, 4.99);
        assertEquals(expected, byTransactionStatusAndMaximumAmount);
    }

    @Test(expected = IllegalArgumentException.class)
    public void getBySenderAndMinimumAmountDescendingShouldThrow() {
       this.chainblock.getBySenderAndMinimumAmountDescending("Pesho", 10);
    }

    @Test
    public void getBySenderAndMinimumAmountDescending() {
        List<Transaction> transactions = addTransactions();
        List<Transaction> expected = transactions.stream()
                .filter(t -> t.getFrom().equals("Pesho") && t.getAmount() > 10)
                .sorted((t1, t2) -> Double.compare(t2.getAmount(), t1.getAmount()))
                .collect(Collectors.toList());
        Iterable<Transaction> bySenderAndMinimumAmountDescending = this.chainblock.getBySenderAndMinimumAmountDescending("Pesho", 10);
        assertEquals(expected, bySenderAndMinimumAmountDescending);
    }

    @Test(expected = IllegalArgumentException.class)
    public void getByReceiverAndAmountRangeShouldThrow() {
        this.chainblock.getByReceiverAndAmountRange("Pesho", 1.99, 19.99);
    }

    @Test
    public void getByReceiverAndAmountRange() {
        List<Transaction> transactions = addTransactions();
        List<Transaction> expected = transactions.stream()
                .filter(t -> t.getTo().equals("Gosho") && t.getAmount() >= 4.99 && t.getAmount() < 9.99)
                .sorted((t1, t2) -> Double.compare(t2.getAmount(), t1.getAmount()))
                .collect(Collectors.toList());
        Iterable<Transaction> byReceiverAndAmountRange = this.chainblock.getByReceiverAndAmountRange("Gosho", 4.99, 9.99);
        assertEquals(expected, byReceiverAndAmountRange);
    }

    @Test
    public void getAllInAmountRange() {
        List<Transaction> transactions = addTransactions();
        List<Transaction> expected = transactions.stream()
                .filter(t -> t.getAmount() >= 4.99 && t.getAmount() <= 9.99)
                .collect(Collectors.toList());
        Iterable<Transaction> allInAmountRange = this.chainblock.getAllInAmountRange(4.99, 9.99);
        assertEquals(expected, allInAmountRange);
    }

    @Test
    public void iterator() {
        List<Transaction> transactions = addTransactions();

        Iterator<Transaction> iterator = this.chainblock.iterator();
        assertNotNull(iterator);

        List<Transaction> actualTransactions = new ArrayList<>();

        while (iterator.hasNext()) {
            Transaction t = iterator.next();
            actualTransactions.add(t);
        }

        assertEquals(transactions, actualTransactions);
    }

    public List<Transaction> addTransactions() {
        Transaction transaction = new TransactionImpl(1, TransactionStatus.SUCCESSFUL, "Pesho", "Tosho", 9.99);
        Transaction transaction1 = new TransactionImpl(2, TransactionStatus.UNAUTHORIZED, "Pesho", "Gosho", 19.99);
        Transaction transaction2 = new TransactionImpl(3, TransactionStatus.FAILED, "Pesho", "Gosho", 4.99);
        Transaction transaction3 = new TransactionImpl(4, TransactionStatus.FAILED, "Tosho", "Gosho", 9.99);

        this.chainblock.add(transaction);
        this.chainblock.add(transaction1);
        this.chainblock.add(transaction2);
        this.chainblock.add(transaction3);

        return List.of(new Transaction[]{
                transaction,
                transaction1,
                transaction2,
                transaction3
        });
    }
}