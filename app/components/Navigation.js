import Link from 'next/link'

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <Link href="/">Hjem</Link>
                </li>
                <li>
                    <Link href="/dyr">Dyr</Link>
                </li>
                <li>
                    <Link href="/dyr/create">Lag et dyr</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation