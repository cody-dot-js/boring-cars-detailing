import * as React from "react";

export const useToggle = (
  initialState: boolean = false
): [
  state: boolean,
  toggle: () => void,
  setState: (newState: boolean) => void
] => {
  const [state, setState] = React.useState<boolean>(initialState);

  const toggle = React.useCallback(() => setState((s) => !s), []);

  return [state, toggle, setState];
};
