import './App.css';
import {QueryClient, QueryClientProvider,} from 'react-query'
import Home from './components/Home';
import Speakers from './components/Speakers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const queryClient = new QueryClient()

function App() {
  return (
    <div>
       <QueryClientProvider client={queryClient}>
       <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/speakers' element={<Speakers/>}/>
        </Routes>
       </BrowserRouter>

      </QueryClientProvider>
    </div>
  );
}

export default App;
