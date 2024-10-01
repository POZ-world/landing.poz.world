/* 
 * delegates.ts
 *     Created: 2024-09-25T11:29:52-04:00
 *    Modified: 2024-09-25T11:29:52-04:00
 *      Author: Justin Paul Chase <justin@justinwritescode.com>
 *   Copyright: © 2024 Justin Paul Chase, All Rights Reserved
 *     License: MIT (https://opensource.org/licenses/MIT)
 */

export type Action = (...args: any[]) => void;
export type useEffectCallback = (effect: React.EffectCallback, deps?: React.DependencyList) => void;
export type useStateAction<T> = (initialState: T | (() => T)) => [T, React.Dispatch<React.SetStateAction<T>>];
export type setStateAction<T> = React.Dispatch<React.SetStateAction<T>>;
export type dispatchType<T> = (arg: T) => T;
export type useContextAction<T> = (context: React.Context<T>) => T;
export type useRefAction<T> = (initialValue: T) => React.MutableRefObject<T>;
export type Reducer<R extends React.Reducer<any, any>, I> = (
    reducer: R,
    initialState: I,
    initializer?: (arg: I) => I
) => [I, React.Dispatch<React.ReducerAction<R>>];
export type useLayoutEffectType = (effect: React.EffectCallback, deps?: React.DependencyList) => void;
export type useMemoType<T> = (factory: () => T, deps: React.DependencyList) => T;
export type useCallbackType<T extends (...args: any[]) => any> = (
    callback: T,
    deps: React.DependencyList
) => React.MemoExoticComponent<T>;
export type useImperativeHandleType<T> = (
    ref: React.Ref<T>,
    init: () => T,
    deps: React.DependencyList
) => void;
export type useDebugValueType<T> = (value: T, formatter?: (value: T) => any) => void;
