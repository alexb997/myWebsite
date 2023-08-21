package backend.portofolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import backend.portofolio.models.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Integer> {
    
}
