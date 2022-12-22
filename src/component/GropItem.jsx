import React from "react";
import cardItem1 from "../assets/img/girl-xinh-2-480x600.jpg"
import cardItem2 from "../assets/img/girl-xinh-3-450x600.jpg"
import cardItem3 from "../assets/img/girl-xinh-4-480x600.jpg"

export default function GropItem() {
  return (
    <div className="card-group text-center">
      <div className="card">
        <img style={{width: "250px", height: "300px", marginLeft: "50%", transform: "translateX(-50%)"}} src={cardItem1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div className="card">
        <img style={{width: "250px", height: "300px", marginLeft: "50%", transform: "translateX(-50%)"}} src={cardItem2} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This card has supporting text below as a natural lead-in to
            additional content.
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div className="card">
        <img style={{width: "250px", height: "300px", marginLeft: "50%", transform: "translateX(-50%)"}} src={cardItem3} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  );
}
