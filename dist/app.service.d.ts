import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
export declare class AppService {
    private readonly httpService;
    constructor(httpService: HttpService);
    getGithubRepo(): Observable<string>;
    getHello(): string;
}
