import React from 'react'
function card(props) {

return(
  <>    <div className="cards">
  <div className="card">
    <img className='card_img' src={props.imgsrc} alt="random pic" />
    <div className="card-info">
      <span className='class-catagory' >{props.cardcat}</span>
      <h3 className="card-title">{props.sname}</h3>
      <a href={props.link}>
        <button>
          WATCH NOW
        </button>
      </a>
    </div>
  </div>
</div>
</>
);

}
export default card;