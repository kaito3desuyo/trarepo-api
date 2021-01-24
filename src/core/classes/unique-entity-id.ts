import { v4 as uuid } from 'uuid';
import { Identifier } from './identifier';

export class UniqueEntityID extends Identifier<string> {
    constructor(id?: string) {
        super(id ? id : uuid());
    }
}
