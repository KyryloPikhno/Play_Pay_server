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
  @IsOptional()
  companyName: string;

  @IsString()
  @IsNotEmpty()
  gameName: string;

  @IsNumber()
  @IsOptional()
  totalPrice: number;

  @IsString()
  @Length(1)
  @IsEmail()
  Currency: string;
}
