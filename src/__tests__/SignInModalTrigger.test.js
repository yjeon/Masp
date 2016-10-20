import React from 'react';
import SignInModalTrigger from '../SignInModalTrigger';
import SignUpModalTrigger from '../SignUpModalTrigger';
import firebase from 'firebase';
import renderer from 'react-test-renderer';

function scryRenderedDOMComponentsWithId(tree, id) {
  return TestUtils.findAllInRenderedTree(tree, function(inst) {
    return TestUtils.isDOMComponent(inst) && inst.props.id === id;
  });
}

test('Sign-in-modal popped up when clicked', () => {
  const component = renderer.create(
    <SignInModalTrigger></SignInModalTrigger>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  //check if submit button works
  const elemButton = scryRenderedDOMComponentsWithId(tree, "modal-sign-in-submit-button");
  elemButton.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  //check if modal-open works
  const elemModalOpen = scryRenderedDOMComponentsWithId(tree, "sign-in-open-modal");
  elemModalOpen.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  //check if modal-close works
  const elemModalClose = scryRenderedDOMComponentsWithId(tree, "modal-sign-in-close-button");
  elemModalClose.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})

test('Sign-up-modal popped up when clicked', () => {
  const component = renderer.create(
      <SignUpModalTrigger></SignUpModalTrigger>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  //check if submit button works
  const elemButton = scryRenderedDOMComponentsWithId(tree, "modal-sign-up-submit-button");
  elemButton.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  //check if modal-open works
  const elemModalOpen = scryRenderedDOMComponentsWithId(tree, "sign-up-open-modal");
  elemModalOpen.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  //check if modal-close works
  const elemModalClose = scryRenderedDOMComponentsWithId(tree, "modal-sign-up-close-button");
  elemModalClose.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})

