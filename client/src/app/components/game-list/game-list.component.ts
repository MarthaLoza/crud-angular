import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent implements OnInit {
  constructor(private gamesService: GamesService){ }

  ngOnInit(){
    this.gamesService.getGames().subscribe(
      res => console.log(res),
      err => console.log(err)      
    )
  }
}