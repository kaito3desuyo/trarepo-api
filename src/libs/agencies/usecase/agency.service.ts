import { Injectable } from '@nestjs/common';
import { CreateAgencyDto } from './dto/create-agency.dto';

@Injectable()
export class AgencyService {
    constructor() {}

    addAgency(dto: CreateAgencyDto): string {
        return 'hogehoge';
    }
}
