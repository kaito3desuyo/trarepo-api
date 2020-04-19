import uuid from 'uuid/v4';
import { Identifier } from './identifier';

export class UniqueEntityID extends Identifier<string> {
    constructor(id?: string) {
        super(id ? id : uuid());
    }
}
