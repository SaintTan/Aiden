import java.rmi.Remote;
import java.rmi.RemoteException;
import java.util.List;

public interface ServerInterface extends Remote {
    public boolean setInfected(String id, String disease) throws RemoteException;;
    public String[] checkInfected(String id) throws RemoteException;
    public boolean makeConnect(String s1, String s2) throws RemoteException;
    public String getHash(int rawId) throws RemoteException;
    public String sayHello() throws RemoteException;
    public boolean removeInfected(String id) throws RemoteException;

}
