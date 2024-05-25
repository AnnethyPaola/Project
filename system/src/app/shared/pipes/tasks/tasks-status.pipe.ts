import { Pipe, PipeTransform } from '@angular/core';
import { TasksStatus } from '../../enums/tasks/tasks-status.enum';

@Pipe({
  name: 'TasksStatusPipe'
})
export class TasksStatusPipe implements PipeTransform {

  transform(value: TasksStatus): string {
    switch (value) {
      case TasksStatus.Pending:
        return 'Pendiente';
      case TasksStatus.Completed:
        return 'Completado';
      case TasksStatus.InProgress:
        return 'En proceso';
        case TasksStatus.Stopper:
          return 'En stoper';
      default:
        return 'Desconocido';
    }
  }


}
