import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class UpdateRouteParam {
    @ApiProperty()
    @IsUUID()
    routeId: string;
}
