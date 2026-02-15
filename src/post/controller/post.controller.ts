import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { PostService } from '../service/post.service';
import { CreatePostDto } from '../dto/input/createPost.dto';
import { UpdatePostDto } from '../dto/input/updatePost.dto';

@Controller('posts')
export class PostController {
  constructor(private readonly service: PostService) {}

  @Get()
  async getAll() {
    return await this.service.findAll();
  }

  @Get('/:id')
  async getById(@Param('id') id: number) {
    return await this.service.findAll();
  }

  @Post()
  async create(@Body() input: CreatePostDto) {
    return await this.service.create(input);
  }

  @Patch()
  async update(@Body() input: UpdatePostDto) {
    return await this.service.update(input);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    await this.delete(id);
    return;
  }
}
