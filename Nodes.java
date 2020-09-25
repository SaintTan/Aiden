import java.util.List;

public class Nodes {
    String id;
    Server server;
    boolean infected = false;
    boolean worker = false;
    String diseaseType = "None";
    List<String> connect;
    public Nodes(int rawID, Server server, boolean worker){
        this.server = server;
        this.id = server.getHash(rawID);
        this.worker = worker;
    }
    public void addConnect(String id){
        connect.add(id);
    }
    public void setInfected(boolean state){
        this.infected = state;
    }
    public boolean getState(){
        return infected;
    }
}
