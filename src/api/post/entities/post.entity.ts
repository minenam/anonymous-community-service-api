import { ApiProperty } from '@nestjs/swagger';
import { CommonEntity } from '../../../common/entities/common-entity';
import { Column, Entity } from 'typeorm';
import { Length, Matches } from 'class-validator';

/**
 * @code writer 남혜민
 * @description post 모델 정의
 */
@Entity({
  name: 'post',
})
export class PostEntity extends CommonEntity {
  @Length(1, 20)
  @ApiProperty({
    example: '제목입니다.',
    required: true,
  })
  @Column({ type: 'char', length: 20, nullable: false, comment: '제목' })
  title: string;

  @Length(1, 200)
  @ApiProperty({
    example: '본문입니다.',
    required: true,
  })
  @Column({ type: 'char', length: 200, nullable: false, comment: '본문' })
  content: string;

  @Length(6)
  @Matches('^(?=.*?[0-9]).{6,}$')
  @ApiProperty({
    example: 'paSS123456',
    required: true,
  })
  @Column({ type: 'varchar', length: 30, nullable: false, comment: '비밀번호' })
  password: string;
}
