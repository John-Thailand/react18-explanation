import React, { Suspense, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { AutoBatchEventHandler } from './components/AutoBatchEventHandler';
import { AutoBatchOther } from './components/AutoBatchOther';
import { Transition } from './components/Transition';
import { ReactQuery } from './components/ReactQuery';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  useEffect(() => {
    console.log('Appがレンダリングされた！');
  }, []);
  return (
    <div className="App">
      <AutoBatchEventHandler />
      <AutoBatchOther />
      <hr />
      <Transition />
      <hr />
      <ErrorBoundary fallback={<p>エラーです！</p>}>
        <Suspense fallback={<p>ローディング中</p>}>
          <ReactQuery />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
