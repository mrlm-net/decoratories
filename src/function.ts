export type IFunctionDecotator = (
    target: Record<string, any>, 
    propertyKey: string, 
    descriptor: PropertyDescriptor, 
    ...args: any[]
) => void;

export type IFunctionDecoratorFactory = (
    decorator: IFunctionDecotator,
    ...args: any[]
) => IFunctionDecotator;

export const FunctionDecoratorFactory: IFunctionDecoratorFactory = (
    decorator: IFunctionDecotator, 
    ...args: any[]
) => {
    return (
        target: Record<string, any>, 
        propertyKey: string, 
        descriptor: PropertyDescriptor
    ) => decorator(target, propertyKey, descriptor, ...args);
};