export type IMethodDecotator = (
    target: Record<string, any>, 
    propertyKey: string, 
    descriptor: PropertyDescriptor, 
    ...args: any[]
) => void;

export type IMethodDecoratorFactory = (
    decorator: IMethodDecotator,
    ...args: any[]
) => IMethodDecotator;

export const MethodDecoratorFactory: IMethodDecoratorFactory = (
    decorator: IMethodDecotator, 
    ...args: any[]
) => {
    return (
        target: Record<string, any>, 
        propertyKey: string, 
        descriptor: PropertyDescriptor
    ) => decorator(target, propertyKey, descriptor, ...args);
};