import {Link} from 'react-router-dom'
const Home=()=>{
    return(
        <div>
            <h1>Home Page</h1>
            <ul>
                <li><Link to="/counter">Counter App</Link></li>
                <li><Link to="/stopwatch">watch App</Link></li>
                <li><Link to="/refex">refex</Link></li>
                <li><Link to="/contextex">props drilling problem</Link></li>
                <li><Link to="/reducerex">reducer problem</Link></li>
            </ul>
        </div>
    )
}
export default Home;