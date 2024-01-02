//------------------------------------------------------------------------------
//?PriceTable functional components:-

function PriceCard(props) {
    return (
      <div className="container">
        <div className="cards">
          <p className="headers">{props.title}</p>
          <p className="sub-headers">{props.sub_title}</p>
          <hr></hr>
  
          <ul>
            <li>{props.list_1}</li>
            <li>{props.list_2}</li>
            <li>{props.list_3}</li>
            <li>{props.list_4}</li>
            <li>{props.list_5}</li>
            <li>{props.list_6}</li>
            <li>{props.list_7}</li>
            <li>{props.list_8}</li>
          </ul>
  
          <div>
            <button className="footer-btn" type="button">
              <b>BUTTON</b>
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default PriceCard;
  //------------------------------------------------------------------------------