import { Body, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostInputDto } from './dtos/postInput.dto';
import { PostDto } from './dtos/post.dto';
import { postsListDto } from './dtos/postsList.dto';
import { PostEntity } from './entities/post.entity';
import { PasswordParams } from './dtos/passwordParams.dto';
import * as bcrypt from 'bcrypt';
import { Pagination, PaginationOptions } from '../paginate';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  /**
   * @code writer 남혜민
   * @description 게시글 생성 API
   *
   * @param postInputDto title, content, password
   *
   * @return json
   */
  async createPost(postInputDto: PostInputDto) {
    postInputDto.password = await bcrypt.hash(postInputDto.password, 10);
    const newPost = this.postRepository.create(postInputDto);
    await this.postRepository.save(newPost);
    return newPost;
  }

  /**
   * @code writer 남혜민
   * @description 게시글 전체 조회 API
   *
   * @param take 페이지
   * @param skip 페이지당 개수
   *
   * @return json array
   */
  public async findPostsList(options: PaginationOptions) {
    const { take, page } = options;
    const [results, total] = await this.postRepository.findAndCount({
      take: take,
      skip: take * (page - 1),
      order: { createdAt: 'DESC' },
    });
    return results.map((post) => new postsListDto(post));
  }

  /**
   * @code writer 남혜민
   * @description 특정 게시글 상세 조회 API
   *
   * @param id 게시글 id
   *
   * @return json
   */
  async findById(id: number) {
    const post = await this.postRepository.findOne({ where: { id } });

    if (!post) {
      throw new NotFoundException('해당 게시글이 존재하지 않습니다.');
    }
    return new PostDto(post);
  }

  /**
   * @code writer 남혜민
   * @description 게시글 수정 API
   *
   * @param id 게시글 id
   *
   * @return json
   */
  async update(id: number, postInputDto: PostInputDto) {
    const previousPost = await this.postRepository.findOne({ where: { id } });
    if (!previousPost) {
      throw new NotFoundException('해당 게시글이 존재하지 않습니다.');
    }
    const validatePassword = await bcrypt.compare(postInputDto.password, previousPost.password);
    if (!validatePassword) {
      throw new ForbiddenException('게시글 관리 권한이 없습니다.');
    }
    const updatedPostResult = await this.postRepository.save({
      ...previousPost,
      ...postInputDto,
    });
    return updatedPostResult;
  }

  /**
   * @code writer 남혜민
   * @description 게시글 삭제 API
   *
   * @param id 게시글 id
   * @param password 비밀번호
   *
   * @return json | error
   */
  async deletePost(id: number, passwordParams: PasswordParams) {
    // const password = 비밀번호 해독
    const post = await this.postRepository.findOne({ where: { id } });
    if (!post) {
      return new NotFoundException('해당 게시글이 존재하지 않습니다.');
    }
    const validatePassword = await bcrypt.compare(passwordParams.password, post.password);
    if (!validatePassword) {
      throw new ForbiddenException('게시글 관리 권한이 없습니다.');
    }
    return await this.postRepository.delete({ id });
  }
}
