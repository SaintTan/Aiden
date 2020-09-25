import java.rmi.Remote;
import java.util.List;

public interface ServerInterface extends Remote {
    public boolean setInfected(String id);
    public boolean checkInfected(String id);
    public boolean makeConnect(String s1, String s2);
    public String getHash(int rawId);

}
