import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectsService {

    constructor(
        @InjectRepository(Project)
        private projectsRepository: Repository<Project>,
      ) {}


      create(createProjectDto: CreateProjectDto): Promise<Project> {
        const project = this.projectsRepository.create(createProjectDto);
        return this.projectsRepository.save(project);
      }


      findAll(){
        return this.projectsRepository.find()
      }



      async remove(id: number): Promise<void> {
        await this.projectsRepository.delete(id);
      }


}
