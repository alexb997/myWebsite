package backend.portofolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import backend.portofolio.models.Comment;

@Repository
public interface CommentRepository extends JpaRepository<Comment,Integer>{
    
}
