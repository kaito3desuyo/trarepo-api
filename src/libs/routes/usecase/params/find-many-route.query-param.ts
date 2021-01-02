import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsPositive } from 'class-validator';

export class FindManyRouteQueryParam {
    @ApiProperty()
    @Type(() => Number)
    @IsPositive()
    page!: number;

    @ApiProperty()
    @Type(() => Number)
    @IsPositive()
    per!: number;
}
