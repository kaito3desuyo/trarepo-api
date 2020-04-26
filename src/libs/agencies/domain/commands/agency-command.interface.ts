import { Agency } from '../agency';
import { AgencyDetailsDto } from '../../usecase/dto/agency-details.dto';

export interface IAgencyCommand {
    save(agency: Agency | Agency[]): AgencyDetailsDto;
    remove(agency: Agency | Agency[]): void;
}
