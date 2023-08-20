package backend.portofolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import backend.portofolio.models.Post;

public interface PostRepository extends JpaRepository<Post, Integer> {
    
}
