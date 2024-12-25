import { describe, it, expect, vi } from 'vitest';
import { ParameterDecoratorFactory, IParameterDecorator } from './parameter';

describe('ParameterDecoratorFactory', () => {
    it('should return a function', () => {
        const mockDecorator: IParameterDecorator = vi.fn();
        const decorator = ParameterDecoratorFactory(mockDecorator);

        expect(typeof decorator).toBe('function');
    });

    it('should call the decorator with the correct arguments', () => {
        const mockDecorator: IParameterDecorator = vi.fn();
        const target = {};
        const propertyKey = 'testProperty';
        const parameterIndex = 0;
        const args = [1, 2, 3];

        const decorator = ParameterDecoratorFactory(mockDecorator, ...args);
        decorator(target, propertyKey, parameterIndex);

        expect(mockDecorator).toHaveBeenCalledWith(target, propertyKey, parameterIndex, ...args);
    });

    it('should call the decorator without additional arguments', () => {
        const mockDecorator: IParameterDecorator = vi.fn();
        const target = {};
        const propertyKey = 'testProperty';
        const parameterIndex = 0;

        const decorator = ParameterDecoratorFactory(mockDecorator);
        decorator(target, propertyKey, parameterIndex);

        expect(mockDecorator).toHaveBeenCalledWith(target, propertyKey, parameterIndex);
    });
});
