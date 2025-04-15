import React from 'react';
import MainStackNavigation from './navigation/Stack/MainStackNavigation';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MainStackNavigation />;
    </QueryClientProvider>
  );
};

export default App;
