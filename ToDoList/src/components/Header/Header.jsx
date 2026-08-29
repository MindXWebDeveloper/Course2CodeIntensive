import './Header.css'

const Header = () => {
  return (
    <header className="app-header">
      <div className="app-header__search">
        <svg className="app-header__search-icon" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M16 16L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <input type="text" placeholder="Search Items" aria-label="Search items" />
      </div>

      <button type="button" className="app-header__new-item">
        New Item
      </button>
    </header>
  )
}

export default Header
