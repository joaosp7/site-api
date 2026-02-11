import { ArrayNotEmpty, IsArray, IsOptional, IsString } from 'class-validator';

export class SearchParamsDto {
  @IsString()
  @IsOptional()
  shortName?: string;

  @IsString()
  @IsOptional()
  fullName?: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  @IsOptional()
  keywords?: string[];
}
