'use client';

import { useEffect } from 'react';
import { notifyVisit } from './notifyVisit';

export default function VisitNotifier() {
  useEffect(() => {
    notifyVisit();
  }, []);

  return null; // This component doesn't render anything
}
