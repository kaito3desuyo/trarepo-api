import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class UpdateStationParam {
    @ApiProperty()
    @IsUUID()
    stationId!: string;
}
