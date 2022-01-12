import HomePage from "../../views/HomePage";
import ProgramadorJr from "@/views/Programador/ProgramadorJr";
import CandidatarJr from "@/views/Programador/CandidatarProgramadorJr";

export const grandxRouter = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/programador-junior',
        name: 'ProgramadorJr',
        component: ProgramadorJr
    },
    {
        path: '/candiatar/programador-junior',
        name: 'CandidatarJr',
        component: CandidatarJr
    },
]

export default grandxRouter;