import PlanCardList from "@/components/plan-cards/PlanCardList";
import CurrentPlan from "./_components/CurrentPlan";

export default async function page() {
  return (
    <div className="space-y-8 pt-10">
      <CurrentPlan />
      <PlanCardList />
    </div>
  );
}
