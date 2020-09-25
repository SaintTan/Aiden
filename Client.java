import org.bouncycastle.jcajce.provider.digest.SHA3;
import org.bouncycastle.util.encoders.Hex;

import java.awt.*;

public class Client implements ClientInterface {
    boolean infected = false;
    private Component GUI;
    private Image buffer;
    Server server;

    public Client() {
        /*this.server = server;*/
    }

    public static void main(String args[]) throws Exception {
        Client client = new Client();
        client.buildUI();

    }

    public boolean setInfected(String id) {
        server.setInfected(id);
        return true;
    }

    public boolean checkInfected(String id) {
        server.checkInfected(id);
        return true;
    }

    public boolean makeConnect(String s1, String s2) {
        server.makeConnect(s1, s2);
        return true;
    }

    protected void buildUI() {
        Frame f = new Frame();
        GridBagLayout gridbag = new GridBagLayout();
        GridBagConstraints c = new GridBagConstraints();
        f.setLayout(gridbag);
        f.addNotify();
        c.fill = GridBagConstraints.BOTH;
        c.gridwidth = GridBagConstraints.REMAINDER;
        Canvas canvas1 = new java.awt.Canvas();
        canvas1.setSize(500, 500);
        canvas1.setBackground(Color.white);
        gridbag.setConstraints(canvas1, c);
        f.add(canvas1);
        String name = null;
        Label label1 = new java.awt.Label("Your name: " + name);
        label1.setSize(100, 30);
        gridbag.setConstraints(label1, c);
        f.add(label1);
        f.setSize(500, 500);
        f.show();
        GUI = canvas1;
        buffer = GUI.createImage(f.getSize().width, f.getSize().height);


    }

}


