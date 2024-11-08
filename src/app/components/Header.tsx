import React from 'react'

const Header = () : JSX.Element => {
  return (
    <header>
    <h1 className="text-3xl">nextjs-supabase-prisma</h1>
    <nav>
      <ul className="flex space-x-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/signup">S'inscrire</a>
        </li>
        <li>
          <a href="/userlist">Liste des utilisateurs</a>
        </li>
        <li>
          <a href="/signin">Se connecter</a>
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default Header