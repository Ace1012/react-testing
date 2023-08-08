import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "./Home.page";
import RQSuperHeroes from "./RQSuperHeroes.page";
import SuperHeroes from "./SuperHeroes.page";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools"
import RQSuperHero from "./RQSuperHero.page";
import ParallelQueries from "./ParallelQueries.page";
import DynamicParallel from "./DynamicParallel.page";
import DependentQueries from "./DependentQueries.page";
import PaginatedQueries from "./PaginatedQueries.page";
import InfiniteQueries from "./InfiniteQueries.page";

const queryClient = new QueryClient()

export const ReactQueryPlayground = () => (
    <QueryClientProvider client={queryClient}>
        <Router>
            <nav className='heroes'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/super-heroes">Superheroes</Link>
                    </li>
                    <li>
                        <Link to="/rq-super-heroes">RQ Superheroes</Link>
                    </li>
                    {/* <li>
                        <Link to="/rq-parallel">RQ Parallel</Link>
                    </li>
                    <li>
                        <Link to="/rq-dynamic-parallel">RQ Dynamic Parallel</Link>
                    </li>
                    <li>
                        <Link to="/rq-dependent">RQ Dependent Queries</Link>
                    </li> */}
                    <li>
                        <Link to="/rq-paginated">RQ Paginated Queries </Link>
                    </li>
                    <li>
                        <Link to="/rq-infinite">RQ Infinite Queries </Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/super-heroes' element={<SuperHeroes />} />
                <Route path='/rq-super-heroes' element={<RQSuperHeroes />} />
                <Route path='/rq-super-heroes/:heroId' element={<RQSuperHero />} />
                <Route path='/rq-parallel' element={<ParallelQueries />} />
                <Route path='/rq-dynamic-parallel' element={<DynamicParallel heroIds={[1, 3]} />} />
                <Route path='/rq-dependent' element={<DependentQueries email="antony@example.com" />} />
                <Route path='/rq-paginated' element={<PaginatedQueries />} />
                <Route path='/rq-infinite' element={<InfiniteQueries />} />
            </Routes>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
)