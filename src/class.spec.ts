import { describe, it, expect, vi } from 'vitest';
import { ClassDecoratorFactory, IClassDecorator } from './class';

describe('ClassDecoratorFactory', () => {
    it('should return a function', () => {
        const mockDecorator: IClassDecorator = vi.fn();
        const decorator = ClassDecoratorFactory(mockDecorator);

        expect(typeof decorator).toBe('function');
    });

    it('should call the decorator with the correct arguments', () => {
        const mockDecorator: IClassDecorator = vi.fn();
        const target = class {};
        const args = [1, 2, 3];

        const decorator = ClassDecoratorFactory(mockDecorator, ...args);
        decorator(target);

        expect(mockDecorator).toHaveBeenCalledWith(target, ...args);
    });

    it('should call the decorator without additional arguments', () => {
        const mockDecorator: IClassDecorator = vi.fn();
        const target = class {};

        const decorator = ClassDecoratorFactory(mockDecorator);
        decorator(target);

        expect(mockDecorator).toHaveBeenCalledWith(target);
    });
});
