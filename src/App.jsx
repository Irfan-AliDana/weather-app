import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
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
