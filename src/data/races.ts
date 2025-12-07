export type AttendanceStatus = "not-attended" | "attended" | "planned";

type BaseRace = {
  id: string;
  round: number;
  name: string;
  country: string;
  circuit: string;
  date: string;
  flagEmoji: string;
};

type NotAttendedRace = BaseRace & {
  status: "not-attended";
  in?: string;
};

type AttendedRace = BaseRace & {
  status: "attended";
  in: string;
};

type PlannedRace = BaseRace & {
  status: "planned";
  in: string;
};

export type Race = NotAttendedRace | AttendedRace | PlannedRace;

export const races: Race[] = [
  { id: "2026-01", round: 1, name: "Australian Grand Prix", country: "Australia", circuit: "Albert Park Circuit", date: "2026-03-08", flagEmoji: "🇦🇺", status: "not-attended" },
  { id: "2026-02", round: 2, name: "Chinese Grand Prix", country: "China", circuit: "Shanghai International Circuit", date: "2026-03-15", flagEmoji: "🇨🇳", status: "not-attended" },
  { id: "2026-03", round: 3, name: "Japanese Grand Prix", country: "Japan", circuit: "Suzuka International Racing Course", date: "2026-03-29", flagEmoji: "🇯🇵", status: "not-attended" },
  { id: "2026-04", round: 4, name: "Bahrain Grand Prix", country: "Bahrain", circuit: "Bahrain International Circuit", date: "2026-04-12", flagEmoji: "🇧🇭", status: "not-attended" },
  { id: "2026-05", round: 5, name: "Saudi Arabian Grand Prix", country: "Saudi Arabia", circuit: "Jeddah Corniche Circuit", date: "2026-04-19", flagEmoji: "🇸🇦", status: "not-attended" },
  { id: "2026-06", round: 6, name: "Miami Grand Prix", country: "USA", circuit: "Miami International Autodrome", date: "2026-05-03", flagEmoji: "🇺🇸", status: "not-attended" },
  { id: "2026-10", round: 7, name: "Canadian Grand Prix", country: "Canada", circuit: "Circuit Gilles Villeneuve", date: "2026-05-24", flagEmoji: "🇨🇦", status: "not-attended" },
  { id: "2026-08", round: 8, name: "Monaco Grand Prix", country: "Monaco", circuit: "Circuit de Monaco", date: "2026-06-07", flagEmoji: "🇲🇨", status: "not-attended" },
  { id: "2026-09", round: 9, name: "Barcelona-Catalunya Grand Prix", country: "Spain", circuit: "Circuit de Barcelona-Catalunya", date: "2026-06-14", flagEmoji: "🇪🇸", status: "not-attended" },
  { id: "2026-11", round: 10, name: "Austrian Grand Prix", country: "Austria", circuit: "Red Bull Ring", date: "2026-06-28", flagEmoji: "🇦🇹", status: "not-attended" },
  { id: "2026-12", round: 11, name: "British Grand Prix", country: "UK", circuit: "Silverstone Circuit", date: "2026-07-05", flagEmoji: "🇬🇧", status: "not-attended" },
  { id: "2026-13", round: 12, name: "Belgian Grand Prix", country: "Belgium", circuit: "Circuit de Spa-Francorchamps", date: "2026-07-19", flagEmoji: "🇧🇪", status: "not-attended" },
  { id: "2026-14", round: 13, name: "Hungarian Grand Prix", country: "Hungary", circuit: "Hungaroring", date: "2026-07-26", flagEmoji: "🇭🇺", status: "not-attended" },
  { id: "2026-15", round: 14, name: "Dutch Grand Prix", country: "Netherlands", circuit: "Circuit Zandvoort", date: "2026-08-23", flagEmoji: "🇳🇱", status: "not-attended" },
  { id: "2026-16", round: 15, name: "Italian Grand Prix", country: "Italy", circuit: "Autodromo Nazionale di Monza", date: "2026-09-06", flagEmoji: "🇮🇹", status: "planned", in: "2026" },
  { id: "2026-16", round: 16, name: "Spanish Grand Prix", country: "Spain", circuit: "Madring", date: "2026-09-13", flagEmoji: "🇪🇸", status: "not-attended", in: "2026" },
  { id: "2026-17", round: 17, name: "Azerbaijan Grand Prix", country: "Azerbaijan", circuit: "Baku City Circuit", date: "2026-09-26", flagEmoji: "🇦🇿", status: "not-attended" },
  { id: "2026-18", round: 18, name: "Singapore Grand Prix", country: "Singapore", circuit: "Marina Bay Street Circuit", date: "2026-10-11", flagEmoji: "🇸🇬", status: "not-attended" },
  { id: "2026-19", round: 19, name: "United States Grand Prix", country: "USA", circuit: "Circuit of the Americas", date: "2026-10-25", flagEmoji: "🇺🇸", status: "not-attended" },
  { id: "2026-20", round: 20, name: "Mexico City Grand Prix", country: "Mexico", circuit: "Autódromo Hermanos Rodríguez", date: "2026-11-01", flagEmoji: "🇲🇽", status: "not-attended" },
  { id: "2026-21", round: 21, name: "São Paulo Grand Prix", country: "Brazil", circuit: "Autódromo José Carlos Pace", date: "2026-11-08", flagEmoji: "🇧🇷", status: "not-attended" },
  { id: "2026-22", round: 22, name: "Las Vegas Grand Prix", country: "USA", circuit: "Las Vegas Strip Circuit", date: "2026-11-21", flagEmoji: "🇺🇸", status: "not-attended" },
  { id: "2026-23", round: 23, name: "Qatar Grand Prix", country: "Qatar", circuit: "Lusail International Circuit", date: "2026-11-29", flagEmoji: "🇶🇦", status: "attended", in: "2025" },
  { id: "2026-24", round: 24, name: "Abu Dhabi Grand Prix", country: "UAE", circuit: "Yas Marina Circuit", date: "2026-12-06", flagEmoji: "🇦🇪", status: "not-attended" },
];
