import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { YearSelector } from "@/components/YearSelector";
import { StatsPanel } from "@/components/StatsPanel";
import { RaceCard } from "@/components/RaceCard";
import { useRaceTracker } from "@/hooks/useRaceTracker";

const AVAILABLE_YEARS = [2024, 2025, 2026];

const Index = () => {
  const [selectedYear, setSelectedYear] = useState(2025);
  const { races, updateStatus } = useRaceTracker(selectedYear);

  return (
    <div className="min-h-screen bg-background carbon-texture">
      <div className="container max-w-6xl mx-auto px-4 pb-16">
        <Header />
        
        <YearSelector
          years={AVAILABLE_YEARS}
          selectedYear={selectedYear}
          onYearChange={setSelectedYear}
        />

        <StatsPanel races={races} />

        <motion.div
          key={selectedYear}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {races.map((race, index) => (
              <RaceCard
                key={race.id}
                race={race}
                onStatusChange={updateStatus}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-16 text-center text-muted-foreground text-sm"
        >
          <p className="uppercase tracking-widest">
            Data saved locally in your browser
          </p>
        </motion.footer>
      </div>
    </div>
  );
};

export default Index;
