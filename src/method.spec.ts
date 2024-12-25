import { describe, it, expect, vi } from 'vitest';
import { MethodDecoratorFactory, IMethodDecotator } from './method';

describe('MethodDecoratorFactory', () => {
    it('should return a function', () => {
        const mockDecorator: IMethodDecotator = vi.fn();
        const decorator = MethodDecoratorFactory(mockDecorator);

        expect(typeof decorator).toBe('function');
    });

    it('should call the decorator with the correct arguments', () => {
        const mockDecorator: IMethodDecotator = vi.fn();
        const target = {};
        const propertyKey = 'testMethod';
        const descriptor = { value: vi.fn() };
        const args = [1, 2, 3];

        const decorator = MethodDecoratorFactory(mockDecorator, ...args);
        decorator(target, propertyKey, descriptor);

        expect(mockDecorator).toHaveBeenCalledWith(target, propertyKey, descriptor, ...args);
    });

    it('should call the decorator without additional arguments', () => {
        const mockDecorator: IMethodDecotator = vi.fn();
        const target = {};
        const propertyKey = 'testMethod';
        const descriptor = { value: vi.fn() };

        const decorator = MethodDecoratorFactory(mockDecorator);
        decorator(target, propertyKey, descriptor);

        expect(mockDecorator).toHaveBeenCalledWith(target, propertyKey, descriptor);
    });
});
