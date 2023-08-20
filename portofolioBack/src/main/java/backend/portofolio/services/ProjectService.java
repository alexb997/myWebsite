package backend.portofolio.services;

import backend.portofolio.models.Project;
import backend.portofolio.repository.ProjectRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public List<Project> getAll()
    {
        return projectRepository.findAll();
    }

    public Project getById(Integer id)
    {
        return projectRepository.findById(id).orElse(null);
    }

    public Project create(Project project)
    {
        return projectRepository.save(project);
    }

    public Project update(Project project)
    {
        Project oldProject = projectRepository.findById(project.getId()).orElse(null);
        oldProject.setDescription(project.getDescription());
        oldProject.setName(project.getName());
        oldProject.setImgUrl(project.getImgUrl());
        oldProject.setStatus(project.getStatus());
        return projectRepository.save(oldProject);
    }

    public Integer delete(Integer id)
    {
        projectRepository.deleteById(id);
        return id;
    }

}