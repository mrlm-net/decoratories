export type IAccessorDecotator = (
    target: Record<string, any>, 
    propertyKey: string, 
    descriptor: PropertyDescriptor, 
    ...args: any[]
) => void;

export type IAccessorDecoratorFactory = (
    decorator: IAccessorDecotator,
    ...args: any[]
) => IAccessorDecotator;

export const AccessorDecoratorFactory: IAccessorDecoratorFactory = (
    decorator: IAccessorDecotator, 
    ...args: any[]
) => {
    return (
        target: Record<string, any>, 
        propertyKey: string, 
        descriptor: PropertyDescriptor
    ) => decorator(target, propertyKey, descriptor, ...args);
};