import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { ValidatableStationDto } from './validatable-station.dto';

export class UpdateStationDto extends ValidatableStationDto {
    @ApiProperty()
    stationId: string;

    @ApiProperty({ required: false })
    @IsOptional()
    stationName: string;

    @ApiProperty({ nullable: true, required: false })
    @IsOptional()
    stationSubName: string;

    @ApiProperty({ required: false })
    @IsOptional()
    stationType: number;

    @ApiProperty({ nullable: true, required: false })
    @IsOptional()
    stationDescription: string;

    @ApiProperty({ nullable: true, required: false })
    @IsOptional()
    stationLatLng: string;

    @ApiProperty({ nullable: true, required: false })
    @IsOptional()
    stationUrl: string;
}
