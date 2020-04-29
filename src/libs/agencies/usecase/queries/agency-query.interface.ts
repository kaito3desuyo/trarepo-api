import { AgencyDetailsDto } from '../dto/agency-details.dto';

export interface IAgencyQuery {
    findAll(): Promise<AgencyDetailsDto[]>;
    findById(id: string): Promise<AgencyDetailsDto>;
}
