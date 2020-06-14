import { UniqueEntityID } from './unique-entity-id';

export abstract class Entity<T> {
    protected readonly _id: UniqueEntityID;
    public props: T;

    constructor(props: T, id?: UniqueEntityID) {
        this._id = id ? id : new UniqueEntityID();
        this.props = props;
    }

    isEqual(entity?: Entity<T>): boolean {
        if (entity === null || entity === undefined) {
            return false;
        }

        if (this === entity) {
            return true;
        }

        if (!(entity instanceof Entity)) {
            return false;
        }

        return this._id.isEqual(entity._id);
    }
}
