import org.bouncycastle.jcajce.provider.digest.SHA3;
import org.bouncycastle.util.encoders.Hex;

import java.util.HashMap;
import java.util.List;

public class Server implements ServerInterface {
    HashMap<String,Nodes> clientList;
    SHA3.DigestSHA3 digestSHA3;
    HashMap<String, Integer> incubation;
    public  Server(){
        this.digestSHA3 = new SHA3.Digest512();
    }
    public boolean findRelated(String disease){

        return true;
    }
    public boolean setInfected(String id){
        clientList.get(id).setInfected(true);
        return true;
    }
    public boolean checkInfected(String id){
        return clientList.get(id).getState();
    }
    public boolean makeConnect(String s1, String s2){
        clientList.get(s1).addConnect(s2);
        clientList.get(s2).addConnect(s1);
        return true;
    }
    public String getHash(int rawId){
        String s1 = Integer.toString(rawId);
        byte[] digest = digestSHA3.digest(s1.getBytes());
        return Hex.toHexString(digest);
    }
}
