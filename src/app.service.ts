import { Injectable} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { log } from 'console';
import { response } from 'express';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiKeyReq } from './req/api.key.req';


@Injectable()
export class AppService {

  constructor(private readonly httpService: HttpService) {}

  getApiKey(req: ApiKeyReq) : Observable<string> {
    
    const url = `https://api.github.com/repos/A7ak/filename-github/contents${req.path}`;
    const token : string = req.token
    const headers = {
      Authorization: token,
      Accept: 'application/vnd.github.v3.raw',
    };
    console.log("post req called")
    console.log(url)
   
    return this.httpService.get(url , {headers}).pipe(
      map((response: AxiosResponse) => {
       const data = response.data.split('\n')
       for(let i = 0 ; i < data.length ; i++) {
        if(data[i].includes(req.fileName)) {
          var key : string = data[i]
          if(key.trimEnd().endsWith('(') || key.trimEnd().endsWith('=')) {
          return data[i]+data[i+1]
        } else {
          return data[i]
        } 
       }
      }
       return 'no data found'
      }),
    );
  }


  getGithubRepo() : Observable<string>  {

    const url = 'https://api.github.com/repos/A7ak/filename-github/contents/src/app.service.ts';
    const token = `token`
    const headers = {
      Authorization: token,
      Accept: 'application/vnd.github.v3.raw',
    };
    console.log("data")
    return this.httpService.get(url,{ headers}).pipe(
      map((response: AxiosResponse) => {
       const data = response.data.split('\n')
       for(let i = 0 ; i < data.length ; i++) {
        if(data[i].includes('console.log')) {
          return data[i]
        }
       }
      }),
    );
  }

  getHello(): string {
    return 'First nestjs project!';
  }
}