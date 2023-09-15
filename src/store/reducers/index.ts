import appReducer from './appReducer';
import modalReducer from './modalReducer';
import trelloReducer from './trelloReducer';

const rootReducer = {
  app: appReducer,
  trello: trelloReducer,
  modal: modalReducer,
};

export default rootReducer;
