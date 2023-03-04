package com.example.demo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class Blogservice {


    public List<BlogPreview> getBlogsPReview() {

        List<BlogPreview> blogPreviews = new ArrayList<>();

        for (int i = 0; i <= DemoApplication.blogs.size(); i++) {

            if (DemoApplication.blogs.get(i) != null) {
                blogPreviews.add(new BlogPreview(DemoApplication.blogs.get(i).
                        getTitle(), DemoApplication.blogs.get(i).getAuthor(),
                        DemoApplication.blogs.get(i).getId()));
            }
        }
        return blogPreviews;
    }


    public BlogBody getBlogbody(int blogId) {

        return new BlogBody(DemoApplication.blogs.get(blogId).getBody());
    }


    public String postBlog(Blog blog)
    {
        Integer id=null;
        Set<Integer> integers = DemoApplication.blogs.keySet();
        if (integers.isEmpty())
        {
            id=0;
        }
        else
        {
            id=DemoApplication.blogs.keySet().stream().max(Integer::compareTo).get()+1;
        }


        blog.setId(id);
        DemoApplication.blogs.put(id,blog);
        return "blog post created";
    }


    public  String deleteBlog(int id)
    {
        String title=DemoApplication.blogs.get(id).getTitle();
        DemoApplication.blogs.remove(id);
        return "blog with title : "+title +"deleted";
    }
}
