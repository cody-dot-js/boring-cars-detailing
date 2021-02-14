import * as React from "react";

export function useDebouncedState<T>(initialValue: T, delay: number = 500) {
  const [debouncedState, setDebouncedState] = React.useState(initialValue);
  const [rawState, setRawState] = React.useState(initialValue);
  const timeout = React.useRef<number>();

  const setState = React.useCallback(
    (newValue: T) => {
      window.clearTimeout(timeout.current);
      setRawState(newValue);
      timeout.current = window.setTimeout(
        () => setDebouncedState(newValue),
        delay
      );
    },
    [delay]
  );

  const forceSetState = React.useCallback((newValue: T) => {
    setRawState(newValue);
    setDebouncedState(newValue);
  }, []);

  return [debouncedState, setState, rawState, forceSetState] as const;
}
