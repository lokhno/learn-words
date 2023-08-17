import Link from 'next/link';

import style from './navbar.module.scss';

function Navbar() {
  return (
    <nav className={style.navbar}>
      <Link
        className={style.navbar__item}
        href="/"
      >
        <h1>
          Learn Words
        </h1>
      </Link>
      <Link
        className={style.navbar__item}
        href='/words'
      >
        Список слов
      </Link>
      <Link
        className={style.navbar__item}
        href='/categories'
      >
        Список категорий
      </Link>
      <Link
        className={style.navbar__item}
        href='/learn'
      >
        Учить слова
      </Link>


    </nav>
  )
}

export default Navbar