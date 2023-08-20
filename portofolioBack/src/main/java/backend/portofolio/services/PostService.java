package backend.portofolio.services;

import backend.portofolio.models.Post;
import backend.portofolio.repository.PostRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public List<Post> getAll()
    {
        return postRepository.findAll();
    }

    public Post getById(Integer id)
    {
        return postRepository.findById(id).orElse(null);
    }

    public Post create(Post post)
    {
        return postRepository.save(post);
    }

    public Post update(Post post)
    {
        Post oldPost = postRepository.findById(post.getId()).orElse(null);
        oldPost.setContent(post.getContent());
        oldPost.setUsername(post.getUsername());
        oldPost.setType(post.getType());
        return postRepository.save(oldPost);
    }

    public Integer delete(Integer id)
    {
        postRepository.deleteById(id);
        return id;
    }

}