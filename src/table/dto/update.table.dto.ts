import { IsBoolean, IsNotEmpty, IsNumber, IsString, Matches, Max, MaxLength, Min, MinLength } from "class-validator";

export class UpdateTableDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(20)
  companyName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(20)
  @Matches(/^[a-zA-Z0-9]+ ?([a-zA-Z0-9]+$){0,20}$/, {
    message: "The game name didn't match with RegExp :(",
  })
  gameName: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(1000000)
  totalPrice: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(2)
  currency: string;

  @IsBoolean()
  @IsNotEmpty()
  status: boolean;
}
