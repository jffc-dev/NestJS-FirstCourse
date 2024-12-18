import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class UpdateCarDto {
  @IsUUID()
  @IsString()
  @IsOptional()
  readonly id?: string;

  @IsString({ message: 'Brand must be a string' })
  @IsOptional()
  readonly brand?: string;

  @IsString()
  @IsOptional()
  @MinLength(3)
  readonly model?: string;
}
