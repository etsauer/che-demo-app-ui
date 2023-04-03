import { Component, OnInit } from '@angular/core';
import { RandomThoughtsService } from '../random-thoughts.service';
import { RandomThought } from '../dto/random-thought';

@Component({
  selector: 'app-random-thoughts',
  templateUrl: './random-thoughts.component.html',
  styleUrls: ['./random-thoughts.component.sass']
})
export class RandomThoughtsComponent  implements OnInit {

  thoughts: RandomThought[] = [];

  constructor(private thoughtsService: RandomThoughtsService){}

  getThoughts(): void {
    this.thoughtsService.getThoughts().subscribe(randomThoughts => this.thoughts = randomThoughts);
  }

  ngOnInit(): void {
    this.getThoughts();
  }

}
