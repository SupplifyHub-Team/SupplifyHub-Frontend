import React from "react";
import PlanCard from "./PlanCard";
import { fetchPlans } from "@/services/plansServices";
import { Crown, Package, Star } from "lucide-react";
const PLAN_ICON = [Package, Star, Crown];

const isPopular = (index: number, totalPlans: number) => {
  return Math.floor(totalPlans / 2) === index;
};

const getPlanColors = (plan: IPlan, index: number) => {
  if (plan.price === 0) {
    return {
      bgColor: "from-slate-50 to-slate-100",
      color: "from-slate-500 to-slate-600",
    };
  }

  const colorSchemes = [
    {
      bgColor: "from-blue-50 to-indigo-100",
      color: "from-blue-500 to-indigo-600",
    },
    {
      bgColor: "from-indigo-50 to-purple-100",
      color: "from-indigo-500 to-purple-600",
    },
    {
      bgColor: "from-purple-50 to-violet-100",
      color: "from-purple-500 to-violet-600",
    },
  ];

  return colorSchemes[index % colorSchemes.length];
};

export default async function PlanCardList() {
  const plans = (await fetchPlans()).data;

  return (
    <div
      className={`grid grid-cols-1 gap-8 max-w-6xl mx-auto ${
        plans.length === 1
          ? "md:grid-cols-1 max-w-md"
          : plans.length === 2
          ? "md:grid-cols-2 max-w-4xl"
          : "lg:grid-cols-3"
      }`}>
      {plans.map((plan, index) => {
        const PlanIcon = PLAN_ICON[index];
        const colors = getPlanColors(plan, index);
        const popular = isPopular(index, plans.length);

        return (
          <PlanCard
            key={plan.id}
            plan={plan}
            PlanIcon={PlanIcon}
            colors={colors}
            popular={popular}
          />
        );
      })}
    </div>
  );
}
