import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<div>Hello world</div>} />
            <Route
                path="*"
                element={
                    <div className="h-screen w-full flex justify-center items-center">
                        404 Not Found
                    </div>
                }
            />
        </Routes>
    );
}

export default App;
