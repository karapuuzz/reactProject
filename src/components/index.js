import Header from "./header/Header";
import MoviesPage from "./moviesPage/MoviesPage";


function Container() {
    return (
        <div className="container">
            <Header/>
            <MoviesPage/>
        </div>

    );
}

export {
    Container
};