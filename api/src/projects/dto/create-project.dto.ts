import { IsString, IsUrl } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsUrl()
  link: string;

  @IsUrl()
  image: string;
}
