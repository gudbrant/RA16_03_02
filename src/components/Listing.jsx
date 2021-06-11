import React from "react";
import Item from "./Item";

const Listing = ({ items }) => {
  return (
    <div className="item-list">
      {items.map(item => (
        <Item item={item} key={item.listing_id} />
      ))}
    </div>
  );
};

Listing.defaultProps = {
  items: []
};

export default Listing;