import {Provide} from '@midwayjs/core';

@Provide()
export class DefaultService {
  // 登陆接口
  async getDefault(): Promise<any> {
    return "welcome to midwayjs!"
  }
}
