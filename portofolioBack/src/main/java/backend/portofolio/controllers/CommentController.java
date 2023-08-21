package backend.portofolio.controllers;

import backend.portofolio.models.Comment;
import backend.portofolio.services.CommentService;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comment")
@Slf4j
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CommentController {
    @Autowired
    CommentService commentService;

    @GetMapping("/")
    public ResponseEntity<List<Comment>> getAllComments()
    {
        return ResponseEntity.ok(commentService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Comment>  getComments(@PathVariable("id") Integer id)
    {
        Comment comment = commentService.getById(id);
        if (comment==null) {
            log.error("Id " + id + " is not existed");
            ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok(comment);
    }

    @DeleteMapping("/{id}")
    public void deleteComment(@PathVariable("id") int id){
        commentService.delete(id);
    }

    @PostMapping("/post")
    public ResponseEntity<Comment>  saveComment( @RequestBody Comment comment){
        return ResponseEntity.ok(commentService.create(comment));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Comment> updateComment(@RequestBody Comment comment) {
        return ResponseEntity.ok(commentService.update(comment));
    }
}
