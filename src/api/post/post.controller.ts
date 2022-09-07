import { Controller, Get } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CommonResponse } from '../../common/responses/common.response';
import { PostAPIDocs } from './docs/post.docs';
import { PostService } from './post.service';

@ApiTags('user')
@Controller('user')
export class PostController {
  constructor(private readonly postService: PostService) {}

  /**
   * @code writer 작성자명
   * @description API 설명
   *
   * @POST ('/user')
   *
   * @returns json
   */
  @Get()
  @ApiOperation(PostAPIDocs.usersOperation())
  @ApiOkResponse(CommonResponse.OkResponse())
  @ApiBadRequestResponse(CommonResponse.BadRequestException())
  async user() {
    return this.postService.user();
  }
}
