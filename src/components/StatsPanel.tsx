import { motion } from "framer-motion";
import { RaceWithStatus } from "@/data/races";
import { Trophy, Calendar, CircleDot, Flag } from "lucide-react";

interface StatsPanelProps {
  races: RaceWithStatus[];
}

export const StatsPanel = ({ races }: StatsPanelProps) => {
  const attended = races.filter((r) => r.status === "attended").length;
  const planned = races.filter((r) => r.status === "planned").length;
  const notAttended = races.filter((r) => r.status === "not-attended").length;
  const total = races.length;

  const stats = [
    {
      label: "Total Races",
      value: total,
      icon: Flag,
      color: "text-foreground",
      bgColor: "bg-secondary",
    },
    {
      label: "Attended",
      value: attended,
      icon: Trophy,
      color: "text-status-attended",
      bgColor: "bg-status-attended/10",
    },
    {
      label: "Planned",
      value: planned,
      icon: Calendar,
      color: "text-status-planned",
      bgColor: "bg-status-planned/10",
    },
    {
      label: "Not Attended",
      value: notAttended,
      icon: CircleDot,
      color: "text-muted-foreground",
      bgColor: "bg-muted/50",
    },
  ];

  const attendedRate = total > 0 ? (attended / total) * 100 : 0;
  const plannedRate = total > 0 ? (planned / total) * 100 : 0;
  const attendanceRate = total > 0 ? Math.round(((attended + planned) / total) * 100) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-8"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            className={`${stat.bgColor} rounded-sm p-4 border border-border`}
          >
            <div className="flex items-center gap-3">
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
              <div>
                <p className={`text-2xl font-black ${stat.color}`}>{stat.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="bg-secondary rounded-sm p-4 border border-border">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-foreground">Season Coverage</span>
          <span className="text-sm font-black text-primary">{attendanceRate}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden relative">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${attendedRate}%` }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="h-full bg-red-500 rounded-full absolute left-0"
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${plannedRate}%` }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="h-full bg-yellow-500 rounded-full absolute"
            style={{ left: `${attendedRate}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          {attended} of {total} races attended, {planned} planned
        </p>
      </div>
    </motion.div>
  );
};
