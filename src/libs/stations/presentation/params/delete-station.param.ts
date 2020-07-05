import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class DeleteStationParam {
    @ApiProperty()
    @IsUUID()
    stationId: string;
}
