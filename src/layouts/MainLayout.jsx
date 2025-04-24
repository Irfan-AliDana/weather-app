import Topbar from "../components/layout/Topbar";

function MainLayout({ children }) {
    return (
        <>
            <Topbar />
            {children}
        </>
    );
}

export default MainLayout;
