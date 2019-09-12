function Rating(props) {
  let star = [];
  for (let i = 0; i < props.value; i++) {
    star.push(<i key={i} className="fa fa-star"></i>);
  }
  return star;
}

class MyBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          id: 1,
          thumbnail: "img/banhngot/1.png",
          name: "bánh kem",
          price: 39.0,
          quantity: 1,
          rating: 5
        },
        {
          id: 2,
          thumbnail: "img/banhngot/2.png",
          name: "bánh ngọt",
          price: 39.0,
          quantity: 1,
          rating: 4
        }
      ]
    };
  }

  deleteProduct(index) {
    const newProduct = this.state.products;
    newProduct.splice(index, 1);
    this.setState({
      products: newProduct
    });
  }

  tangSoluong(index) {
    const newProduct = this.state.products;
    newProduct[index].quantity++;
    this.setState({
      quantity: newProduct
    });
  }

  giamSoluong(index) {
    const newProduct = this.state.products;
    newProduct[index].quantity--;
    this.setState({
      quantity: newProduct
    });
  }

  nhapSoluong(index,value){
    const newProduct=this.state.products;
    newProduct[index].quantity=value;
    this.setState({
       quantity: newProduct
   })
  
   
}



  render() {
    const products = this.state.products;
    let cartItems = [];
    let totalPrice = 0;

    for (let i = 0; i < products.length; i++) {
      const product = products[i];

      totalPrice += product.price * product.quantity;

      cartItems.push(
        <tr className="table-row" key={product.id}>
          <td className="column-1">
            <div className="cart-img-product b-rad-4 o-f-hidden">
              <img src={product.thumbnail} alt="IMG-PRODUCT" />
            </div>
          </td>
          <td className="column-2">
            {product.name}
            <br />
            <Rating value={product.rating} />
            <br />
            <button className="btvl">
              <i
                className="fa fa2x fa-trash"
                onClick={this.deleteProduct.bind(this, i)}
              ></i>
            </button>
          </td>
          <td className="column-3">${product.price}</td>
          <td className="column-4">
            <div className="flex-w bo5 of-hidden w-size17">
              <button
                className="btn-num-product-down color1 flex-c-m size7 bg8 eff2 btvl "
                onClick={() => this.giamSoluong(i)}
              >
                <i
                  id="minus_prod"
                  className="fa fa-minus-circle"
                  aria-hidden="true"
                ></i>
              </button>
              <input
                className="size8 m-text18 t-center num-product form-control fix text-center"
                type="number"
                name="num-product1"
                value={product.quantity} onChange={() => this.nhapSoluong(i,event.target.value)}
              />
              <button
                className="btn-num-product-up color1 flex-c-m size7 bg8 eff2 btvl"
                onClick={() => this.tangSoluong(i)}
              >
                <i
                  id="plus_prod"
                  className="fa fa-plus-circle"
                  aria-hidden="true"
                ></i>
              </button>
            </div>
          </td>
          <td className="column-5">${product.price * product.quantity}</td>
        </tr>
      );
    }

    return (
      <div>
        {/* Cart */}
        <section className="cart bgwhite p-t-70 p-b-100">
          <div className="container">
            {/* Cart item */}
            <div className="container-table-cart pos-relative">
              <div className="wrap-table-shopping-cart bgwhite">
                <table className="table table-bordered">
                  <tbody>
                    <tr className="table-head">
                      <th className="column-1">Sản phẩm</th>
                      <th className="column-2"> Tên</th>
                      <th className="column-3">Giá</th>
                      <th className="column-4 p-l-70">Số lượng</th>
                      <th className="column-5">Tổng tiền</th>
                    </tr>

                    {/* Danh sach san pham */}
                    {cartItems}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex-w flex-sb-m p-t-25 p-b-25 bo8 p-l-35 p-r-60 p-lr-15-sm">
              <div className="size10 trans-0-4 m-t-10 m-b-10">
                {/* Button */}
                <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4 btn btn-info">
                  Update Cart
                </button>
              </div>
            </div>

            {/* Total */}
            <Tonghop value={totalPrice}/>
          </div>
        </section>
      </div>
    );
  }
}
