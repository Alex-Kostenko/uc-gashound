import { IsEmail, IsEnum, IsOptional, IsString, Length } from 'class-validator';

import { Provider } from '.prisma/client';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiPropertyOptional()
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiPropertyOptional()
  @IsEnum(Provider)
  @IsOptional()
  provider?: Provider;

  @ApiPropertyOptional()
  @IsString()
  @Length(8, 255)
  @IsOptional()
  password?: string;

  @ApiPropertyOptional()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional()
  @IsOptional()
  lastName?: string;

  @ApiPropertyOptional()
  @IsOptional()
  city?: string;

  @ApiPropertyOptional()
  @IsOptional()
  nickName?: string;
}
