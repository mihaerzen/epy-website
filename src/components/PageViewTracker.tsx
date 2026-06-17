'use client';

import posthog from 'posthog-js';
import {useEffect} from 'react';

export function PageViewTracker({event}: {event: string}) {
  useEffect(() => {
    posthog.capture(event);
  }, [event]);

  return null;
}
