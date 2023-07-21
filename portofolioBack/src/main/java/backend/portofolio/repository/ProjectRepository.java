package backend.portofolio.repository;

import backend.portofolio.models.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import java.io.Serializable;

public interface ProjectRepository extends JpaRepository<Project, Serializable> {
}