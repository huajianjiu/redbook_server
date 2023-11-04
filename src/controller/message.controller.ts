import {Inject, Controller, Get, Query} from '@midwayjs/core';
import {MessageService} from "../service/message.service";

@Controller('/message')
export class MessageController {
  @Inject()
  messageService: MessageService;

  @Get('/messageList')
  async messageList(@Query('page') page: string, @Query('size') size: string) {
    return await this.messageService.getMessageList(parseInt(page), parseInt(size));
  }
}
