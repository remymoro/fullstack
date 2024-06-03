import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project } from './entities/project.entity';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService) {}
    @Post()
    create(@Body() createProjectDto: CreateProjectDto): Promise<Project> {
      return this.projectsService.create(createProjectDto);
    }


    @Get()
    findAll()
    {
      return this.projectsService.findAll();
    }


    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
      return this.projectsService.remove(+id);
    }


}
