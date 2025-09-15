"use client";
import { Button } from "../../ui/button";
import { ArrowRight, ArrowLeft, Send } from "lucide-react";
import Spinner from "../../ui/spinner";

interface StepNavigationProps {
  currentStep: number;
  totalSteps: number;
  isPending: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
}

export default function StepNavigation({
  currentStep,
  totalSteps,
  isPending,
  onPrevious,
  onNext,
  onSubmit,
}: StepNavigationProps) {
  const isLastStep = currentStep === totalSteps;
  const isFirstStep = currentStep === 1;

  return (
    <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200/60">
      <Button
        type="button"
        variant="outline"
        onClick={onPrevious}
        disabled={isFirstStep}
        className={`
          px-8 py-3 rounded-2xl border-2 font-semibold transition-all duration-300
          ${
            isFirstStep
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-gray-50 hover:border-gray-300 hover:shadow-lg transform hover:scale-105"
          }
        `}>
        <ArrowLeft className="w-5 h-5 ml-2" />
        السابق
      </Button>

      {!isLastStep ? (
        <Button
          type="button"
          onClick={onNext}
          className={`
            px-8 py-3 rounded-2xl font-semibold transition-all duration-300 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg hover:shadow-2xl transform hover:scale-105
          `}>
          التالي
          <ArrowRight className="w-5 h-5 mr-2" />
        </Button>
      ) : (
        <Button
          type="submit"
          onClick={onSubmit}
          disabled={isPending}
          className="
            px-8 py-3 rounded-2xl font-semibold 
            bg-gradient-to-r from-green-500 to-emerald-600 
            hover:from-green-600 hover:to-emerald-700 
            text-white shadow-lg hover:shadow-2xl 
            transform hover:scale-105 transition-all duration-300 
            disabled:opacity-50 disabled:cursor-not-allowed 
            disabled:transform-none disabled:shadow-lg
          ">
          {isPending ? (
            <div className="flex items-center gap-3">
              <Spinner />
              <span>جاري الإرسال...</span>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Send className="w-5 h-5" />
              <span>إرسال الطلب</span>
            </div>
          )}
        </Button>
      )}
    </div>
  );
}
