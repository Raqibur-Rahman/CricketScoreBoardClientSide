import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import Main from "../Layout/Main";
import ScoreTable from "../components/Table/ScoreTable";
import ErrorPage from "../components/errorPage/ErrorPage";
import UpComing from "../components/upComing/UpComing";
import Teamwise from "../components/teamwise/Teamwise";

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
                path: '/upcoming',
                element: <UpComing></UpComing>
            },
            {
                path: '/teams',
                element: <Teamwise></Teamwise>
            },
            {
                path: '/detailsById/:matchId',
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
