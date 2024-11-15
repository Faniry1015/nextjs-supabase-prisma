import React from 'react'
import Link from 'next/link';

const Header = () : JSX.Element => {
  return (
    <header>
    <h1 className="text-3xl">nextjs-supabase-prisma</h1>
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/signup">S'inscrire</Link>
        </li>
        <li>
          <Link href="/userlist">Liste des utilisateurs</Link>
        </li>
        <li>
          <Link href="/signin">Se connecter</Link>
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default Header