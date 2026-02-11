import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from '../entity/posts.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from '../dto/input/createPost.dto';
import { UpdatePostDto } from '../dto/input/updatePost.dto';
import { BadRequestException } from '@nestjs/common';
import { SearchParamsDto } from '../dto/input/searchParams.dto';

export class PostService {
  constructor(
    @InjectRepository(Posts)
    private readonly postsRepository: Repository<Posts>,
  ) {}

  async create(input: CreatePostDto) {
    const post = this.postsRepository.create(input);

    return await this.postsRepository.save(post);
  }

  async update(input: UpdatePostDto) {
    const existingPost = await this.postsRepository.findOneBy({
      id: input.id,
    });

    if (!existingPost) {
      throw new BadRequestException('Post does not exist');
    }

    const newPost = this.postsRepository.create(input);

    return await this.postsRepository.save(newPost);
  }

  async delete(id: number) {
    const existingPost = await this.postsRepository.findOneBy({ id });

    if (!existingPost) {
      throw new BadRequestException('Post does not exist');
    }

    await this.postsRepository.delete(id);

    return;
  }

  async findAll(searchParams?: SearchParamsDto) {
    return;
  }
}
