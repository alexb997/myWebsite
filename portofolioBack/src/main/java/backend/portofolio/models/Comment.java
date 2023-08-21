package backend.portofolio.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Comment {
    @Id
    @GeneratedValue
    private int id;
    @ManyToOne
    @JoinColumn(name="id", nullable=false)
    private int refferenceID;
    private String username;
    private String content;
}
