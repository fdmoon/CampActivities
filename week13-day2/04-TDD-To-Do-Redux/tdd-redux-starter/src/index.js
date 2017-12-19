//Remember, in Redux we need both redux (the core library) and react-redux (to provide it to react components)
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/reducer.js'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(reducer)

//this provider makes this redux store available to all nested components.
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
    );
registerServiceWorker();
