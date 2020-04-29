import { Pagination } from 'nestjs-typeorm-paginate';
import { AgencyDetailsDto } from '../dtos/agency-details.dto';
import { FindManyAgencyQueryObject } from './../query-objects/find-many-agency.query-object';

export interface IAgencyQuery {
    findAll(): Promise<AgencyDetailsDto[]>;
    findMany(
        qo: FindManyAgencyQueryObject,
    ): Promise<Pagination<AgencyDetailsDto>>;
    findById(id: string): Promise<AgencyDetailsDto>;
}
