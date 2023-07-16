package backend.portofolio.services;

import backend.portofolio.models.Project;
import backend.portofolio.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProjectService
{
    @Autowired
    ProjectRepository projectRepository;

    public List<Project> getAllProjects()
    {
        List<Project> projects = new ArrayList<Project>();
        projectRepository.findAll().forEach(projects1 -> projects.add(projects1));
        return projects;
    }

    public Project getProjectsById(int id)
    {
        return projectRepository.findById(id).get();
    }

    public void saveOrUpdate(Project projects)
    {
        projectRepository.save(projects);
    }

    public void delete(int projectid)
    {
        projectRepository.deleteById(projectid);
    }

    public void update(Project projects, int projectid)
    {
        projectRepository.save(projects);
    }
}