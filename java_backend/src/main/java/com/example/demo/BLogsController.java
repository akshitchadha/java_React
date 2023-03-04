package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BLogsController {
    @Autowired
    Blogservice blogservice;



    @GetMapping("blogs")
    public List<BlogPreview> getBlogPreview() {
        return blogservice.getBlogsPReview();
    }


    @GetMapping("blogdetail/{id}")
    public BlogBody getBlogBody(@PathVariable("id") int blogId) {
        return blogservice.getBlogbody(blogId);
    }


    @PostMapping("/createblog")
    public String createBlog(@RequestBody Blog blog) {

      //   System.out.println(DemoApplication.blogs);
        return blogservice.postBlog(blog);

    }

    @DeleteMapping("deleteblog/{id}")
    public String  deleteBlog(@PathVariable("id") int blogId) {

        return blogservice.deleteBlog(blogId);
    }

    }
