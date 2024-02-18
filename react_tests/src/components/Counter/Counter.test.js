/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react"
import Counter from "./Counter"
import userEvent from "@testing-library/user-event"
import { Provider } from "react-redux"
import {createReduxStore} from '../../store/store';
import { renderWithRedux } from "../../tests/helpers/renderWithRedux";
import { renderTestApp } from "../../tests/helpers/renderTestApp";

describe('Counter test', () => {

    test('Test Router', async () => {
        // const {getByTestId} = render(
        //     <Provider store={createReduxStore({
        //         counter: {value: 10}
        //     })}>
        //         <Counter/>
        //     </Provider>
        // )

        // const {getByTestId} = render(renderWithRedux(<Counter/>, {
        //     counter: {value: 10}
        // }))

        const {getByTestId} = render(renderTestApp(null, {
            route: '/',
            initialState: {
                counter: {value: 10}
            }
        }))

        const incrementBtn = getByTestId('increment-btn')
        expect(getByTestId('value-title')).toHaveTextContent('10')
        userEvent.click(incrementBtn)
        expect(getByTestId('value-title')).toHaveTextContent('11')
    })
})