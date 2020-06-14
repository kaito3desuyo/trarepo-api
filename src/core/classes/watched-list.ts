export abstract class WatchedList<T> {
    public currentItems: T[];
    private _initial: T[];
    private _new: T[];
    private _removed: T[];

    protected constructor(initialItems: T[]) {
        this.currentItems = initialItems ?? [];
        this._initial = initialItems ?? [];
        this._new = [];
        this._removed = [];
    }

    abstract compareItems(a: T, b: T): boolean;

    protected abstract _validateWhenCreating(item: T): void;
    protected abstract _validateWhenAdding(item: T): void;
    protected abstract _validateWhenRemoving(item: T): void;

    public getItems(): T[] {
        return this.currentItems;
    }

    public getNewItems(): T[] {
        return this._new;
    }

    public getRemovedItems(): T[] {
        return this._removed;
    }

    private _isCurrentItem(item: T): boolean {
        return (
            this.currentItems.filter((v: T) => this.compareItems(item, v))
                .length !== 0
        );
    }

    private _isNewItem(item: T): boolean {
        return (
            this._new.filter((v: T) => this.compareItems(item, v)).length !== 0
        );
    }

    private _isRemovedItem(item: T): boolean {
        return (
            this._removed.filter((v: T) => this.compareItems(item, v))
                .length !== 0
        );
    }

    private _removeFromNew(item: T): void {
        this._new = this._new.filter((v: T) => !this.compareItems(item, v));
    }

    private _removeFromCurrent(item: T): void {
        this.currentItems = this.currentItems.filter(
            (v: T) => !this.compareItems(item, v),
        );
    }

    private _removeFromRemoved(item: T): void {
        this._removed = this._removed.filter(
            (v: T) => !this.compareItems(item, v),
        );
    }

    private _wasAddedInitially(item: T): boolean {
        return (
            this._initial.filter((v: T) => this.compareItems(item, v))
                .length !== 0
        );
    }

    public isExists(item: T): boolean {
        return this._isCurrentItem(item);
    }

    public add(item: T): void {
        this._validateWhenAdding(item);

        if (this._isRemovedItem(item)) {
            this._removeFromRemoved(item);
        }

        if (!this._isNewItem(item) && !this._wasAddedInitially(item)) {
            this._new.push(item);
        }

        if (!this._isCurrentItem(item)) {
            this.currentItems.push(item);
        }
    }

    public remove(item: T): void {
        this._validateWhenRemoving(item);

        this._removeFromCurrent(item);

        if (this._isNewItem(item)) {
            this._removeFromNew(item);
            return;
        }

        if (this._isRemovedItem(item)) {
            this._removed.push(item);
        }
    }
}
