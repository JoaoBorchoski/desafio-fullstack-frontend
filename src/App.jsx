import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { StyledBody } from "./styles/styledApp";
import { UserProvider } from "./contexts/user.contexts";
import { ToastContainer, Zoom } from "react-toastify";
import { Register } from "./pages/register";

function App() {
    return (
        <UserProvider>
            <StyledBody>
                <ToastContainer
                    autoClose={1500}
                    transition={Zoom}
                    position="top-left"
                />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="*" element={<Login />} />
                </Routes>
            </StyledBody>
        </UserProvider>
    );
}

export default App;
