import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class RemoveAgencyParam {
    @ApiProperty()
    @IsUUID()
    agencyId!: string;
}
