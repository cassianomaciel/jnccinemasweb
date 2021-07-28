import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/shared/model/Filme.model';
import { FilmeService } from 'src/app/shared/service/filme.service';

@Component({
  selector: 'app-filme-list',
  templateUrl: './filme-list.component.html',
  styleUrls: ['./filme-list.component.less']
})
export class FilmeListComponent implements OnInit {

  filmeSearch: Filme[];

  constructor(
    filmeSearch: Filme[],
    public filmeService : FilmeService
  ) { }

  ngOnInit(): void {
  }

  getFilmes(){
    this.filmeService.getMoviesWithFilter('nome','teste').subscribe(data=>{
      this.filmeSearch = data.content;

    });
  }

}
