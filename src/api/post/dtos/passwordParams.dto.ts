import { ApiProperty } from '@nestjs/swagger';
import { Length, Matches } from 'class-validator';
import { PostEntity } from '../entities/post.entity';

export class PasswordParams {
  @Length(6)
  @Matches('^(?=.*?[0-9]).{6,}$')
  @ApiProperty({
    example: 'paSS123456',
    required: true,
  })
  password: PostEntity['password'];
}
