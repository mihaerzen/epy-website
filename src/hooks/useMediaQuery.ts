'use client'

import {useCallback,useSyncExternalStore} from 'react'

export function useMediaQuery(query: string) {
  const subscribe = useCallback<(onStoreChange: () => void) => () => void>(
    callback => {
      const matchMedia = window.matchMedia(query)

      matchMedia.addEventListener('change', callback)
      return () => {
        matchMedia.removeEventListener('change', callback)
      }
    },
    [query],
  )

  const getSnapshot = () => window.matchMedia(query).matches

  const getServerSnapshot = () => undefined

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
