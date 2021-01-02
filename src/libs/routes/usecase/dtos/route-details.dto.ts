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
    routeCode!: string | null;

    @ApiProperty({
        nullable: true,
    })
    routeShortName!: string | null;

    @ApiProperty({
        nullable: true,
    })
    routeLongName!: string | null;

    @ApiProperty({ nullable: true })
    routeDescription!: string | null;

    @ApiProperty({ enum: ERouteType })
    routeType!: ERouteType;

    @ApiProperty({ nullable: true })
    routeUrl!: string | null;

    @ApiProperty({ nullable: true })
    routeColor!: string | null;

    @ApiProperty({ nullable: true })
    routeTextColor!: string | null;

    @ApiProperty({ nullable: true })
    routeSortOrder!: number | null;
}
