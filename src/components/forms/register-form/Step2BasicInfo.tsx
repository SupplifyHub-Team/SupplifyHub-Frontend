import { useFormContext } from "react-hook-form";
import FormInput from "@/components/forms-fields/FormInput";
import FormPassword from "@/components/forms-fields/FormPassword";
import { User, Mail, Phone, Shield } from "lucide-react";
import { motion } from "motion/react";
import { conditionalRegisterSchemaType } from "@/schemas/authSchema";

export default function Step2BasicInfo() {
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
        <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4">
          <User className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          معلوماتك الأساسية
        </h2>
        <p className="text-gray-600 text-lg max-w-md mx-auto">
          يرجى ملء المعلومات الأساسية الخاصة بك بدقة
        </p>
      </motion.div>

      <motion.div className="w-full max-w-2xl" variants={itemVariants}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants}>
            <FormInput<conditionalRegisterSchemaType>
              control={control}
              name="UserName"
              label="الاسم الكامل"
              placeholder="أدخل اسمك الكامل"
              Icon={<User className="w-5 h-5 text-gray-500" />}
              autoComplete="name"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <FormInput<conditionalRegisterSchemaType>
              control={control}
              name="email"
              type="email"
              label="البريد الإلكتروني"
              placeholder="example@email.com"
              Icon={<Mail className="w-5 h-5 text-gray-500" />}
              autoComplete="email"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <FormInput<conditionalRegisterSchemaType>
              control={control}
              name="phoneNumber"
              label="رقم الهاتف"
              placeholder="01234567890"
              Icon={<Phone className="w-5 h-5 text-gray-500" />}
              autoComplete="tel"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <FormPassword<conditionalRegisterSchemaType>
              control={control}
              name="password"
              label="كلمة المرور"
              placeholder="أدخل كلمة مرور قوية"
              autoComplete="new-password"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Security Notice */}
      <motion.div
        className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-2xl border border-green-200 w-full max-w-2xl"
        variants={itemVariants}
      >
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-green-900 mb-2">حماية بياناتك</h3>
            <div className="text-green-800 text-sm space-y-1">
              <p>• جميع بياناتك محمية بأعلى معايير الأمان</p>
              <p>• لن نشارك معلوماتك مع أطراف ثالثة</p>
              <p>• كلمة المرور محفوظة بتشفير آمن</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
