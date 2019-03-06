import React from 'react'
import { useCurrentRoute } from 'react-navi'

export function withCurrentRoute(Component) {
  return function WrappedComponent(props) {
    const hookResult = useCurrentRoute();
    return <Component {...props} currentRoute={hookResult} />
  } as typeof Component
}
