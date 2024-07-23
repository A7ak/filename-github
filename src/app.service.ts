import { Injectable} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { log } from 'console';
import { response } from 'express';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class AppService {

  constructor(private readonly httpService: HttpService) {}

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