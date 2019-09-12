function Tonghop(props){
    return(
        <div>
            <div className="bo9 w-size18 p-l-40 p-r-40 p-t-30 p-b-38 m-t-30 m-r-0 m-l-auto p-lr-15-sm">
              <h5 className="m-text20 p-b-24">Cart Totals</h5>
              {/*  */}
              <div className="flex-w flex-sb-m p-b-12">
                <span className="s-text18 w-size19 w-full-sm">Tổng tiền :</span>
                <span className="m-text21 w-size20 w-full-sm">
                  $ {props.value}
                </span>
              </div>
            </div>
        </div>
    )
}