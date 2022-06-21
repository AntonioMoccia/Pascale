import React, { useEffect, useRef } from "react";

function RotatingText({children,...props}) {
  const itemRef = useRef(null)
  useEffect(() => {
    const item = itemRef.current;
      let word = item.children[0].children[0].innerText.split("");
      item.children[0].innerHTML = "";
      word.forEach((letter, idx) => {
        if(letter==" "){
            item.children[0].innerHTML += `<span style="--index: ${idx}; margin-left:10px">${letter}</span>`;
        }else{
            item.children[0].innerHTML += `<span style="--index: ${idx};">${letter}</span>`;
        }
       
      });
      let cloneDiv = item.children[0].cloneNode(true);
      cloneDiv.style.position = "absolute";
      cloneDiv.style.left = "0";
      cloneDiv.style.top = "0";
      item.appendChild(cloneDiv);
  
  },[]);

  return (
    <div className="rotating-item" ref={itemRef} {...props}>
      <div>
        <span className="rotating-item-text">{children}</span>
      </div>
    </div>
  );
}

export default RotatingText;
