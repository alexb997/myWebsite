package backend.portofolio.controllers;

import backend.portofolio.models.Project;
import backend.portofolio.services.ProjectService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/project/")
@Slf4j
@RequiredArgsConstructor
public class ProjectController
{
    ProjectService projectsService;

    @GetMapping("/all")
    public ResponseEntity<List<Project>> getAllProjects()
    {
        return ResponseEntity.ok(projectsService.getAllProjects());
    }

    @GetMapping("/{projectid}")
    public ResponseEntity<Project>  getProjects(@PathVariable("projectid") int projectid)
    {
        Optional<Project> project = projectsService.getProjectsById(projectid);
        if (!project.isPresent()) {
            log.error("Id " + projectid + " is not existed");
            ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok(project.get());
    }

    @DeleteMapping("/{id}")
    public void deleteProject(@PathVariable("id") int id)
    {
        projectsService.delete(id);
    }

    @PostMapping("/post")
    public ResponseEntity  saveProject( @RequestBody Project project)
    {
        return ResponseEntity.ok(projectsService.create(project));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Project> updateProject(@PathVariable Long id, @RequestBody Project project) {
        if (!projectsService.getProjectsById(id).isPresent()) {
            log.error("Id " + id + " is not existed");
            ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok(projectsService.create(project));
    }
}
