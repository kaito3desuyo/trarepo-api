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
    routeCode?: string;

    @ApiPropertyOptional({ nullable: true })
    @IsOptional()
    routeShortName?: string;

    @ApiPropertyOptional({ nullable: true })
    @IsOptional()
    routeLongName?: string;

    @ApiPropertyOptional({ nullable: true })
    @IsOptional()
    routeDescription?: string;

    @ApiPropertyOptional({ enum: ERouteType })
    @IsOptional()
    routeType?: ERouteType;

    @ApiPropertyOptional({ nullable: true })
    @IsOptional()
    routeUrl?: string;

    @ApiPropertyOptional({ nullable: true })
    @IsOptional()
    routeColor?: string;

    @ApiPropertyOptional({ nullable: true })
    @IsOptional()
    routeTextColor?: string;

    @ApiPropertyOptional({ nullable: true })
    @IsOptional()
    routeSortOrder?: number;
}
