import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';

let wrapped;

beforeEach(()=>{
  wrapped = mount(<CommentBox />);
});

it('has both text area and button',()=>{
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

it('has a text area which accepts text',()=>{
  // http://airbnb.io/enzyme/docs/api/ReactWrapper/simulate.html

  //'change'.  NOT 'onChange'.
  wrapped.find('textarea').simulate('change',{
    target: { value: 'new comment' }
  });

  wrapped.update();

  expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});

//NOTE: mount renders the full DOM.  This might interfere with other parts of our app -- causing problems.
//better is, after each test, to unmount the wrapped component
//http://airbnb.io/enzyme/docs/api/ReactWrapper/unmount.html
afterEach(()=>{
  wrapped.unmount();
});
