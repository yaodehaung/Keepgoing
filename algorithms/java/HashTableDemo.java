import java.util.*;

public class HashTableDemo {

    public static void main(String args[]) {
        // Create a hash map
        Hashtable balance = new Hashtable();
        Enumeration names;
        String str;
        double bal;

        balance.put("Zara", new Double(3434.34));
        balance.put("Mahnaz", new Double(123.22));
        balance.put("Ayan", new Double(1378.00));
        balance.put("Daisy", new Double(99.22));
        balance.put("Qadir", new Double(-19.08));

        // Show all balances in hash table.
        names = balance.keys();
//        checkout hashtable has many item.
        while(names.hasMoreElements()) {
            str = (String) names.nextElement();
            System.out.println(str + ": " +
                    balance.get(str));
        }
        System.out.println();

        // Double is an object and double is a primitive data type
        Double dd = (Double)balance.get("Zara");
        bal = dd.doubleValue();
        // Deposit 1,000 into Zara's account
        balance.put("Zara", new Double(bal+1000));
        System.out.println("Zara's new balance: " +
                balance.get("Zara"));
    }
}