import * as React from "react";

export const useToggle = (initialState: boolean = false) => {
  const [state, setState] = React.useState<boolean>(initialState);

  const toggle = React.useCallback(() => setState((s) => !s), []);

  return [state, toggle, setState] as const;
};
