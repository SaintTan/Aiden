import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import java.rmi.server.UnicastRemoteObject;

public class ClientGUI {
    private JPanel panel1;
    private JTabbedPane tabbedPane1;
    private JButton checkSubmit;
    private JTextField checkID;
    private JButton checkReset;
    private JTextField reportID;
    private JTextField reportDisease;
    private JButton reportSubmit;
    private JButton reportReset;
    private JButton clearSubmit;
    private JTextField clearID;
    private JPanel RejectType;
    private JLabel RejectChance;
    private JLabel RejectSpecific;
    private JLabel RejectReason;

    boolean infected = false;
    private Component GUI;
    private Image buffer;
    ServerInterface server;

    public ClientGUI(ServerInterface server) {
        this.server = server;

        checkReset.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                    RejectReason.setText("Reset");
                    RejectSpecific.setText("Reset");
            }
        });
        checkSubmit.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                try {
                    String[] status = server.checkInfected(server.getHash(Integer.parseInt(checkID.getText())));
                    RejectReason.setText(status[0]);
                    RejectSpecific.setText(status[1]);
                } catch (RemoteException remoteException) {
                    remoteException.printStackTrace();
                }
            }
        });
        reportReset.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                RejectReason.setText("Reset");
                RejectSpecific.setText("Reset");
            }
        });
        reportSubmit.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                try {
                    server.setInfected(server.getHash(Integer.parseInt(reportID.getText())),reportDisease.getText());
                } catch (RemoteException remoteException) {
                    remoteException.printStackTrace();
                }

            }
        });
        clearSubmit.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                try {
                    server.removeInfected(server.getHash(Integer.parseInt(clearID.getText())));
                } catch (RemoteException remoteException) {
                    remoteException.printStackTrace();
                }

            }
        });
    }

    public boolean setInfected(String id, String disease) throws RemoteException {
        server.setInfected(id, disease);
        return true;
    }

    public boolean checkInfected(String id) throws RemoteException{
        server.checkInfected(id);
        return true;
    }

    public boolean makeConnect(String s1, String s2) throws RemoteException{
        server.makeConnect(s1, s2);
        return true;
    }
    private void makeGUI(){
        JFrame frame = new JFrame("App");
        Server server = new Server();
        frame.setContentPane(new ClientGUI(server).panel1);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.pack();
        frame.setVisible(true);
    }
    public static void main(String[] args) {

        try {
            Registry registry = LocateRegistry.getRegistry(1888);
            ServerInterface stub = (ServerInterface) registry.lookup("Hello");
            String response = stub.sayHello();
            System.out.println("response: " + response);
            ClientGUI client = new ClientGUI(stub);
            client.makeGUI();

        } catch (Exception e) {
            System.err.println("Client exception: " + e.toString());
            e.printStackTrace();
        }


    }
}
