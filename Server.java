import org.bouncycastle.jcajce.provider.digest.SHA3;
import org.bouncycastle.util.encoders.Hex;

import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import java.rmi.server.UnicastRemoteObject;
import java.util.HashMap;
import java.util.List;

public class Server implements ServerInterface {
    HashMap<String,Nodes> clientList;
    SHA3.DigestSHA3 digestSHA3;
    HashMap<String, Integer> incubation;
    public  Server(){
        this.digestSHA3 = new SHA3.Digest512();
        this.clientList = new HashMap<String,Nodes> ();
    }
    public boolean findRelated(String disease){
        return true;
    }
    public boolean setInfected(String id, String disease) throws RemoteException {
        if(!clientList.containsKey(id)) {
            clientList.put(id,new Nodes(id));
        }

        clientList.get(id).setInfected(disease);
        return true;
    }
    public String[] checkInfected(String id) throws RemoteException{
        if(clientList.containsKey(id)) {
            return clientList.get(id).checkInfected();
        }
        else{
            String[] result = {"Clear", "Clear"};
            return(result);
        }
    }
    public boolean makeConnect(String s1, String s2) throws RemoteException{
        clientList.get(s1).addConnect(s2);
        clientList.get(s2).addConnect(s1);
        return true;
    }
    public boolean removeInfected(String id){
        clientList.get(id).removeInfected();
        return true;
    }
    public String getHash(int rawId) throws RemoteException{
        String s1 = Integer.toString(rawId);
        byte[] digest = digestSHA3.digest(s1.getBytes());
        return Hex.toHexString(digest);
    }
    public String sayHello() {
        return "Hello, world!";
    }
    public static void main(String[] args) {
        try {
            Server obj = new Server();

            ServerInterface stub = (ServerInterface) UnicastRemoteObject.exportObject(obj, 0);
            System.setProperty("java.rmi.server.hostname","192.168.1.2");
            // Bind the remote object's stub in the registry
            Registry registry = LocateRegistry.createRegistry(1888);
            registry.bind("Hello", stub);
            System.err.println("Server ready");
        } catch (Exception e) {
            System.err.println("Server exception: " + e.toString());
            e.printStackTrace();
        }
    }
}
