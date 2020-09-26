import java.rmi.RemoteException;
import java.util.HashMap;
import java.util.List;
import java.sql.Timestamp;

public class Nodes {
    String id;
    Server server;
    boolean infected = false;
    boolean worker = false;
    String diseaseType = "None";
    String blackList = "None";
    HashMap<String, Timestamp> connectID = new HashMap();

    public Nodes(String id) throws RemoteException {
        this.id = id;
    }
    public String[] checkInfected(){
        String[] result = new String[2];
        if (diseaseType == "None" && blackList == "None"){
            result [0] = "Clear";
            result [1] = "Clear";
        }
        else if (blackList != "None"){
            result[0] = "Blacklist";
            result[1] = blackList;
        }
        else{
            result[0] = "Disease";
            result[1] = diseaseType;
        }
        return result;
    }
    public void addConnect(String id) throws RemoteException {
        Timestamp time = new Timestamp(System.currentTimeMillis());
        if (connectID.containsKey(id)) {
            connectID.replace(id, time);
        } else {
            connectID.put(id, time);
        }
    }

    public void setInfected(String state) {
        diseaseType = state;
    }
    public void removeInfected(){
        diseaseType = "None";
    }

    public boolean getState() {
        return infected;
    }
}
