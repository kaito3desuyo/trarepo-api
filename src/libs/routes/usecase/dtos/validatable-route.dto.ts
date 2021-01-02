import {
    IsEnum,
    IsHexColor,
    IsNumber,
    IsPositive,
    IsString,
    IsUrl,
    IsUUID,
} from 'class-validator';
import { ERouteType } from '../../domain/route-type.enum';
import { BaseRouteDto } from './base-route.dto';

export class ValidatableRouteDto extends BaseRouteDto {
    @IsUUID()
    routeId?: string;

    @IsUUID()
    agencyId?: string;

    @IsString()
    routeCode?: string | null;

    @IsString()
    routeShortName?: string | null;

    @IsString()
    routeLongName?: string | null;

    @IsString()
    routeDescription?: string | null;

    @IsEnum(ERouteType)
    routeType?: ERouteType;

    @IsUrl()
    routeUrl?: string | null;

    @IsHexColor()
    routeColor?: string | null;

    @IsHexColor()
    routeTextColor?: string | null;

    @IsNumber()
    @IsPositive()
    routeSortOrder?: number | null;
}
