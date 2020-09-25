import java.rmi.Remote;
import java.rmi.RemoteException;

public interface ClientInterface extends Remote {
    public boolean setInfected(String id, String disease) throws RemoteException;
    public boolean checkInfected(String id) throws RemoteException;
    public boolean makeConnect(String s1, String s2) throws RemoteException;
    public boolean removeInfected(String id) throws RemoteException;

}
