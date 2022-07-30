function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" />
        <div>
          <h3 className="text-uppercase">Сool Sneakers</h3>
          <p className="opacity-5">Best sneakers store</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-20">
          <img width={18} height={18} src="/img/cart.svg" />
          <span>1205 UAH.</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" />
        </li>
      </ul>
    </header> 
  );
}
export default Header;
