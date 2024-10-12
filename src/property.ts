export type IPropertyDecorator = (
    target: Record<string, any>, 
    propertyKey: string, 
    ...args: any[]
) => void;

export type IPropertyDecoratorFactory = (
    decorator: IPropertyDecorator,
    ...args: any[]
) => IPropertyDecorator;

export const PropertyDecoratorFactory: IPropertyDecoratorFactory = (
    decorator: IPropertyDecorator, 
    ...args: any[]
) => {
    return (
        target: Record<string, any>, 
        propertyKey: string
    ) => decorator(target, propertyKey, ...args);
}