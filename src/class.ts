export type IClassDecorator = (
    target: Function, 
    ...args: any[]
) => void;

export type IClassDecoratorFactory = (
    decorator: IClassDecorator,
    ...args: any[]
) => IClassDecorator;

export const ClassDecoratorFactory: IClassDecoratorFactory = (decorator: IClassDecorator, ...args: any[]) => {
    return (
        target: Function
    ) => decorator(target, ...args);
};