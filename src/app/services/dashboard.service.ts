import { Injectable } from '@angular/core';
import { STATS } from "../data/stats.mock"

@Injectable()
export class DashboardService {
    getStats():Promise<any> {
        return Promise.resolve(STATS);
    }
}