import { BadRequestException, Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CommonResponse } from '../../common/responses/common.response';
import { PostAPIDocs } from './docs/post.docs';
import { PasswordParams } from './dtos/passwordParams.dto';
import { PostInputDto } from './dtos/postInput.dto';
import { PostService } from './post.service';

@ApiTags('user')
@Controller('api/posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  /**
   * @code writer 남혜민
   * @description 게시글 생성 API
   *
   * @POST ('/api/posts')
   * @param createPostDto
   * @returns json
   */
  @Post()
  @ApiOperation(PostAPIDocs.CreateOperation())
  @ApiOkResponse(CommonResponse.OkResponse())
  @ApiBadRequestResponse(CommonResponse.BadRequestException())
  async createNewPost(@Body() postInputDto: PostInputDto) {
    return await this.postService.createPost(postInputDto);
  }

  /**
   * @code writer 남혜민
   * @description 게시글 전체 조회 API
   *
   * @GET ('/api/posts')
   * @returns json array
   */
  @Get()
  @ApiOperation(PostAPIDocs.GetListOperation())
  @ApiOkResponse(CommonResponse.OkResponse())
  @ApiBadRequestResponse(CommonResponse.BadRequestException())
  async getPostsList() {
    return await this.postService.findPostsList();
  }

  /**
   * @code writer 남혜민
   * @description 특정 게시글 상세 조회 API
   *
   * @GET ('/api/posts/:id')
   * @returns json
   */
  @Get(':id')
  @ApiOperation(PostAPIDocs.GetByIdOperation())
  @ApiOkResponse(CommonResponse.OkResponse())
  @ApiBadRequestResponse(CommonResponse.BadRequestException())
  async getPostDetail(@Param('id', ParseIntPipe) id: number) {
    return await this.postService.findById(id);
  }

  /**
   * @code writer 남혜민
   * @description 게시글 수정 API
   *
   * @PUT ('/api/posts/:id')
   * @returns json
   */
  @Put(':id')
  @ApiOperation(PostAPIDocs.UpdateOperation())
  @ApiOkResponse(CommonResponse.OkResponse())
  @ApiBadRequestResponse(CommonResponse.BadRequestException())
  async updatePost(
    @Param('id', ParseIntPipe) id: number,
    @Body() postInputDto: PostInputDto,
  ) {
    return await this.postService.update(id, postInputDto);
  }

  /**
   * @code writer 남혜민
   * @description 게시글 직접 삭제 API
   *
   * @DELETE ('/api/posts/:id')
   * @returns json
   */
  @Delete(':id')
  @ApiOperation(PostAPIDocs.DeleteByIdOperation())
  @ApiOkResponse(CommonResponse.OkResponse())
  @ApiBadRequestResponse(CommonResponse.BadRequestException())
  async deleteDirectPost(
    @Param('id', ParseIntPipe) id: number,
    @Body('password') passwordParams: PasswordParams,
  ) {
    return await this.postService.deletePost(id, passwordParams);
  }
}
