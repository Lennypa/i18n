import Link from "next/link";
import LocalSwitcher from "./local-switcher";


const Header = () => {

  return (
    <header className="p-4">
        <nav className="flex items-center justify-between">
            <Link href='/'>Logo</Link>
            <LocalSwitcher/>
        </nav>
    </header>
  )
}

export default Header