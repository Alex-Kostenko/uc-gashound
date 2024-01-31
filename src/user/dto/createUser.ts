import { IsEmail, IsEnum, IsString, Length } from 'class-validator';

import { Provider } from '.prisma/client';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @IsEnum(Provider)
  @ApiPropertyOptional()
  provider?: Provider;

  @IsString()
  @ApiProperty()
  @Length(8, 255)
  password: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  nickName: string;
}
