"use client";

import FormInput from "@/components/forms-fields/FormInput";
import { conditionalRegisterSchemaType } from "@/schemas/authSchema";
import { useFormContext } from "react-hook-form";
import { MapPin, Tag, Star, Target } from "lucide-react";
import { motion } from "motion/react";
import FormDropzone from "@/components/forms-fields/form-dropzone/FormDropzone";
import { getCategories } from "@/services/categoriesServices";
import FormInfiniteMultiCombobox from "@/components/forms-fields/FormMultiSelectCombobox";
import SelectedCategories from "./SelectedCategories";

const SUPPLIER_BENFITS = [
  "عرض خدماتك لعملاء محتملين",
  "إدارة طلبات العملاء بكفاءة",
  "بناء سمعة مهنية قوية",
  "أدوات تسويق متقدمة",
];

const CLIENT_BENEFITS = [
  "الوصول إلى موردين معتمدين",
  "مقارنة الأسعار والخدمات",
  "نظام تقييم شفاف",
  "دعم فني متخصص",
];

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function Step3TypeInfo() {
  const { control, watch } = useFormContext<conditionalRegisterSchemaType>();
  const accountType = watch("accountType");

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full space-y-8 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div className="text-center space-y-4" variants={itemVariants}>
        <div className="w-16 h-16 mx-auto bg-indigo-500 rounded-2xl flex items-center justify-center mb-4">
          {accountType === "Suppliers" ? (
            <Tag className="w-8 h-8 text-white" />
          ) : (
            <Target className="w-8 h-8 text-white" />
          )}
        </div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          {accountType === "Suppliers" ? "خدماتك وموقعك" : "احتياجاتك التجارية"}
        </h2>
        <p className="text-gray-600 text-lg max-w-md mx-auto">
          {accountType === "Suppliers"
            ? "حدد خدماتك وموقع عملك لنساعدك في الوصول للعملاء المناسبين"
            : "أخبرنا عن نوع شركتك واحتياجاتك لنوفر لك أفضل الموردين"}
        </p>
      </motion.div>

      <div className="w-full max-w-4xl space-y-8">
        <FormDropzone<conditionalRegisterSchemaType>
          control={control}
          name="documents"
          label="المستندات"
          description="اقصى حجم 5MB ,قم بتحميل المستندات الداعمة مثل السجل التجاري، الهوية، وغيرها."
          accept={{ "application/pdf": [".pdf"] }}
          multiple={false}
        />

        {/* Location Input */}
        <FormInput<conditionalRegisterSchemaType>
          control={control}
          name="location"
          label="الموقع"
          placeholder={
            accountType === "Suppliers" ? "أدخل موقع عملك" : "أدخل موقع شركتك"
          }
          Icon={<MapPin className="w-5 h-5 text-gray-500" />}
          autoComplete="address-level1"
        />

        {/* Categories/Business Type Section */}
        <motion.div className="space-y-6" variants={itemVariants}>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Tag className="w-5 h-5 text-indigo-600" />
              ما هي خدماتك؟
            </h3>
            <p className="text-gray-600 mb-6">
              اختر الخدمات التي تقدمها (يمكنك اختيار أكثر من خدمة)
            </p>

            <FormInfiniteMultiCombobox<conditionalRegisterSchemaType, ICategory>
              control={control}
              name="categories"
              label="الخدمات"
              queryKey={["categories"]}
              fetchFn={(pageNumber, search) =>
                getCategories({
                  page: pageNumber,
                  search,
                })
              }
              getOptionLabel={(item) => item.categoryName}
              getOptionValue={(item) => item.categoryId}
            />

            <SelectedCategories<conditionalRegisterSchemaType> name="categories" />
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-200"
          variants={itemVariants}>
          <h3 className="font-bold text-indigo-900 text-xl mb-4 flex items-center gap-2">
            <Star className="w-6 h-6 text-indigo-600" />
            {accountType === "Suppliers"
              ? "مميزات الموردين:"
              : "مميزات العملاء:"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {accountType === "Suppliers" ? (
              <>
                {SUPPLIER_BENFITS.map((benefit, index) => (
                  <div
                    key={index + "SUPPLIER_BENFITS"}
                    className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span className="text-indigo-800">{benefit}</span>
                  </div>
                ))}
              </>
            ) : (
              <>
                {CLIENT_BENEFITS.map((benefit, index) => (
                  <div
                    key={index + "CLIENT_BENEFITS"}
                    className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span className="text-indigo-800">{benefit}</span>
                  </div>
                ))}
              </>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
