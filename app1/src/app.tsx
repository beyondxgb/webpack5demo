import React from 'react';
import App2Hello from 'app2/Hello';

// const App2Hello = React.lazy(() => import('@atom/app2/Hello'));

const RootComponent = () => {
  return (
    <div className="atom-app">
      <React.Suspense fallback={"loading"}>
        <div>app1</div>
        <App2Hello />
      </React.Suspense>
    </div>
  );
};

export default RootComponent;
