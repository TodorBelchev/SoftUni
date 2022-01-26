package IteratorsAndComparators.PetClinics;

import java.util.Arrays;

public class Clinic {
    private Room[] rooms;
    private String name;
    private int numberOfRooms;

    public Clinic(String name, int numberOfRooms) {
        this.rooms = createRooms(numberOfRooms);
        this.name = name;
        this.numberOfRooms = numberOfRooms;
    }

    private Room[] createRooms(int numberOfRooms) {
        Room[] rooms = new Room[numberOfRooms + 1];
        for (int i = 1; i < rooms.length; i++) {
            rooms[i] = new Room();
        }
        return rooms;
    }

    public boolean add(Pet pet) {
        int centerRoom = (int) Math.ceil((double) (numberOfRooms) / 2);
        if (this.rooms.length == 1) {
            centerRoom = 1;
        }

        if (rooms[centerRoom].pet == null) {
            rooms[centerRoom].pet = pet;
            return true;
        }

        for (int i = 1; i <= centerRoom - 1; i++) {
            if (rooms[centerRoom - i].pet == null) {
                rooms[centerRoom - i].pet = pet;
                return true;
            }
            if (rooms[centerRoom + i].pet == null) {
                rooms[centerRoom + i].pet = pet;
                return true;
            }
        }
        return false;
    }

    public boolean release() {
        int centerRoom = (int) Math.ceil((double) (numberOfRooms) / 2);
        if (this.rooms.length == 1) {
            centerRoom = 1;
        }

        if (rooms[centerRoom].pet != null) {
            rooms[centerRoom].pet = null;
            return true;
        }

        for (int i = centerRoom + 1; i < this.rooms.length; i++) {
            if (this.rooms[i].pet != null) {
                this.rooms[i].pet = null;
                return true;
            }
        }

        for (int i = centerRoom - 1; i >= 1; i--) {
            if (this.rooms[i].pet != null) {
                this.rooms[i].pet = null;
                return true;
            }
        }
        return false;
    }

    public boolean hasEmptyRoom() {
        for (int i = 1; i < this.rooms.length; i++) {
            if (this.rooms[i].pet == null) {
                return true;
            }
        }
        return false;
    }

    public void print() {
        for (int i = 1; i < rooms.length; i++) {
            System.out.println(rooms[i]);
        }
    }

    public void print(int roomIndex) {
        System.out.println(this.rooms[roomIndex]);
    }

    public Room[] getRooms() {
        return this.rooms;
    }

    public void setRooms(Room[] rooms) {
        this.rooms = this.rooms;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
