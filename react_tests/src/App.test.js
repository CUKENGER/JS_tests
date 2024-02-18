import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';


describe('test app', () => {

	test('renders learn react link', () => {
		render(<App />);
		const hellWorldElement = screen.getByText(/Hello world/i);
		const btn = screen.getByRole('button');
		const input = screen.getByPlaceholderText(/Enter text/i);
		expect(hellWorldElement).toBeInTheDocument();
		expect(btn).toBeInTheDocument();
		expect(input).toMatchSnapshot()
		// expect(input).toBeInTheDocument();
		// screen.debug()
	})

	test('tester', async () => {
		render(<App/>)
		// const hellu = screen.queryByText(/hello2/i)
		// expect(hellu).toBeNull()

		const finder = await screen.findByText(/data/i)
		expect(finder).toBeInTheDocument()
	})

	test('btn', () => {
		render(<App/>)
		const btn = screen.getByTestId("toggle-btn")
		// const toggleDiv = screen.queryByTestId("toggle-element")
		expect(screen.queryByTestId("toggle-element")).toBeNull()
		fireEvent.click(btn)
		expect(screen.queryByTestId("toggle-element")).toBeInTheDocument()
	})


	test('input', async () => {
		render(<App/>)
		const input = screen.getByTestId("input-elem")
		expect(screen.getByTestId("input-elem")).toContainHTML('')


		// fireEvent.change(input, {
			// target: {value: '123123'}
		// })

		await userEvent.type(input, '123123')
		expect(screen.getByTestId("input-elem")).toContainHTML('123123')


	})

});
