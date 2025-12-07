import { motion } from "framer-motion";
import { RaceWithStatus, AttendanceStatus } from "@/data/races";
import { cn } from "@/lib/utils";
import { Calendar, MapPin } from "lucide-react";
import { featureFlags } from "@/config/featureFlags";

interface RaceCardProps {
  race: RaceWithStatus;
  onStatusChange: (id: string, status: AttendanceStatus) => void;
  index: number;
}

const statusConfig: Record<AttendanceStatus, { label: string; className: string }> = {
  "not-attended": {
    label: "Not Attended",
    className: "bg-status-not-attended/20 text-muted-foreground border-status-not-attended/30",
  },
  attended: {
    label: "Attended",
    className: "bg-status-attended/20 text-status-attended border-status-attended/50",
  },
  planned: {
    label: "Planned",
    className: "bg-status-planned/20 text-status-planned border-status-planned/50",
  },
};

export const RaceCard = ({ race, onStatusChange, index }: RaceCardProps) => {
  const formattedDate = new Date(race.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const statuses: AttendanceStatus[] = ["not-attended", "attended", "planned"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      className={cn(
        "group relative overflow-hidden rounded-sm border",
        "transition-all duration-300 hover:shadow-lg",
        race.status === "attended" && "bg-status-attended/10 border-status-attended/30 hover:border-status-attended/50 hover:shadow-status-attended/10",
        race.status === "planned" && "bg-status-planned/10 border-status-planned/30 hover:border-status-planned/50 hover:shadow-status-planned/10",
        race.status === "not-attended" && "bg-card border-border hover:border-primary/50 hover:shadow-primary/10"
      )}
    >
      {/* Round number accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

      <div className="p-4 pl-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{race.flagEmoji}</span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Round {race.round}
                </span>
              </div>
              <h3 className="font-bold text-foreground text-lg leading-tight mt-0.5">
                {race.name}
              </h3>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col gap-1.5 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            <span className="truncate">{race.circuit}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-primary" />
            <span>{formattedDate}</span>
          </div>
          <div className="h-1">
            {race.status === 'attended' && <div className="font-bold text-green-600">ATTENDED IN {race.in}!</div>}
            {race.status === 'planned' && <div className="font-bold text-yellow-600">PLANNED IN {race.in}!</div>}
          </div>
        </div>

        {/* Status buttons */}
        {featureFlags.enableStatusChange && (
          <div className="flex gap-2">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => onStatusChange(race.id, status)}
                className={cn(
                  "flex-1 py-2 px-3 text-xs font-semibold uppercase tracking-wide rounded-sm border transition-all duration-200",
                  race.status === status
                    ? statusConfig[status].className
                    : "bg-secondary/50 text-muted-foreground border-border hover:bg-secondary hover:border-muted-foreground/30"
                )}
              >
                {statusConfig[status].label}
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};
