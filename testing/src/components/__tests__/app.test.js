import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';

it('shows a comment box', ()=>{
  //using wrapped terminology to indicate our App rendered has additional functionality loaded atop.
  const wrapped = shallow(<App />);

  expect(wrapped.find(CommentBox).length).toEqual(1);

})
