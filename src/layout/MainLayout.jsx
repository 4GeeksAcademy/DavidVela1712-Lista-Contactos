import { pages } from "../utils/pages";
import { Route, Routes } from "react-router";

export const MainLayout = () => {

    return (
        <>
            <Routes>
                {pages.map((page) => (
                    <Route path={page.route} element={page.component} />
                ))}
            </Routes>
        </>
    )
}