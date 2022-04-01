import { GhRepos } from './../models/ghRepos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GhUser } from '../models/ghUser';

@Injectable()
export class GhApiService { 
    
  private readonly baseUrl: string = 'https://api.github.com/users'
  private readonly baseUrlRepo: string = 'https://api.github.com/users'
  arrayRepos: any

  constructor(
    private http: HttpClient
  ) { }

  findUser(username: string): Observable<GhUser> {  
    console.log("funçao findUser")
    return this.http.get<GhUser>(`${this.baseUrl}/${username}`)
  }
  getRepos(username: string): Observable<GhRepos[]> {
    this.arrayRepos = this.http.get<GhRepos[]>(`${this.baseUrlRepo}/${username}/repos`)
    return this.http.get<GhRepos[]>(`${this.baseUrlRepo}/${username}/repos`)
  }
}
/*   getUserRepos(username: string): Observable<GhRepos> {
    return this.http.get(`${this.baseUrlRepo}/${username}/repos`).
    pipe(
        map((item: any) => item.map((p: { name: any; stargazers_count: any; html_url: any; forks: any; description: any; }) => <GhRepos>
            {
                name: p.name,
                stars: p.stargazers_count,
                htmlUrl: p.html_url,
                forks: p.forks,
                description: p.description
            })));
}
} */