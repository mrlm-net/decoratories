export type IParameterDecorator = (
    target: Record<string, any>, 
    propertyKey: string, 
    parameterIndex?: number,
    ...args: any[]
) => void;

export type IParameterDecoratorFactory = (
    decorator: IParameterDecorator,
    ...args: any[]
) => IParameterDecorator;

export const ParameterDecoratorFactory: IParameterDecoratorFactory = (
    decorator: IParameterDecorator, 
    ...args: any[]
) => {
    return (
        target: Record<string, any>, 
        propertyKey: string, 
        parameterIndex?: number
    ) => decorator(target, propertyKey, parameterIndex, ...args);
}