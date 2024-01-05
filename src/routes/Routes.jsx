import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import Main from "../Layout/Main";
import ScoreTable from "../components/Table/ScoreTable";
import ErrorPage from "../components/errorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/detailsById/:id',
                element: <ScoreTable></ScoreTable>
            }
        ]
    }
    ,
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;
