import { IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetStationByIdParam {
    @ApiProperty()
    @IsUUID()
    stationId: string;
}
