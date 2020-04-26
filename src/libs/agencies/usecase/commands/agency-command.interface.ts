import { Agency } from '../../domain/agency';
import { AgencyDetailsDto } from '../dto/agency-details.dto';

export interface IAgencyCommand {
    save(agency: Agency | Agency[]): AgencyDetailsDto;
    remove(agency: Agency | Agency[]): void;
}
