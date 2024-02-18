
import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';

// function App() {

// 	const [data, setData] = useState(null)
// 	const [toggle, setToggle] = useState(false)
// 	const [value, setValue] = useState('')

// 	const onClick = () => setToggle(prev => !prev)
		

// 	useEffect(() => {
// 		setTimeout(() => {
// 			setData({})
// 		}, 100)
// 	}, [])

// 	return (
		
// 		<div className="App">
// 			<h1 data-testid="input-elem">{value}</h1>
// 			{toggle === true && <div data-testid="toggle-element">toggle</div>}
// 			{data && <div>data</div>}
// 			<h1>Hello World</h1>
// 			<button data-testid="toggle-btn" onClick={onClick}>Click me</button>
// 			<input onChange={e => setValue(e.target.value)} type="text" placeholder='Enter text'/>
// 		</div>
// 	);
// }

// export default App;

const App = () => {
	

	return (
		<BrowserRouter>
			<Link to="/" data-testid="main-link">main</Link>
			<Link to="/about" data-testid="about-link">about</Link>
			<Routes>
				<Route path='/' element={<Main/>}/>
				<Route path='/about' element={<About/>}/>
			</Routes>
		</BrowserRouter>
	)
};

export default App;
