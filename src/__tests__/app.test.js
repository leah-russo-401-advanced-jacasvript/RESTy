// what is the component's "contract"?
// displays some test

import { render, screen, fireEve nt }
import '@testing-library/jest-dom/extend-expect'

import App from '../app.js'

describe ('Testing our app components', ()=> {
  it('should display hello world', ()=> {
    render(<App />);

    const text = screen.findAllByText('Hello from app');

    expect(text).toHaveTextContent('Hello from app')
  })
})