package Generics.CustomListSorter;


public class Sorter {
    public static <T extends Comparable<T>> void sort(CustomList<T> list) {
        for (int i = 0; i < list.size(); i++) {
            T element = list.get(i);
            for (int j = i + 1; j < list.size(); j++) {
                T next = list.get(j);
                if (element.compareTo(next) > 0) {
                    list.swap(i, j);
                }
            }
        }
    }
}
