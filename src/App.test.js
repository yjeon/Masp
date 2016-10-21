import SignInModalTrigger from './SignInModalTrigger';
import SignUpModalTrigger from './SignUpModalTrigger';
var firebase = jest.fn(); //a auto-generated mock for module firebase

/*
 * beforeEach(*
 * method is gotten from https://github.com/facebook/jest/issues/1353
 * as a work around to fix react-dom and react-test-renderer to call twice,
 * resulting invariant violation.
 * this issue will be fixed in jest v.15.4
 */

beforeEach(() => jest.resetModules());

test('Sign-in-modal opened correctly (using react-dom)', () => {
  const React = require('react');
  const enzyme = require('enzyme');
  // write your test with enzyme
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SignInModalTrigger />, div);
  });
});

test('Sign-in-modal opened correctly (using react-test-renderer)', () => {
  const React = require('react');
  const renderer = require('react-test-renderer');
  // write your test with react-test-renderer
  const component = renderer.create(
    <SignInModalTrigger></SignInModalTrigger>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Sign-in-modal opened correctly and submit working correctly', () => {
    const React = require('react');
    const renderer = require('react-test-renderer');
    // write your test with react-test-renderer
    const component = renderer.create(
            <SignInModalTrigger></SignInModalTrigger>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.submit;
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Sign-in-modal opened correctly and closed correctly', () => {
    const React = require('react');
    const renderer = require('react-test-renderer');
    // write your test with react-test-renderer
    const component = renderer.create(
            <SignInModalTrigger></SignInModalTrigger>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.closeModal;
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Sign-up-modal opened correctly (using react-dom)', () => {
    const React = require('react');
    const enzyme = require('enzyme');
    // write your test with enzyme
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SignUpModalTrigger />, div);
    });
});

test('Sign-up-modal opened correctly (using react-test-renderer)', () => {
    const React = require('react');
    const renderer = require('react-test-renderer');
    // write your test with react-test-renderer
    const component = renderer.create(
            <SignUpModalTrigger></SignUpModalTrigger>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Sign-up-modal opened correctly and submit working correctly', () => {
    const React = require('react');
    const renderer = require('react-test-renderer');
    // write your test with react-test-renderer
    const component = renderer.create(
            <SignUpModalTrigger></SignUpModalTrigger>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.submit;
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Sign-up-modal opened correctly and closed correctly', () => {
    const React = require('react');
    const renderer = require('react-test-renderer');
    // write your test with react-test-renderer
    const component = renderer.create(
            <SignUpModalTrigger></SignUpModalTrigger>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.closeModal;
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
