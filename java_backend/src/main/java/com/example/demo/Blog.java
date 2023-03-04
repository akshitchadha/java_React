package com.example.demo;

public class Blog {
    private String title;
    private String body;
    private String author;
    private int id;

    public Blog(String title, String body, String author, int id) {
        this.title = title;
        this.body = body;
        this.author = author;
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
}
