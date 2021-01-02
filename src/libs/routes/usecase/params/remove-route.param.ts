import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class RemoveRouteParam {
    @ApiProperty()
    @IsUUID()
    routeId!: string;
}
