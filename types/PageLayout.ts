export type GetPageLayout = (
  layoutProps: any
) => (children: React.ReactNode) => React.ReactNode;

export type MaybeHasPageLayout = React.ReactNode & {
  pageLayout?: GetPageLayout;
};
