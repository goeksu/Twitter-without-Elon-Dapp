//for trends.tsx
import React from "react";

function Trends() {
  return (
    <>
      <div className="trendings">
        <h3>Trends for you</h3>
        <a href="https://twitter.com/elonmusk/status/1604617643973124097" title="" target="_blank">
          <strong>#ElonFiredHimself</strong>
          <span>125k tweets</span>
        </a>
        
        <a href="http://twitter.com/realdonaldtrump" title="" target="_blank">
          <strong>#ElonBringsTrumpBack</strong>
          <span>53k tweets</span>
        </a>
        <a href="http://goerlifaucet.com/" title="" target="_blank">
          <strong>#GoerliFaucet</strong>
          <span>to be able to tweet</span>
        </a>
        <a href="https://metaschool.so/" title="" target="_blank">
          <strong>#Metaschool</strong>
          <span>a good place to practice Web3</span>
        </a>
        
      </div>
    </>
  );
}

export default Trends;
