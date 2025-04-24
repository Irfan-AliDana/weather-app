import SearchBar from "../home/SearchBar";

function Topbar() {
    return (
        <div className="h-[64px] flex justify-between items-center border-b border-gray-200 px-5 shadow-md">
            <h4 className="text-xl font-bold">Logo</h4>
            <SearchBar />
        </div>
    );
}

export default Topbar;
