import React from 'react';
import App1Hello from 'app1/Hello';

const RootComponent = () => {
  return (
    <div className="atom-app">
      <React.Suspense fallback={"loading"}>
        <div>app2</div>
        <App1Hello />
      </React.Suspense>
    </div>
  );
};

export default RootComponent;
