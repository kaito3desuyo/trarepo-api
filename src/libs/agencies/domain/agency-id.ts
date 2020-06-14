import { Entity } from '@src/core/classes/entity';
import { UniqueEntityID } from '@src/core/classes/unique-entity-id';

export class AgencyId extends Entity<any> {
    get id(): UniqueEntityID {
        return this._id;
    }

    private constructor(id?: UniqueEntityID) {
        super(null, id);
    }

    static create(id?: UniqueEntityID) {
        return new AgencyId(id);
    }
}
