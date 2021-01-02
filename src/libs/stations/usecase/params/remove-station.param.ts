import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class RemoveStationParam {
    @ApiProperty()
    @IsUUID()
    stationId!: string;
}
