import { PickType } from '@nestjs/swagger';
import { PostEntity } from '../entities/post.entity';

/**
 * @code writer 남혜민
 * @description UpdatePostDto
 */
export class UpdatePostDto extends PickType(PostEntity, ['title', 'content', 'password']) {
  constructor(postEntity: PostEntity) {
    super();
    this.title = postEntity.title;
    this.content = postEntity.content;
    this.password = postEntity.password;
  }
}
