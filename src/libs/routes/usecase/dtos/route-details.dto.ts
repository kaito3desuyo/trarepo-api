import { ApiProperty } from '@nestjs/swagger';
import { ERouteType } from '../../domain/route-type.enum';
import { BaseRouteDto } from './base-route.dto';

export class RouteDetailsDto extends BaseRouteDto {
    @ApiProperty({ type: 'string' })
    routeId!: string;

    @ApiProperty({ type: 'string' })
    agencyId!: string;

    @ApiProperty({
        type: 'string',
        nullable: true,
    })
    routeCode!: string | null;

    @ApiProperty({
        type: 'string',
        nullable: true,
    })
    routeShortName!: string | null;

    @ApiProperty({
        type: 'string',
        nullable: true,
    })
    routeLongName!: string | null;

    @ApiProperty({ type: 'string', nullable: true })
    routeDescription!: string | null;

    @ApiProperty({ type: 'enum', enum: ERouteType })
    routeType!: ERouteType;

    @ApiProperty({ type: 'string', nullable: true })
    routeUrl!: string | null;

    @ApiProperty({ type: 'string', nullable: true })
    routeColor!: string | null;

    @ApiProperty({ type: 'string', nullable: true })
    routeTextColor!: string | null;

    @ApiProperty({ type: 'number', nullable: true })
    routeSortOrder!: number | null;
}
