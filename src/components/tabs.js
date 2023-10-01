import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ItemCard from './item_card';

function MyTabs(props) {
  const [key, setKey] = useState(11);

  return (
    <Tabs
      id="controlled-tab"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3" >
        {props.Custom.map(custom => (
            <Tab key={custom.id} eventKey={custom.id} title={custom.Type} style={{overflow: "scroll", height: "80vh"}}>
              <ItemCard key={custom.id} data = {custom.data} addProductToCart = {props.addProductToCart} Cart = {props.Cart}/>
            </Tab>
        ))}
    </Tabs>
  );
}

export default MyTabs;