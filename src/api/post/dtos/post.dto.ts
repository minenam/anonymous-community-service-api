import { OmitType } from '@nestjs/swagger';
import { PostEntity } from '../entities/post.entity';

/**
 * @code writer 남혜민
 * @description PostDto
 */
export class PostDto extends OmitType(PostEntity, ['password', 'deletedAt']) {
  constructor(postEntity: PostEntity) {
    super();
    this.id = postEntity.id;
    this.title = postEntity.title;
    this.content = postEntity.content;
    this.createdAt = postEntity.createdAt;
    this.updatedAt = postEntity.updatedAt;
  }
}
