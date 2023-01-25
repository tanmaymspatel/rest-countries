import { Route, Routes, Navigate } from "react-router-dom";

import CountryDetails from "../../components/CountryDetails";
import CountryList from "../../components/CountryList";

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/countries" />} />
            <Route path="/countries" element={<CountryList />} />
            <Route path="countries/:name" element={<CountryDetails />} />
        </Routes>
    )
};

export default Routing;