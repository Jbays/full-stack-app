import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from '../Root';
import App from '../components/App';

beforeEach(()=>{
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments',{
    status: 200,
    response: [{name: 'fetch 1'},{name: 'fetch 2'}]
  });
});

afterEach(()=>{
  moxios.uninstall();
});

it('can both fetch and display list of comments',(done)=>{
  //render the *entire* App
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  )
  //find the 'fetchComments' button.  Click it.
  wrapped.find('.fetch-comments').simulate('click');

  //introduce a TINY little pause
  moxios.wait(()=>{
    wrapped.update();

    //Expect to find a list of comments!
    expect(wrapped.find('li').length).toEqual(2);

    //the test won't complete until after calling done()
    done();
    wrapped.unmount();
  })
})
