import { Body, Controller,Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/task.dto';


@Controller('tasks')   //decorador
export class TasksController {

  constructor( private tasksService : TasksService){

  }
 
  @Get()  
  getAlltasks(){
  //  return "hello world";
   return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() newTask:CreateTaskDto){
   
    return this.tasksService.createTask(newTask.title,newTask.description);
  }


}
