export function Stepper({ currentStep }: { currentStep: number }) {
  const steps = ["Select Type", "Basic Info", "Details"];
  return (
    <div className="flex justify-between">
      {steps.map((label, i) => (
        <div key={i} className="flex flex-col items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-white 
            ${i + 1 <= currentStep ? "bg-green-600" : "bg-gray-300"}`}
          >
            {i + 1}
          </div>
          <p className="text-xs mt-1">{label}</p>
        </div>
      ))}
    </div>
  );
}
