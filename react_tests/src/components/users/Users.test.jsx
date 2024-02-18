// import "@testing-library/jest-dom/extend-expect";
import {render, screen, userEvent} from '@testing-library/react';
import Users from './Users';
import axios from 'axios';
import MemoryRouter from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import UserDetailsPage from '../../pages/UserDetailsPage';
import AppRouter from '../../router/AppRouter';
import { renderWithRouter } from '../../tests/helpers/renderWithRouter';


jest.mock('axios')

describe('users test', () => {

    let response;

    beforeEach(() => {
        response = {
            data: [
                {
                "id": 1,
                "name": "Leanne Graham",
                },
                {
                "id": 2,
                "name": "Ervin Howell",
                },
                {
                "id": 3,
                "name": "Clementine Bauch",
                },
            ]
        }
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    test('renders', async () => {
        axios.get.mockReturnValue(response)
        render(<Users/>)
        const users = await screen.findAllByTestId('user-item')
        expect(users.length).toEqual(3)
        expect(axios.get).toBeCalledTimes(1)
        // screen.debug()
        

    })

    test('redirect to details page', async () => {
        axios.get.mockReturnValue(response)
        render(renderWithRouter(<Users/>))
        const users = await screen.findAllByTestId('user-item')
        userEvent.click(users[0])
        expect(screen.getByTestId('user-page')).toBeInTheDocument()        
        

    })
})