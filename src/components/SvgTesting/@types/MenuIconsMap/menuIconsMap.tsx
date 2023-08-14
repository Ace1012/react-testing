import React from "react";

// export const menuIconsMapper: Menu.Icon.MenuIconMap = {
//   BARCODE_OUTLINE_54: BarcodeOutline54,
//   CUSTOMER_FILLED_CIRCLE_OUTLINE_32: CustomerFilledCircleOutline32,
//   CUSTOMER_FILLED_CIRCLE_OUTLINE_54: CustomerFilledCircleOutline54,
//   SEARCH_OUTLINE_54: SearchOutline54,
//   SHOPPING_BAG_OUTLINE_54: ShoppingBagOutline54,
// };

export const menuIconsMapper: Menu.Icon.MenuIconMap = {
  BARCODE_OUTLINE_54: React.lazy(() => import("../../MenuIcons/barcodeOutline54")),
  CUSTOMER_FILLED_CIRCLE_OUTLINE_32: React.lazy(() => import("../../MenuIcons/customerFilledCircleOutline32")),
  CUSTOMER_FILLED_CIRCLE_OUTLINE_54: React.lazy(() => import("../../MenuIcons/customerFilledCircleOutline54")),
  SEARCH_OUTLINE_54: React.lazy(() => import("../../MenuIcons/searchOutline54")),
  SHOPPING_BAG_OUTLINE_54: React.lazy(() => import("../../MenuIcons/ShoppingBagOutline54")),
};