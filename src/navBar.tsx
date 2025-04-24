import NavBtn from './navBtn';

import Logo from './assets/logo.png';

export default function NavBar() {
    //const[searchTerm, setSearchTerm]=useState('')
    // const searchResults= TEST_RECIPES.filter(s=>s.name.toLowerCase().includes(searchTerm.toLowerCase())) )

    //const[searchTerm, setSearchTerm]=useState('')

    //const handleSubmit=(event: MouseEvent<HTMLButtonElement>)=>
    //event.preventDefault()
    //setSearchTerm

    return (



        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={Logo} alt="Logo" width="30" height="30" className="d-inline-block align-text-top"></img>
                    Recipes.com
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavBtn text='Home' onClick={() => alert('clicked')} />
                        </li>
                        <li className="nav-item">
                            <NavBtn text='Recipes' onClick={() => alert('clicked2')} />
                        </li>
                        <li className="nav-item">
                            <NavBtn text='About' onClick={() => alert('clicked3')} />
                        </li>
                    </ul>

                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" // onChange={(event)=> setSearchTerm(event.target.value)}
                        // value={searchTerm}
                        />

                        <button className="btn btn-danger" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}