import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  imports: [RouterLink],
  templateUrl: './taskDetail.html',
  styleUrl: './taskDetail.css',
})
export class TaskDetail {
  id = input<number>();
}
