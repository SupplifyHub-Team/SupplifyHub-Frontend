import FormRadioCards from "@/components/forms-fields/FormRadioCards";
import { useFormContext } from "react-hook-form";
import { Users, Building2, CheckCircle, Star, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { conditionalRegisterSchemaType } from "@/schemas/authSchema";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export function Step1Type() {
  const { control } = useFormContext<conditionalRegisterSchemaType>();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full space-y-8 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="text-center space-y-4" variants={itemVariants}>
        <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
          <Star className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          اختر نوع الحساب
        </h2>
        <p className="text-gray-600 text-lg max-w-md mx-auto">
          من فضلك حدد نوع الحساب الذي يناسب احتياجاتك
        </p>
      </motion.div>

      <motion.div className="w-full max-w-2xl" variants={itemVariants}>
        <FormRadioCards<conditionalRegisterSchemaType>
          control={control}
          name="accountType"
          options={[
            {
              label: "عميل",
              value: "Clients",
              description: "يمكنني الوصول إلى خدمات متنوعة من موردين معتمدين",
              icon: <Users className="w-12 h-12 text-blue-600" />,
              badge: "للشركات",
            },
            {
              label: "مورد",
              value: "Suppliers",
              description: "يمكنني تقديم خدماتي لعملاء جدد وتطوير أعمالي",
              icon: <Building2 className="w-12 h-12 text-green-600" />,
              badge: "للخدمات",
            },
          ]}
          direction="horizontal"
          cardSize="md"
          showCheckmark={true}
          constainerClassName="grid sm:grid-cols-2"
        />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl text-sm"
        variants={containerVariants}
      >
        <motion.div
          className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300"
          variants={itemVariants}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-blue-900 text-lg">العملاء</h3>
          </div>
          <p className="text-blue-800 leading-relaxed">
            احصل على خدمات متنوعة من موردين معتمدين وموثوقين مع ضمان الجودة
          </p>
          <div className="mt-4 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 text-sm">وصول سريع للخدمات</span>
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300"
          variants={itemVariants}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-green-900 text-lg">الموردين</h3>
          </div>
          <p className="text-green-800 leading-relaxed">
            قدم خدماتك ومنتجاتك لعملاء جدد وطور أعمالك مع أدوات تسويق متقدمة
          </p>
          <div className="mt-4 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span className="text-green-700 text-sm">نمو مستدام للأعمال</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Login Link Section */}
      <motion.div className="w-full max-w-2xl" variants={itemVariants}>
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
          <p className="text-gray-600 mb-4">هل لديك حساب بالفعل؟</p>
          <Link href="/login">
            <Button
              variant="outline"
              className="w-full sm:w-auto px-8 py-3 text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 font-medium"
            >
              <ArrowLeft className="w-4 h-4 ml-2" />
              سجل الدخول من هنا
            </Button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
