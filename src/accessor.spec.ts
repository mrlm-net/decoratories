import { describe, it, expect, vi } from 'vitest';
import { AccessorDecoratorFactory, IAccessorDecotator } from './accessor';

describe('AccessorDecoratorFactory', () => {
    it('should return a function', () => {
        const mockDecorator: IAccessorDecotator = vi.fn();
        const decorator = AccessorDecoratorFactory(mockDecorator);

        expect(typeof decorator).toBe('function');
    });
    
    it('should call the decorator with the correct arguments', () => {
        const mockDecorator: IAccessorDecotator = vi.fn();
        const target = {};
        const propertyKey = 'testProperty';
        const descriptor = { configurable: true, enumerable: true, get: vi.fn(), set: vi.fn() };
        const args = [1, 2, 3];

        const decorator = AccessorDecoratorFactory(mockDecorator, ...args);
        decorator(target, propertyKey, descriptor);

        expect(mockDecorator).toHaveBeenCalledWith(target, propertyKey, descriptor, ...args);
    });

    it('should call the decorator without additional arguments', () => {
        const mockDecorator: IAccessorDecotator = vi.fn();
        const target = {};
        const propertyKey = 'testProperty';
        const descriptor = { configurable: true, enumerable: true, get: vi.fn(), set: vi.fn() };

        const decorator = AccessorDecoratorFactory(mockDecorator);
        decorator(target, propertyKey, descriptor);

        expect(mockDecorator).toHaveBeenCalledWith(target, propertyKey, descriptor);
    });
});
