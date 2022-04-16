import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';

export class RegisterUserDTO {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly address: string;

  @IsBoolean()
  @IsOptional()
  readonly active: boolean;

  @IsNumber()
  @IsOptional()
  readonly role: number;
}
