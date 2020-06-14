import { Injectable } from '@nestjs/common';
import { CreateStationDto } from './dtos/create-station.dto';
import { StationDetailsDto } from './dtos/station-details.dto';

@Injectable()
export class StationService {
    async add(dto: CreateStationDto): Promise<StationDetailsDto> {
        throw new Error('not implemented');
    }
}
