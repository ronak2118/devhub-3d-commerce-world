
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepsProps {
  steps: { label: string }[];
  currentStep: number;
  className?: string;
}

export function Steps({ steps, currentStep, className }: StepsProps) {
  return (
    <div className={cn("flex w-full", className)}>
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;
        
        return (
          <div 
            key={index} 
            className={cn(
              "flex-1 flex items-center",
              index !== 0 && "ml-2"
            )}
          >
            {index !== 0 && (
              <div 
                className={cn(
                  "h-1 flex-1", 
                  isCompleted ? "bg-devhub-purple" : "bg-gray-200"
                )}
              />
            )}
            
            <div className="relative flex flex-col items-center">
              <div 
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center",
                  isCompleted ? "bg-devhub-purple text-white" : 
                  isCurrent ? "border-2 border-devhub-purple text-devhub-purple" : 
                  "border-2 border-gray-200 text-gray-400"
                )}
              >
                {isCompleted ? (
                  <CheckIcon size={16} />
                ) : (
                  <span className="text-sm">{index + 1}</span>
                )}
              </div>
              
              <span 
                className={cn(
                  "absolute top-10 whitespace-nowrap text-xs",
                  isCompleted ? "text-devhub-purple font-medium" :
                  isCurrent ? "text-devhub-purple font-medium" : 
                  "text-gray-400"
                )}
              >
                {step.label}
              </span>
            </div>
            
            {index !== steps.length - 1 && (
              <div 
                className={cn(
                  "h-1 flex-1", 
                  isCompleted ? "bg-devhub-purple" : "bg-gray-200"
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
