import { Body, Controller,Delete,Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';


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

  @Delete(':id')    
  deleteTask(@Param('id') id: string){
    this.tasksService.deleteTask(id);
   }

  @Patch(":id")
  updateTask(@Param("id") id:string, @Body() updatedFields: UpdateTaskDto){
   return  this.tasksService.updateTask(id,updatedFields)
  }

}
