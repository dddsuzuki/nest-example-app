import { IsNotEmpty, IsString, IsEmail, MinLength, MaxLength } from 'class-validator';

export class EntryDto {

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(32)
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(32)
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(255)
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(64)
  address: string;

}
