package backend.portofolio.models;

import org.hibernate.cache.spi.support.AbstractReadWriteAccess.Item;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Post {
    @Id
    @GeneratedValue
    private int id;
    
    @OneToMany(mappedBy="post")
    private List<Comment> comments;
    private String username;
    private String content;
    private String type;
}
