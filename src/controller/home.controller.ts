import {Controller, Get, Query, Inject} from '@midwayjs/core';
import {HomeService} from "../service/home.service";

@Controller('/home')
export class HomeController {
    @Inject()
    homeService: HomeService

    @Get('/homeList')
    async home(@Query("page") page: string, @Query("size") size: string) {
        return await this.homeService.getHomeList(parseInt(page), parseInt(size));
    }
}
