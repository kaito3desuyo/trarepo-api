import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export class FindManyAgencyQueryParam {
    @ApiProperty()
    @Type(() => Number)
    @IsInt()
    page: number;

    @ApiProperty()
    @Type(() => Number)
    @IsInt()
    per: number;
}
