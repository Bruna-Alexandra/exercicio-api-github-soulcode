import { GhApiService } from './../../services/gh-api.service';
import { Component, OnInit } from '@angular/core';
import { GhUser } from '../../models/ghUser';
import { GhRepos } from '../../models/ghRepos';

@Component({
  selector: 'app-gh-dialog',
  templateUrl: './gh-dialog.component.html',
  styleUrls: ['./gh-dialog.component.css']
})
export class GhDialogComponent implements OnInit {
  username: string = '' // variável que vai ser alterada pelo home
  user?: GhUser | null // ou user: GhUser | null = null
  userRepos: GhRepos[] | null = null

  constructor(
    private ghService: GhApiService // service que fizemos
  ) { }


  ngOnInit(): void {

    this.ghService.findUser(this.username)

      //isso vai ficar na espera por ser do tipo observable
      //ghService = instância? do service
      //findUser = método do service
      //(this.username) = parâmetro do método do service
      .subscribe((gUser) =>
      // gUser é do tipo ghUser, que vem da interface
      // também é parâmetro da arrow function
      // é o que é retornado da função findUser
      {
        this.user = gUser
      }
      )
    this.ghService.getRepos(this.username)
      .subscribe((gRepos) => {
        this.userRepos = gRepos
/*         while(this.userRepos.length > 5){
          this.userRepos.pop()
        } */
      }
      )
  }

}
