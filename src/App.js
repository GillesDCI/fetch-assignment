import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
       <Routes> {/* Our routes go inside here */}
          {/* the path of our route and the element that corresponds with it */}
         <Route path="/" element={<Homepage />} />
         <Route path="/about" element={<Aboutpage />} />

         {/* This is a wildcard route */}
         <Route path="*" element={<h1>404 Page not found</h1>} />
       </Routes>
    </BrowserRouter>
   </>

  )
};

export default App;
