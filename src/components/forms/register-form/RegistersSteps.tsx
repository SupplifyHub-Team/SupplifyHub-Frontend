import { motion } from "motion/react";
export default function RegistersSteps({
  step = 1,
  totalSteps = 3,
}: {
  step?: number;
  totalSteps?: number;
}) {
  return (
    <div className="h-2  bg-gray-100">
      <motion.div
        className="h-full bg-gradient-to-r rounded-t-2xl  from-blue-500 to-purple-600"
        initial={{ width: "0%" }}
        animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </div>
  );
}
