import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';
import Root from '../../Root';

let wrapped;

beforeEach(()=>{
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

it('has both text area and button',()=>{
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

//used to describe certain groups of tests in a file
describe('the text area', ()=>{
  // http://airbnb.io/enzyme/docs/api/ReactWrapper/simulate.html
  beforeEach(()=>{
    //NOTE: 'change'.  NOT 'onChange'.
    wrapped.find('textarea').simulate('change',{
      target: { value: 'new comment' }
    });

    wrapped.update();
  })

  it('has a text area which accepts text',()=>{
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('after submit, text area empties', ()=>{
    //NOTE: this line of code WOULD be necessary -- but the previous tests offers coverage
    // expect(wrapped.find('textarea').prop('value')).toEqual('new comment')

    //NOTE: only 'submit'.  NOT 'onSubmit'
    wrapped.find('form').simulate('submit');
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('')
  })

})

//NOTE: mount renders the full DOM.  This might interfere with other parts of our app -- causing problems.
//better is, after each test, to unmount the wrapped component
//http://airbnb.io/enzyme/docs/api/ReactWrapper/unmount.html
afterEach(()=>{
  wrapped.unmount();
});
