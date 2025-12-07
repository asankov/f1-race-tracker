import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface YearSelectorProps {
  years: number[];
  selectedYear: number;
  onYearChange: (year: number) => void;
}

export const YearSelector = ({ years, selectedYear, onYearChange }: YearSelectorProps) => {
  return (
    <div className="flex gap-2 justify-center mb-8">
      {years.map((year) => (
        <button
          key={year}
          onClick={() => onYearChange(year)}
          className={cn(
            "relative px-6 py-3 font-black text-lg uppercase tracking-wide transition-all duration-300",
            "border-b-2",
            selectedYear === year
              ? "text-primary border-primary"
              : "text-muted-foreground border-transparent hover:text-foreground hover:border-muted-foreground"
          )}
        >
          {year}
          {selectedYear === year && (
            <motion.div
              layoutId="yearIndicator"
              className="absolute inset-0 bg-primary/5 rounded-sm -z-10"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};
