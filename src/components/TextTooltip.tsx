import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function TextTooltip({
  children,
  content,
}: {
  children: React.ReactNode;
  content: string;
}) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" className="cursor-auto" size="sm">
            {children}
          </Button>
        </TooltipTrigger>
        <TooltipContent className="px-2 py-1 text-xs">{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
