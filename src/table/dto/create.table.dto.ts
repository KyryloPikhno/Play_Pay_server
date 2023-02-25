import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
export class CreateTableDto {
  @IsString()
  companyName: string;

  @IsString()
  gameName: string;

  @IsNumber()
  totalPrice: number;

  @IsString()
  Currency: string;
}
