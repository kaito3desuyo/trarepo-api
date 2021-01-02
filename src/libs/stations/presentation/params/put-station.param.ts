import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class PutStationParam {
    @ApiProperty()
    @IsUUID()
    stationId!: string;
}
