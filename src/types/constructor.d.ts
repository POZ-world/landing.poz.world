export type ConstructorMethod = infer M extends new <T, A>(args: infer A) => T ? M : never;

export type Constructor<T, A> = infer T extends ConstructorMethod<T, A> ? T : never;

export interface Constructable<T, A> { new <T, A>(args: A): T; };

export type Callable<TArgs, U> = infer T extends { (args: TArgs): infer U } ? T : never;

export type CallableConstructor<T> = Constructable<T> & Callable;