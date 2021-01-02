import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class FindAgencyByIdParam {
    @ApiProperty()
    @IsUUID()
    agencyId!: string;
}
