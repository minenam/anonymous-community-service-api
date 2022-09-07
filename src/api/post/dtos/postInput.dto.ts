import { ApiProperty, PickType } from '@nestjs/swagger';
import { Length, Matches } from 'class-validator';
import { PostEntity } from '../entities/post.entity';

/**
 * @code writer 남혜민
 * @description CreatePostDto
 */
export class PostInputDto {
  @Length(1, 20)
  @ApiProperty({
    example: '제목😀입니다.',
    required: true,
  })
  title: PostEntity['title'];

  @Length(1, 200)
  @ApiProperty({
    example: '본문★입니다.😀',
    required: true,
  })
  content: PostEntity['content'];

  @Length(6)
  @Matches(/^(?=.*?[0-9]).{6,}$/, {
    message: 'password only accpets including at least one of number',
  })
  @ApiProperty({
    example: 'paSS123456',
    required: true,
  })
  password: PostEntity['password'];
}
