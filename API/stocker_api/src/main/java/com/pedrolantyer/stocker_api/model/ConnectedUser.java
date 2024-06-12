package com.pedrolantyer.stocker_api.model;

public class ConnectedUser {
    private String username;
    private int id;
    private boolean connected;

    
    public ConnectedUser(){
        username = "";
        id = -1;
        connected = false;
    }
    public ConnectedUser(String usernameStr, int userId, boolean isConnected)
    {
        username = usernameStr;
        id = userId;
        connected = isConnected;
    }

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    public boolean isConnected() {
        return connected;
    }
    public void setConnected(boolean connected) {
        this.connected = connected;
    }
}
