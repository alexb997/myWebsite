package backend.portofolio.controllers;

import backend.portofolio.models.Project;
import backend.portofolio.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProjectController
{
    @Autowired
    ProjectService projectsService;

    @GetMapping("/project")
    private List<Project> getAllProjects()
    {
        return projectsService.getAllProjects();
    }

    @GetMapping("/project/{projectid}")
    private Project getProjects(@PathVariable("projectid") int projectid)
    {
        return projectsService.getProjectsById(projectid);
    }

    @DeleteMapping("/projects/{id}")
    private void deleteBook(@PathVariable("id") int id)
    {
        projectsService.delete(id);
    }

    @PostMapping("/projects")
    private long saveBook(@RequestBody Project projects)
    {
        projectsService.saveOrUpdate(projects);
        return projects.getProjectId();
    }

    @PutMapping("/projects")
    private Project update(@RequestBody Project projects)
    {
        projectsService.saveOrUpdate(projects);
        return projects;
    }
}
