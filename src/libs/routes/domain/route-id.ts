import { Entity } from '@src/core/classes/entity';
import { UniqueEntityID } from '@src/core/classes/unique-entity-id';

export class RouteId extends Entity<null> {
    get id(): UniqueEntityID {
        return this._id;
    }

    private constructor(id?: UniqueEntityID) {
        super(null, id);
    }

    static create(id?: UniqueEntityID): RouteId {
        return new RouteId(id);
    }
}
