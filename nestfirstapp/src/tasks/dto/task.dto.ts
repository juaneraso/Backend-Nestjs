import { TaskStatus } from "../task.entity";
import { IsEnum, IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateTaskDto{
   @IsString()
   @IsNotEmpty()
   @MinLength(3)
   title : string;

   @IsString()
   description: string;
}

export class UpdateTaskDto{
  @IsString()
  @IsOptional()
  title ?: string ;    // Alguna vez los datos seran indefenidos 

  @IsString()
  @IsOptional()
  description ?: string ;

  @IsString()
  @IsOptional()
  @IsEnum(TaskStatus)
  // @IsIn([TaskStatus.PENDING,TaskStatus.IN_PROGRESS,TaskStatus.DONE])

  status ?: TaskStatus ;

}