import { useState, useEffect, useCallback } from "react";
import { Race, RaceWithStatus, AttendanceStatus, races } from "@/data/races";

const STORAGE_KEY = "f1-race-tracker";

interface StoredData {
  [raceId: string]: AttendanceStatus;
}

export const useRaceTracker = () => {
  const [racesWithStatus, setRacesWithStatus] = useState<RaceWithStatus[]>([]);

  // Load data from localStorage
  const loadStoredData = useCallback((): StoredData => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  }, []);

  // Save data to localStorage
  const saveStoredData = useCallback((data: StoredData) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error("Failed to save to localStorage:", error);
    }
  }, []);

  // Initialize races with status
  useEffect(() => {
    const withStatus: RaceWithStatus[] = races.map((race) => ({
      ...race,
    }));

    setRacesWithStatus(withStatus);
  }, []);

  // Update race status
  const updateStatus = useCallback(
    (raceId: string, status: AttendanceStatus) => {
      setRacesWithStatus((prev) =>
        prev.map((race) =>
          race.id === raceId ? { ...race, status } : race
        )
      );

      // Update localStorage
      const storedData = loadStoredData();
      storedData[raceId] = status;
      saveStoredData(storedData);
    },
    [loadStoredData, saveStoredData]
  );

  return {
    races: racesWithStatus,
    updateStatus,
  };
};
