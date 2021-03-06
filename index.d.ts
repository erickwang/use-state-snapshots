declare module "use-state-snapshots" {
  function useStateSnapshots<T>(
    initial: T | (() => T),
    delay?: number | false,
    limit?: number
  ): [
    T,
    (action: T | ((state: T) => T), force?: boolean) => void,
    number,
    (action: number | ((pointer: number) => number)) => void,
    Array<{
      id: number;
      state: T;
      firstChange: number;
      lastChange: number;
    }>
  ];
  export = useStateSnapshots;
}
