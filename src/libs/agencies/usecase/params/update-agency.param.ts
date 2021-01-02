import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class UpdateAgencyParam {
    @ApiProperty()
    @IsUUID()
    agencyId!: string;
}
