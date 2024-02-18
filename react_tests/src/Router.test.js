import { render, screen, userEvent } from '@testing-library/react';
import App from './App';
import MemoryRouter from 'react-router-dom'

describe('router test', () => {
    test('router test', () => {
        render(
        <MemoryRouter>
            <App/>
        </MemoryRouter>
        )
        const mainLink = screen.getByTestId('main-link')
        const aboutLink = screen.getByTestId('about-link')
        userEvent.click(aboutLink)
        expect(screen.getByTestId('about-page')).toBeInTheDocument()
        userEvent.click(mainLink)
        expect(screen.getByTestId('main-page')).toBeInTheDocument()
        
    })

    test('error page test', () => {
        render(
        <MemoryRouter initialEntries={['/sadafgsad']}>
            <App/>
        </MemoryRouter>
        )
        
        expect(screen.getByTestId('error-page')).toBeInTheDocument()
        
        
    }) 


})