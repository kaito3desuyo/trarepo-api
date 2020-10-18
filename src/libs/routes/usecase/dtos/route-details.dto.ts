import { ApiProperty } from '@nestjs/swagger';
import { ERouteType } from '../../domain/route-type.enum';
import { BaseRouteDto } from './base-route.dto';

export class RouteDetailsDto extends BaseRouteDto {
    @ApiProperty()
    routeId!: string;

    @ApiProperty()
    agencyId!: string;

    @ApiProperty({
        nullable: true,
    })
    routeCode!: string;

    @ApiProperty({
        nullable: true,
    })
    routeShortName!: string;

    @ApiProperty({
        nullable: true,
    })
    routeLongName!: string;

    @ApiProperty({ nullable: true })
    routeDescription!: string;

    @ApiProperty({ enum: ERouteType })
    routeType!: ERouteType;

    @ApiProperty({ nullable: true })
    routeUrl!: string;

    @ApiProperty({ nullable: true })
    routeColor!: string;

    @ApiProperty({ nullable: true })
    routeTextColor!: string;

    @ApiProperty({ nullable: true })
    routeSortOrder!: number;
}
