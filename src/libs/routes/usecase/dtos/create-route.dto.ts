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

    @ApiProperty({ enum: ERouteType })
    routeType!: ERouteType;

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
