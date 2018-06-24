import commentsReducer from '../comments';
import { SAVE_COMMENT } from '../../actions/types';

it('handles actions of type "SAVE_COMMENT"',()=>{
  const action = {
    type: SAVE_COMMENT,
    payload: 'This is a new comment'
  };

  //newState should return an array containing action.payload
  const newState = commentsReducer([],action);
  expect(newState).toEqual(['This is a new comment']);
});

it('handles actions of unknown type',()=>{
  const newState = commentsReducer([],{type:"hoot-nanny"});

  expect(newState).toEqual([]);
});
