import { Link } from 'react-router-dom'


const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap"> My APP</span> </h1>
            </header>
            <main className="public__main">
                <p>Located somewhere in the world.</p>
                <address className="public__addr">
                    My APP <br />
                    Somewhere <br />
                    <a href="tel:+911234567890">1234567890</a>
                </address>
                <br />
                <p>Owner: Uddesh Rothe</p>
            </main>
            <footer>
                <Link to='/login'>Employee Login</Link>
            </footer>
        </section>
    )
    return content
}

export default Public