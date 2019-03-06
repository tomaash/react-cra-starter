import React from 'react'
import { Link, NotFoundBoundary, useLoadingRoute } from 'react-navi'

function AppLayout({ children }) {
  let loadingRoute = useLoadingRoute()

  return (
    <div className="AppLayout">
      {/* <LoadingBar isActive={!!loadingRoute} /> */}
      <header className="AppLayout-header">
        <nav className="AppLayout-nav">
          <Link href='/' activeClassName='active' exact>
            Home
          </Link>
          <Link href='/foo/' activeClassName='active'>
            Foo
          </Link>
          <Link href='/list/' activeClassName='active'>
            List
          </Link>
          <Link href='/form/' activeClassName='active'>
            Form
          </Link>
        </nav>
      </header>
      <main>
        <NotFoundBoundary render={renderNotFound}>
          {children || null}
        </NotFoundBoundary>
      </main>
    </div>
  )
}

// Note that create-react-navi-app will always show an error screen when this
// is called. This is because the underlying react-scripts package show
// the error screen when a NotFoundError is thrown, even though it's caught
// by <NotFoundBoundary>. To see the error rendered by this function,
// you'll just need to close the error overlay with the "x" at the top right.
function renderNotFound() {
  return (
    <div className='App-error'>
      <h1>404 - Not Found</h1>
    </div>
  )
}

export default AppLayout
