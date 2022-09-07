import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  /**
   * @code writer 작성자명
   * @description 자유게시판 생성 API
   *
   * @param
   *
   * @return
   */
  async user() {
    return 'user API!';
  }
}
