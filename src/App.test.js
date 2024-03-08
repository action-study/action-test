import React from 'react';
import { render, screen } from "@testing-library/react"
import App from './App';

describe('<App />', () => {
  it('matches snapshot', () => {
    render(<App />);
    expect(screen.container).toMatchSnapshot();
  });
  it('shows the props correctly', () => {
    render(<App />);
    screen.getByText('src/App.js');
    // ERROR!
    screen.getByText('Learn React!');
    // screen.getByText('Learn React!!');
  });
});
