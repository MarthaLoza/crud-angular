import { Component, HostBinding, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { Game } from '../../models/Game';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  games: any = []

  constructor(private gamesService: GamesService){ }

  ngOnInit(){
    this.getGames();
  }

  getGames(){    
    this.gamesService.getGames().subscribe(
      res => {
        this.games = res;
      },
      err => console.log(err)      
    )
  }

  deleteGame(id: string){
    this.gamesService.deleteGame(id).subscribe(
      res => {
        console.log(res);
        this.getGames();     
      },
      err => console.log(err) 
    )
    
  }

}
