package backend.portofolio.models;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.Accessors;

@Getter
@Setter
@Accessors(chain=true)
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "PROJECTS")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer projectId;
    private String projectName;
    private String projectDescription;
    private String projectImgUrl;
    private String status;

    @Override
    public String toString() {
        return "Project{" +
                "projectId=" + projectId +
                ", projectName='" + projectName + '\'' +
                ", projectDescription='" + projectDescription + '\'' +
                ", projectImgUrl='" + projectImgUrl + '\'' +
                ", status='" + status + '\'' +
                '}';
    }
}
