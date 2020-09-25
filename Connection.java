import java.sql.Timestamp;

public class Connection {
    private String id;
    private Timestamp time;
    public Connection(String id, Timestamp time){
        this.id = id;
        this.time = time;
    }

}
