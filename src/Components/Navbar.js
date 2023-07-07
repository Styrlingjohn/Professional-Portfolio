export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title"> Styrling's Portfolio</a>
        <ul>
            <li className="active">
                <a href="/about">About</a>
            </li>
            <li className="active">
                <a href="/experience">Experience</a>
            </li>
        </ul>
        </nav>
}