import React from 'react'
import { Provider } from 'react-redux';

import { TMain } from './components/templates/t-main';

import store from './store';
import useRouter from './hooks/useRouter';

const App = () => {
  const { match } = useRouter();

  return (
      <React.StrictMode>
          <Provider store={store}>
              <TMain>
                  { match || `NOT FOUND`}
              </TMain>
          </Provider>
      </React.StrictMode>
  );
};

export default App;
