import {
  IsNotEmpty,
  IsString,
  IsNumber,
} from 'class-validator';

export class AddProductDTO {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @IsString()
  @IsNotEmpty()
  readonly description: string;
}
