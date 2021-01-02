import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { ERouteType } from '../../domain/route-type.enum';
import { ValidatableRouteDto } from './validatable-route.dto';

export class CreateRouteDto extends ValidatableRouteDto {
    @IsOptional()
    @Exclude()
    routeId?: string;

    @ApiProperty()
    agencyId!: string;

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

    @ApiProperty({ enum: ERouteType })
    routeType!: ERouteType;

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
