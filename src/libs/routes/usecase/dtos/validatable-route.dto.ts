import {
    IsEnum,
    IsHexColor,
    IsNumber,
    IsPositive,
    IsString,
    IsUrl,
    IsUUID,
    Min,
} from 'class-validator';
import { ERouteType } from '../../domain/route-type.enum';
import { BaseRouteDto } from './base-route.dto';

export class ValidatableRouteDto extends BaseRouteDto {
    @IsUUID()
    routeId?: string;

    @IsUUID()
    agencyId?: string;

    @IsString()
    routeCode?: string;

    @IsString()
    routeShortName?: string;

    @IsString()
    routeLongName?: string;

    @IsString()
    routeDescription?: string;

    @IsEnum(ERouteType)
    routeType?: ERouteType;

    @IsUrl()
    routeUrl?: string;

    @IsHexColor()
    routeColor?: string;

    @IsHexColor()
    routeTextColor?: string;

    @IsNumber()
    @IsPositive()
    routeSortOrder?: number;
}
