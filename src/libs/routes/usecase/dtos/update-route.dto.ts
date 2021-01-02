import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsUUID } from 'class-validator';
import { ERouteType } from '../../domain/route-type.enum';
import { ValidatableRouteDto } from './validatable-route.dto';

export class UpdateRouteDto extends ValidatableRouteDto {
    @ApiPropertyOptional()
    @IsOptional()
    routeId?: string;

    @ApiPropertyOptional()
    @IsUUID()
    agencyId?: string;

    @ApiPropertyOptional({ nullable: true })
    @IsOptional()
    routeCode?: string | null;

    @ApiPropertyOptional({ nullable: true })
    @IsOptional()
    routeShortName?: string | null;

    @ApiPropertyOptional({ nullable: true })
    @IsOptional()
    routeLongName?: string | null;

    @ApiPropertyOptional({ nullable: true })
    @IsOptional()
    routeDescription?: string | null;

    @ApiPropertyOptional({ enum: ERouteType })
    @IsOptional()
    routeType?: ERouteType;

    @ApiPropertyOptional({ nullable: true })
    @IsOptional()
    routeUrl?: string | null;

    @ApiPropertyOptional({ nullable: true })
    @IsOptional()
    routeColor?: string | null;

    @ApiPropertyOptional({ nullable: true })
    @IsOptional()
    routeTextColor?: string | null;

    @ApiPropertyOptional({ nullable: true })
    @IsOptional()
    routeSortOrder?: number | null;
}
