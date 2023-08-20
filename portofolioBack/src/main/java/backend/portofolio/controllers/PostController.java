package backend.portofolio.controllers;

import backend.portofolio.models.Post;
import backend.portofolio.services.PostService;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/post")
@Slf4j
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PostController
{
    @Autowired
    PostService postService;

    @GetMapping("/")
    public ResponseEntity<List<Post>> getAllPosts()
    {
        return ResponseEntity.ok(postService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Post>  getPosts(@PathVariable("id") Integer id)
    {
        Post post = postService.getById(id);
        if (post==null) {
            log.error("Id " + id + " is not existed");
            ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok(post);
    }

    @DeleteMapping("/{id}")
    public void deletePost(@PathVariable("id") int id){
        postService.delete(id);
    }

    @PostMapping("/post")
    public ResponseEntity<Post>  savePost( @RequestBody Post post){
        return ResponseEntity.ok(postService.create(post));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Post> updatePost(@RequestBody Post post) {
        return ResponseEntity.ok(postService.update(post));
    }
}
