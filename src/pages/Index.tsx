import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { StatsPanel } from "@/components/StatsPanel";
import { RaceCard } from "@/components/RaceCard";
import { useRaceTracker } from "@/hooks/useRaceTracker";

const Index = () => {
  const { races, updateStatus } = useRaceTracker();

  return (
    <div className="min-h-screen bg-background carbon-texture">
      <div className="container max-w-6xl mx-auto px-4 pb-16">
        <Header />

        <StatsPanel races={races} />

        <motion.div
          key={2026}
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
      </div>
    </div>
  );
};

export default Index;
