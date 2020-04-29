import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class FindByIdParam {
    @ApiProperty()
    @IsUUID()
    agencyId: string;
}
