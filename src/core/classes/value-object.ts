import { isEqual } from 'lodash';

interface ValueObjectProps {
    [key: string]: any;
}

export abstract class ValueObject<T extends ValueObjectProps> {
    public readonly props: Readonly<T>;

    constructor(props: T) {
        const baseProps: T = {
            ...props,
        };

        this.props = Object.freeze(baseProps);
    }

    isEqual(vo?: ValueObject<T>): boolean {
        if (vo === null || vo === undefined) {
            return false;
        }

        if (vo.props === undefined) {
            return false;
        }

        return isEqual(this.props, vo.props);
    }
}
