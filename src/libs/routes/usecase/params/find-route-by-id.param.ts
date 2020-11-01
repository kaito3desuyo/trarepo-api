import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class FindRouteByIdParam {
    @ApiProperty()
    @IsUUID()
    routeId: string;
}
