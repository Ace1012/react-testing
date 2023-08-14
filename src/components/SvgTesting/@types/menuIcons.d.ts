declare namespace Menu.Icon {
  export const MenuIcons = {
    barcodeOutline54: "BARCODE_OUTLINE_54",
    customerFilledCircleOutline32: "CUSTOMER_FILLED_CIRCLE_OUTLINE_32",
    customerFilledCircleOutline54: "CUSTOMER_FILLED_CIRCLE_OUTLINE_54",
    searchOutline54: "SEARCH_OUTLINE_54",
    shoppingBagOutline54: "SHOPPING_BAG_OUTLINE_54",
  } as const;

  export type MenuIconName = (typeof MenuIcons)[keyof typeof MenuIcons];

  type IMenuIcon = {
    size?: number;
    fill?: Property.Color;
  };

  type SVGElementFunc = (prop: IMenuIcon) => Element;

  export type MenuIconMap = Record<
    MenuIconName,
    LazyExoticComponent<SVGElementFunc>
  >;
}
