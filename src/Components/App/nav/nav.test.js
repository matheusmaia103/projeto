import { render, screen } from '@testing-library/react';
import Nav from './Nav';
import logo from './logo.png';

render(<Nav/>);

const nav = screen.getByRole('navigation');

test('Is logo rendering', () =>{
    expect(nav).toBeInTheDocument();    
});

test('logo', ()=>{
render(<Nav/>);
const img = screen.getByRole('img');
const src = img.getAttribute('src');

    expect(src).toEqual(logo);
})