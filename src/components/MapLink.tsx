'use client';

import posthog from 'posthog-js';
import {ReactNode} from 'react';

export function MapLink({href, children}: {href: string; children: ReactNode}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => posthog.capture('map_link_clicked')}
    >
      {children}
    </a>
  );
}
