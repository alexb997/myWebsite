package backend.portofolio.models;

import jakarta.persistence.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "projects")
@Getter
@Setter
@NoArgsConstructor
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long projectId;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "imgURL")
    private String imgUrl;

    @Column(name = "status")
    private String status;

    public Project(String name, String description, String imgUrl, String status) {
        super();
        this.name = name;
        this.description = description;
        this.imgUrl = imgUrl;
        this.status = status;
    }

    @Override
    public String toString() {
        return "Project{" +
                "projectId=" + projectId +
                ", projectName='" + name + '\'' +
                ", projectDescription='" + description + '\'' +
                ", projectImgUrl='" + imgUrl + '\'' +
                ", status='" + status + '\'' +
                '}';
    }
}
