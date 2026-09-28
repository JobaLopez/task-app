import { Component, input } from '@angular/core';

@Component({
  selector: 'app-task-detail',
  imports: [],
  templateUrl: './taskDetail.html',
  styleUrl: './taskDetail.css',
})
export class TaskDetail {
  id = input<number>();
}
