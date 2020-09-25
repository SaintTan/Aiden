import java.rmi.Remote;

public interface ClientInterface extends Remote {
    public boolean setInfected(String id);
    public boolean checkInfected(String id);
    public boolean makeConnect(String s1, String s2);

}
