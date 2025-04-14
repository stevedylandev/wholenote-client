import React, { createContext, useContext, useState } from 'react';

interface PlaybackContextType {
  activePlayerId: string | null;
  setActivePlayerId: (id: string | null) => void;
}

const PlaybackContext = createContext<PlaybackContextType>({
  activePlayerId: null,
  setActivePlayerId: () => { },
});

export const PlaybackProvider = ({ children }: { children: React.ReactNode }) => {
  const [activePlayerId, setActivePlayerId] = useState<string | null>(null);

  return (
    <PlaybackContext.Provider value={{ activePlayerId, setActivePlayerId }}>
      {children}
    </PlaybackContext.Provider>
  );
};

export const usePlayback = () => useContext(PlaybackContext);
