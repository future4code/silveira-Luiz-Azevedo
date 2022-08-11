import { BrowserRouter, Routes, Route } from "react-router-dom"
import MegaSena from "../pages/Mega-sena/megaSena"
import TimeMania from "../pages/Timemania/timemania"
import Quina from "../pages/Quina/quina"
import LotoMania from "../pages/Lotomania/lotomania"
import LotoFacil from "../pages/Loto-fácil/lotofacil"
import DiaDeSorte from "../pages/Dia-de-sorte/diaDeSorte"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={< MegaSena />} />
                {/* <Route path='/timemania' element={<TimeMania />} />
                <Route path='/quina' element={<Quina />} />
                <Route path='/lotomania' element={<LotoMania />} />
                <Route path='/lotofacil' element={<LotoFacil />} />
                <Route path='/diadesorte' element={<DiaDeSorte />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Router