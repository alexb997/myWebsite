package backend.portofolio.services;

import backend.portofolio.models.Comment;
import backend.portofolio.repository.CommentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    public List<Comment> getAll()
    {
        return commentRepository.findAll();
    }

    public Comment getById(Integer id)
    {
        return commentRepository.findById(id).orElse(null);
    }

    public Comment create(Comment comment)
    {
        return commentRepository.save(comment);
    }

    public Comment update(Comment comment)
    {
        Comment oldComment = commentRepository.findById(comment.getId()).orElse(null);
        oldComment.setContent(comment.getContent());
        return commentRepository.save(oldComment);
    }

    public Integer delete(Integer id)
    {
        commentRepository.deleteById(id);
        return id;
    }
}
