import { Body, Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { ApiKeyReq } from './req/api.key.req';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

 @Post()
 getApiKey(@Body() req : ApiKeyReq) : Observable<string> {
  return this.appService.getApiKey(req);
 }

  @Get()
  getGithubRepo() : Observable<string> {
    return this.appService.getGithubRepo();
  }
}
