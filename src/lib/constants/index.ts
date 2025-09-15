export const REGISTRATION_STEPS = [
  {
    step: 1,
    title: "نوع الحساب",
    description: "اختر نوع حسابك",
  },
  {
    step: 2,
    title: "البيانات الأساسية",
    description: "معلوماتك الشخصية",
  },
  {
    step: 3,
    title: "معلومات إضافية",
    description: "الموقع والاهتمامات",
  },
];

export const CATEGORIES_PAGE_SIZE = 5;
export const SUPPLIERS_PAGE_SIZE = 8;
export const SUPPLIERS_BASE_KEY = "suppliers";
export const TABLE_ROWS = 10;
export const SUPPLIER_DEALS_TABLE_NAME = "supplier-deals";
export const CLIENT_DEALS_TABLE_NAME = "client-deals";
export const REVIEWS_PAGE_SIZE = 5;
export const REVIEWS_BASE_KEY = "reviews";

export const SLIDER_VARIANTS = {
  enter: (dir: "next" | "back") => ({
    x: dir === "next" ? 400 : -400,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (dir: "next" | "back") => ({
    x: dir === "next" ? -400 : 400,
    opacity: 0,
    scale: 0.95,
  }),
};
