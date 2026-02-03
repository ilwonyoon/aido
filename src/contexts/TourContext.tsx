'use client';

import { createContext, useContext } from 'react';

const TourContext = createContext(false);

export const TourProvider = TourContext.Provider;

export function useIsTourActive(): boolean {
  return useContext(TourContext);
}
