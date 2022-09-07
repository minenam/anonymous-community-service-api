import { OmitType, PickType } from '@nestjs/swagger';
import { PostEntity } from '../entities/post.entity';

export class postsListDto extends OmitType(PostEntity, [
  'password',
  'deletedAt',
]) {
  constructor(posts: PostEntity) {
    super();
    this.id = posts.id;
    this.title = posts.title;
    this.content = posts.content;
    this.createdAt = posts.createdAt;
    this.updatedAt = posts.updatedAt;
  }
}
