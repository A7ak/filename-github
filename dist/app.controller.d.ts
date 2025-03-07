import { AppService } from './app.service';
import { Observable } from 'rxjs';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getGithubRepo(): Observable<string>;
}
