package backend.portofolio.controllers;

import backend.portofolio.models.Project;
import backend.portofolio.services.ProjectService;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/project")
@Slf4j
public class ProjectController
{
    @Autowired
    ProjectService projectsService;

    @GetMapping("/")
    public ResponseEntity<List<Project>> getAllProjects()
    {
        return ResponseEntity.ok(projectsService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Project>  getProjects(@PathVariable("id") Integer id)
    {
        Project project = projectsService.getById(id);
        if (project==null) {
            log.error("Id " + id + " is not existed");
            ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok(project);
    }

    @DeleteMapping("/{id}")
    public void deleteProject(@PathVariable("id") int id){
        projectsService.delete(id);
    }

    @PostMapping("/post")
    public ResponseEntity<Project>  saveProject( @RequestBody Project project){
        return ResponseEntity.ok(projectsService.create(project));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Project> updateProject(@RequestBody Project project) {
        return ResponseEntity.ok(projectsService.update(project));
    }
}
