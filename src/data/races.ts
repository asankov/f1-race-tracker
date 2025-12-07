export type AttendanceStatus = "not-attended" | "attended" | "planned";

export interface Race {
  id: string;
  round: number;
  name: string;
  country: string;
  circuit: string;
  date: string;
  flagEmoji: string;
}

export interface RaceWithStatus extends Race {
  status: AttendanceStatus;
}

export const races2024: Race[] = [
  { id: "2024-01", round: 1, name: "Bahrain Grand Prix", country: "Bahrain", circuit: "Bahrain International Circuit", date: "2024-03-02", flagEmoji: "🇧🇭" },
  { id: "2024-02", round: 2, name: "Saudi Arabian Grand Prix", country: "Saudi Arabia", circuit: "Jeddah Corniche Circuit", date: "2024-03-09", flagEmoji: "🇸🇦" },
  { id: "2024-03", round: 3, name: "Australian Grand Prix", country: "Australia", circuit: "Albert Park Circuit", date: "2024-03-24", flagEmoji: "🇦🇺" },
  { id: "2024-04", round: 4, name: "Japanese Grand Prix", country: "Japan", circuit: "Suzuka International Racing Course", date: "2024-04-07", flagEmoji: "🇯🇵" },
  { id: "2024-05", round: 5, name: "Chinese Grand Prix", country: "China", circuit: "Shanghai International Circuit", date: "2024-04-21", flagEmoji: "🇨🇳" },
  { id: "2024-06", round: 6, name: "Miami Grand Prix", country: "USA", circuit: "Miami International Autodrome", date: "2024-05-05", flagEmoji: "🇺🇸" },
  { id: "2024-07", round: 7, name: "Emilia Romagna Grand Prix", country: "Italy", circuit: "Autodromo Enzo e Dino Ferrari", date: "2024-05-19", flagEmoji: "🇮🇹" },
  { id: "2024-08", round: 8, name: "Monaco Grand Prix", country: "Monaco", circuit: "Circuit de Monaco", date: "2024-05-26", flagEmoji: "🇲🇨" },
  { id: "2024-09", round: 9, name: "Canadian Grand Prix", country: "Canada", circuit: "Circuit Gilles Villeneuve", date: "2024-06-09", flagEmoji: "🇨🇦" },
  { id: "2024-10", round: 10, name: "Spanish Grand Prix", country: "Spain", circuit: "Circuit de Barcelona-Catalunya", date: "2024-06-23", flagEmoji: "🇪🇸" },
  { id: "2024-11", round: 11, name: "Austrian Grand Prix", country: "Austria", circuit: "Red Bull Ring", date: "2024-06-30", flagEmoji: "🇦🇹" },
  { id: "2024-12", round: 12, name: "British Grand Prix", country: "UK", circuit: "Silverstone Circuit", date: "2024-07-07", flagEmoji: "🇬🇧" },
  { id: "2024-13", round: 13, name: "Hungarian Grand Prix", country: "Hungary", circuit: "Hungaroring", date: "2024-07-21", flagEmoji: "🇭🇺" },
  { id: "2024-14", round: 14, name: "Belgian Grand Prix", country: "Belgium", circuit: "Circuit de Spa-Francorchamps", date: "2024-07-28", flagEmoji: "🇧🇪" },
  { id: "2024-15", round: 15, name: "Dutch Grand Prix", country: "Netherlands", circuit: "Circuit Zandvoort", date: "2024-08-25", flagEmoji: "🇳🇱" },
  { id: "2024-16", round: 16, name: "Italian Grand Prix", country: "Italy", circuit: "Autodromo Nazionale di Monza", date: "2024-09-01", flagEmoji: "🇮🇹" },
  { id: "2024-17", round: 17, name: "Azerbaijan Grand Prix", country: "Azerbaijan", circuit: "Baku City Circuit", date: "2024-09-15", flagEmoji: "🇦🇿" },
  { id: "2024-18", round: 18, name: "Singapore Grand Prix", country: "Singapore", circuit: "Marina Bay Street Circuit", date: "2024-09-22", flagEmoji: "🇸🇬" },
  { id: "2024-19", round: 19, name: "United States Grand Prix", country: "USA", circuit: "Circuit of the Americas", date: "2024-10-20", flagEmoji: "🇺🇸" },
  { id: "2024-20", round: 20, name: "Mexico City Grand Prix", country: "Mexico", circuit: "Autódromo Hermanos Rodríguez", date: "2024-10-27", flagEmoji: "🇲🇽" },
  { id: "2024-21", round: 21, name: "São Paulo Grand Prix", country: "Brazil", circuit: "Autódromo José Carlos Pace", date: "2024-11-03", flagEmoji: "🇧🇷" },
  { id: "2024-22", round: 22, name: "Las Vegas Grand Prix", country: "USA", circuit: "Las Vegas Strip Circuit", date: "2024-11-23", flagEmoji: "🇺🇸" },
  { id: "2024-23", round: 23, name: "Qatar Grand Prix", country: "Qatar", circuit: "Lusail International Circuit", date: "2024-12-01", flagEmoji: "🇶🇦" },
  { id: "2024-24", round: 24, name: "Abu Dhabi Grand Prix", country: "UAE", circuit: "Yas Marina Circuit", date: "2024-12-08", flagEmoji: "🇦🇪" },
];

export const races2025: Race[] = [
  { id: "2025-01", round: 1, name: "Australian Grand Prix", country: "Australia", circuit: "Albert Park Circuit", date: "2025-03-16", flagEmoji: "🇦🇺" },
  { id: "2025-02", round: 2, name: "Chinese Grand Prix", country: "China", circuit: "Shanghai International Circuit", date: "2025-03-23", flagEmoji: "🇨🇳" },
  { id: "2025-03", round: 3, name: "Japanese Grand Prix", country: "Japan", circuit: "Suzuka International Racing Course", date: "2025-04-06", flagEmoji: "🇯🇵" },
  { id: "2025-04", round: 4, name: "Bahrain Grand Prix", country: "Bahrain", circuit: "Bahrain International Circuit", date: "2025-04-13", flagEmoji: "🇧🇭" },
  { id: "2025-05", round: 5, name: "Saudi Arabian Grand Prix", country: "Saudi Arabia", circuit: "Jeddah Corniche Circuit", date: "2025-04-20", flagEmoji: "🇸🇦" },
  { id: "2025-06", round: 6, name: "Miami Grand Prix", country: "USA", circuit: "Miami International Autodrome", date: "2025-05-04", flagEmoji: "🇺🇸" },
  { id: "2025-07", round: 7, name: "Emilia Romagna Grand Prix", country: "Italy", circuit: "Autodromo Enzo e Dino Ferrari", date: "2025-05-18", flagEmoji: "🇮🇹" },
  { id: "2025-08", round: 8, name: "Monaco Grand Prix", country: "Monaco", circuit: "Circuit de Monaco", date: "2025-05-25", flagEmoji: "🇲🇨" },
  { id: "2025-09", round: 9, name: "Spanish Grand Prix", country: "Spain", circuit: "Circuit de Barcelona-Catalunya", date: "2025-06-01", flagEmoji: "🇪🇸" },
  { id: "2025-10", round: 10, name: "Canadian Grand Prix", country: "Canada", circuit: "Circuit Gilles Villeneuve", date: "2025-06-15", flagEmoji: "🇨🇦" },
  { id: "2025-11", round: 11, name: "Austrian Grand Prix", country: "Austria", circuit: "Red Bull Ring", date: "2025-06-29", flagEmoji: "🇦🇹" },
  { id: "2025-12", round: 12, name: "British Grand Prix", country: "UK", circuit: "Silverstone Circuit", date: "2025-07-06", flagEmoji: "🇬🇧" },
  { id: "2025-13", round: 13, name: "Belgian Grand Prix", country: "Belgium", circuit: "Circuit de Spa-Francorchamps", date: "2025-07-27", flagEmoji: "🇧🇪" },
  { id: "2025-14", round: 14, name: "Hungarian Grand Prix", country: "Hungary", circuit: "Hungaroring", date: "2025-08-03", flagEmoji: "🇭🇺" },
  { id: "2025-15", round: 15, name: "Dutch Grand Prix", country: "Netherlands", circuit: "Circuit Zandvoort", date: "2025-08-31", flagEmoji: "🇳🇱" },
  { id: "2025-16", round: 16, name: "Italian Grand Prix", country: "Italy", circuit: "Autodromo Nazionale di Monza", date: "2025-09-07", flagEmoji: "🇮🇹" },
  { id: "2025-17", round: 17, name: "Azerbaijan Grand Prix", country: "Azerbaijan", circuit: "Baku City Circuit", date: "2025-09-21", flagEmoji: "🇦🇿" },
  { id: "2025-18", round: 18, name: "Singapore Grand Prix", country: "Singapore", circuit: "Marina Bay Street Circuit", date: "2025-10-05", flagEmoji: "🇸🇬" },
  { id: "2025-19", round: 19, name: "United States Grand Prix", country: "USA", circuit: "Circuit of the Americas", date: "2025-10-19", flagEmoji: "🇺🇸" },
  { id: "2025-20", round: 20, name: "Mexico City Grand Prix", country: "Mexico", circuit: "Autódromo Hermanos Rodríguez", date: "2025-10-26", flagEmoji: "🇲🇽" },
  { id: "2025-21", round: 21, name: "São Paulo Grand Prix", country: "Brazil", circuit: "Autódromo José Carlos Pace", date: "2025-11-09", flagEmoji: "🇧🇷" },
  { id: "2025-22", round: 22, name: "Las Vegas Grand Prix", country: "USA", circuit: "Las Vegas Strip Circuit", date: "2025-11-22", flagEmoji: "🇺🇸" },
  { id: "2025-23", round: 23, name: "Qatar Grand Prix", country: "Qatar", circuit: "Lusail International Circuit", date: "2025-11-30", flagEmoji: "🇶🇦" },
  { id: "2025-24", round: 24, name: "Abu Dhabi Grand Prix", country: "UAE", circuit: "Yas Marina Circuit", date: "2025-12-07", flagEmoji: "🇦🇪" },
];

export const races2026: Race[] = [
  { id: "2026-01", round: 1, name: "Australian Grand Prix", country: "Australia", circuit: "Albert Park Circuit", date: "2026-03-15", flagEmoji: "🇦🇺" },
  { id: "2026-02", round: 2, name: "Chinese Grand Prix", country: "China", circuit: "Shanghai International Circuit", date: "2026-03-22", flagEmoji: "🇨🇳" },
  { id: "2026-03", round: 3, name: "Japanese Grand Prix", country: "Japan", circuit: "Suzuka International Racing Course", date: "2026-04-05", flagEmoji: "🇯🇵" },
  { id: "2026-04", round: 4, name: "Bahrain Grand Prix", country: "Bahrain", circuit: "Bahrain International Circuit", date: "2026-04-12", flagEmoji: "🇧🇭" },
  { id: "2026-05", round: 5, name: "Saudi Arabian Grand Prix", country: "Saudi Arabia", circuit: "Jeddah Corniche Circuit", date: "2026-04-19", flagEmoji: "🇸🇦" },
  { id: "2026-06", round: 6, name: "Miami Grand Prix", country: "USA", circuit: "Miami International Autodrome", date: "2026-05-03", flagEmoji: "🇺🇸" },
  { id: "2026-07", round: 7, name: "Emilia Romagna Grand Prix", country: "Italy", circuit: "Autodromo Enzo e Dino Ferrari", date: "2026-05-17", flagEmoji: "🇮🇹" },
  { id: "2026-08", round: 8, name: "Monaco Grand Prix", country: "Monaco", circuit: "Circuit de Monaco", date: "2026-05-24", flagEmoji: "🇲🇨" },
  { id: "2026-09", round: 9, name: "Spanish Grand Prix", country: "Spain", circuit: "Circuit de Barcelona-Catalunya", date: "2026-05-31", flagEmoji: "🇪🇸" },
  { id: "2026-10", round: 10, name: "Canadian Grand Prix", country: "Canada", circuit: "Circuit Gilles Villeneuve", date: "2026-06-14", flagEmoji: "🇨🇦" },
  { id: "2026-11", round: 11, name: "Austrian Grand Prix", country: "Austria", circuit: "Red Bull Ring", date: "2026-06-28", flagEmoji: "🇦🇹" },
  { id: "2026-12", round: 12, name: "British Grand Prix", country: "UK", circuit: "Silverstone Circuit", date: "2026-07-05", flagEmoji: "🇬🇧" },
  { id: "2026-13", round: 13, name: "Belgian Grand Prix", country: "Belgium", circuit: "Circuit de Spa-Francorchamps", date: "2026-07-26", flagEmoji: "🇧🇪" },
  { id: "2026-14", round: 14, name: "Hungarian Grand Prix", country: "Hungary", circuit: "Hungaroring", date: "2026-08-02", flagEmoji: "🇭🇺" },
  { id: "2026-15", round: 15, name: "Dutch Grand Prix", country: "Netherlands", circuit: "Circuit Zandvoort", date: "2026-08-30", flagEmoji: "🇳🇱" },
  { id: "2026-16", round: 16, name: "Italian Grand Prix", country: "Italy", circuit: "Autodromo Nazionale di Monza", date: "2026-09-06", flagEmoji: "🇮🇹" },
  { id: "2026-17", round: 17, name: "Azerbaijan Grand Prix", country: "Azerbaijan", circuit: "Baku City Circuit", date: "2026-09-20", flagEmoji: "🇦🇿" },
  { id: "2026-18", round: 18, name: "Singapore Grand Prix", country: "Singapore", circuit: "Marina Bay Street Circuit", date: "2026-10-04", flagEmoji: "🇸🇬" },
  { id: "2026-19", round: 19, name: "United States Grand Prix", country: "USA", circuit: "Circuit of the Americas", date: "2026-10-18", flagEmoji: "🇺🇸" },
  { id: "2026-20", round: 20, name: "Mexico City Grand Prix", country: "Mexico", circuit: "Autódromo Hermanos Rodríguez", date: "2026-10-25", flagEmoji: "🇲🇽" },
  { id: "2026-21", round: 21, name: "São Paulo Grand Prix", country: "Brazil", circuit: "Autódromo José Carlos Pace", date: "2026-11-08", flagEmoji: "🇧🇷" },
  { id: "2026-22", round: 22, name: "Las Vegas Grand Prix", country: "USA", circuit: "Las Vegas Strip Circuit", date: "2026-11-21", flagEmoji: "🇺🇸" },
  { id: "2026-23", round: 23, name: "Qatar Grand Prix", country: "Qatar", circuit: "Lusail International Circuit", date: "2026-11-29", flagEmoji: "🇶🇦" },
  { id: "2026-24", round: 24, name: "Abu Dhabi Grand Prix", country: "UAE", circuit: "Yas Marina Circuit", date: "2026-12-06", flagEmoji: "🇦🇪" },
];

export const racesByYear: Record<number, Race[]> = {
  2024: races2024,
  2025: races2025,
  2026: races2026,
};
