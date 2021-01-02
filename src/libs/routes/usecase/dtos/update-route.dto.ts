import { ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { ERouteType } from '../../domain/route-type.enum';
import { ValidatableRouteDto } from './validatable-route.dto';

export class UpdateRouteDto extends ValidatableRouteDto {
    @IsOptional()
    @Exclude()
    routeId?: string;

    @IsOptional()
    @Exclude()
    agencyId?: string;

    @ApiPropertyOptional({ type: 'string', nullable: true })
    @IsOptional()
    routeCode?: string | null;

    @ApiPropertyOptional({ type: 'string', nullable: true })
    @IsOptional()
    routeShortName?: string | null;

    @ApiPropertyOptional({ type: 'string', nullable: true })
    @IsOptional()
    routeLongName?: string | null;

    @ApiPropertyOptional({ type: 'string', nullable: true })
    @IsOptional()
    routeDescription?: string | null;

    @IsOptional()
    @Exclude()
    routeType?: ERouteType;

    @ApiPropertyOptional({ type: 'string', nullable: true })
    @IsOptional()
    routeUrl?: string | null;

    @ApiPropertyOptional({ type: 'string', nullable: true })
    @IsOptional()
    routeColor?: string | null;

    @ApiPropertyOptional({ type: 'string', nullable: true })
    @IsOptional()
    routeTextColor?: string | null;

    @ApiPropertyOptional({ type: 'number', nullable: true })
    @IsOptional()
    routeSortOrder?: number | null;
}
