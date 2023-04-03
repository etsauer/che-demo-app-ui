import { Component, Input, OnInit } from '@angular/core';
import { RandomThoughtsService } from '../random-thoughts.service';
import { RandomThought } from '../dto/random-thought';

@Component({
  selector: 'app-add-random-thought',
  templateUrl: './add-random-thought.component.html',
  styleUrls: ['./add-random-thought.component.sass']
})
export class AddRandomThoughtComponent implements OnInit {

  constructor( private thoughtsService: RandomThoughtsService){}

  @Input()
  randomThought!: RandomThought;

  addThought(): void {
    this.thoughtsService.saveThought(this.randomThought).subscribe();
    this.randomThought = new RandomThought();
  }

  ngOnInit(): void {
    this.randomThought = new RandomThought();
  }

}
