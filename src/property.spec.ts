import { describe, it, expect, vi } from 'vitest';
import { PropertyDecoratorFactory, IPropertyDecorator } from './property';

describe('PropertyDecoratorFactory', () => {
    it('should return a function', () => {
        const mockDecorator: IPropertyDecorator = vi.fn();
        const decorator = PropertyDecoratorFactory(mockDecorator);

        expect(typeof decorator).toBe('function');
    });

    it('should call the decorator with the correct arguments', () => {
        const mockDecorator: IPropertyDecorator = vi.fn();
        const target = {};
        const propertyKey = 'testProperty';
        const args = [1, 2, 3];

        const decorator = PropertyDecoratorFactory(mockDecorator, ...args);
        decorator(target, propertyKey);

        expect(mockDecorator).toHaveBeenCalledWith(target, propertyKey, ...args);
    });

    it('should call the decorator without additional arguments', () => {
        const mockDecorator: IPropertyDecorator = vi.fn();
        const target = {};
        const propertyKey = 'testProperty';

        const decorator = PropertyDecoratorFactory(mockDecorator);
        decorator(target, propertyKey);

        expect(mockDecorator).toHaveBeenCalledWith(target, propertyKey);
    });
});
