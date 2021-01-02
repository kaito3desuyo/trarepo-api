import { IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FindStationByIdParam {
    @ApiProperty()
    @IsUUID()
    stationId!: string;
}
