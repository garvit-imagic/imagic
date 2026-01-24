// Common type utilities

// Make all properties optional
export type PartialDeep<T> = {
  [P in keyof T]?: T[P] extends object ? PartialDeep<T[P]> : T[P];
};

// Make all properties required
export type RequiredDeep<T> = {
  [P in keyof T]-?: T[P] extends object ? RequiredDeep<T[P]> : T[P];
};

// Pick only specified keys
export type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// Omit specified keys
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// Make specified keys optional
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// Make specified keys required
export type Required<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: T[P];
};

// Nullable type
export type Nullable<T> = T | null;

// Maybe type (nullable or undefined)
export type Maybe<T> = T | null | undefined;

// Array of type
export type ArrayOf<T> = T[];

// Promise of type
export type PromiseOf<T> = Promise<T>;

// Function type
export type Fn<Args extends any[] = any[], Return = void> = (
  ...args: Args
) => Return;

// Async function type
export type AsyncFn<Args extends any[] = any[], Return = void> = (
  ...args: Args
) => Promise<Return>;

// Record with string keys
export type StringRecord<T = any> = Record<string, T>;

// Record with number keys
export type NumberRecord<T = any> = Record<number, T>;

// Union to intersection
export type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

// Extract promise result type
export type Awaited<T> = T extends PromiseLike<infer U> ? U : T;

// Deep readonly
export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

// Value of object
export type ValueOf<T> = T[keyof T];

// Key of value
export type KeyOfValue<T, V> = {
  [K in keyof T]: T[K] extends V ? K : never;
}[keyof T];

// Exclude null and undefined
export type NonNullable<T> = Exclude<T, null | undefined>;

// Extract type from array
export type ArrayElement<T> = T extends (infer U)[] ? U : never;

// Props with children
export type PropsWithChildren<P = unknown> = P & {
  children?: React.ReactNode;
};

// Props with className
export type PropsWithClassName<P = unknown> = P & {
  className?: string;
};

// Merge two types
export type Merge<T, U> = Omit<T, Extract<keyof T, keyof U>> & U;

// Override properties
export type Override<T, U> = Omit<T, Extract<keyof T, keyof U>> & U;
