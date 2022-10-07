import { Route, Routes } from 'react-router-dom';

import AppHeader from "../appHeader/AppHeader";
import PhotoList from "../photoList/PhotoList";
import SinglePhoto from '../singlePhoto/SinglePhoto';
import LikesPage from '../../pages/likesPage/LikesPage';

const App = () => {
    return (
        <div className="wrapper">
            <AppHeader />
            <main className="main">
                <Routes>
                    <Route
                        path="/"
                        element={<PhotoList />}>
                    </Route>
                    <Route
                        path="/likes"
                        element={<LikesPage />}>
                    </Route>
                    <Route
                        path="/photo/:id"
                        exact
                        element={<SinglePhoto />}>
                    </Route>
                    <Route
                        path="*"
                        element={<h1>Page Not Found</h1>}>
                    </Route>
                </Routes>
            </main>
        </div>
    );
};

export default App;