import { ApiProperty } from '@nestjs/swagger';
import { CommonEntity } from '../../../common/entities/common-entity';
import { Column, Entity } from 'typeorm';

/**
 * @code writer 남혜민
 * @description post 모델 정의
 */
@Entity({
  name: 'post',
})
export class PostEntity extends CommonEntity {
  @ApiProperty({
    example: '제목입니다.',
    required: true,
  })
  @Column({ type: 'char', length: 20, nullable: false, comment: '제목' })
  title: string;

  @ApiProperty({
    example: '본문입니다.',
    required: true,
  })
  @Column({ type: 'char', length: 200, nullable: false, comment: '본문' })
  content: string;

  @ApiProperty({
    example: '작성자용 비밀번호 입니다.',
    required: true,
  })
  @Column({ type: 'varchar', length: 30, nullable: false, comment: '비밀번호' })
  password: string;
}
