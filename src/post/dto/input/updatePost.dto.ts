import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './createPost.dto';
import { IsInt } from 'class-validator';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @IsInt()
  id: number;
}
