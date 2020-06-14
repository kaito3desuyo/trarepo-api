import { ValidatableStationDto } from './validatable-station.dto';
import { IsOptional } from 'class-validator';
import { Exclude } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStationDto extends ValidatableStationDto {
    @IsOptional()
    @Exclude()
    stationId: string;

    @ApiProperty()
    stationName: string;

    @ApiProperty({ nullable: true })
    stationSubName: string;

    @ApiProperty()
    stationType: number;

    @ApiProperty({ nullable: true })
    stationDescription: string;

    @ApiProperty({ nullable: true })
    stationLatLng: string;

    @ApiProperty({ nullable: true })
    stationUrl: string;
}
