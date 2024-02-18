import { screen, userEvent } from "@testing-library/react"
import { renderWithRouter } from "../../tests/helpers/renderWithRouter"
import NavBar from "./NavBar"

describe('nav bar test', () => {
   
    

    test('about page test', () => {
        renderWithRouter(<NavBar/>)
        const aboutLink = screen.getByTestId('about-link')
        userEvent.click(aboutLink)
        expect(screen.getByTestId('about-page')).toBeInTheDocument()
    })

    test('main page test', () => {
        renderWithRouter(<NavBar/>)
        const mainLink = screen.getByTestId('main-link')
        userEvent.click(mainLink)
        expect(screen.getByTestId('main-page')).toBeInTheDocument()
    })

    test('users page test', () => {
        renderWithRouter(<NavBar/>)
        const usersLink = screen.getByTestId('users-link')
        userEvent.click(usersLink)
        expect(screen.getByTestId('users-page')).toBeInTheDocument()
    })
})