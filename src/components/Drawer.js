function Drawer() {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer ">
        <h2 className="d-flex justify-between mb-30 ">
          Корзина
          <img className="cu-p" src="/img/remove-btn.svg" alt="Remove button" />
        </h2>
        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/2.jpg) ' }}
              className="cartItemImg"></div>

            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 UAH</b>
            </div>
            <img className="removeBtn" src="/img/remove-btn.svg" alt="Remove button" />
          </div>
          <div className="cartItem d-flex align-center">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/2.jpg) ' }}
              className="cartItemImg"></div>

            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 UAH</b>
            </div>
            <img className="removeBtn" src="/img/remove-btn.svg" alt="Remove button" />
          </div>
          <div className="cartItem d-flex align-center">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/2.jpg) ' }}
              className="cartItemImg"></div>

            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 UAH</b>
            </div>
            <img className="removeBtn" src="/img/remove-btn.svg" alt="Remove button" />
          </div>

          <div className="cartTotalBlock">
            <ul>
              <li className="d-flex">
                <span>Total:</span>
                <div></div>
                <b>21 498 UAH</b>
              </li>
              <li className="d-flex">
                <span>Tax 5%:</span>
                <div></div>
                <b>1074 UAH</b>
              </li>
            </ul>
            <button className="greenButton">
              Checkout
              <img src="/img/arrow.svg" alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
