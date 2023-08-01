package backend.portofolio.services;

import backend.portofolio.models.Project;
import backend.portofolio.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

@RequiredArgsConstructor
public class ProjectService
{
    private ProjectRepository projectRepository;

    public List<Project> getAllProjects()
    {
        return projectRepository.findAll();
    }

    public Optional<Project> getProjectsById(long id)
    {
        return projectRepository.findById(id);
    }

    public Project create(Project project)
    {
        return projectRepository.save(project);
    }

    public void delete(long projectid)
    {
        projectRepository.deleteById(projectid);
    }

}