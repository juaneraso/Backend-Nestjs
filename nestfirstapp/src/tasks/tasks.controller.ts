import { Controller,Get } from '@nestjs/common';

@Controller('tasks')   //decorador
export class TasksController {
 
  @Get()  
  helloworld(){
   return "hello world";
  }


}
