import React,{useEffect} from "react";

function Text({ children }) {

    useEffect(()=>{
        const containerText = document.querySelector(".text-container")
        containerText.style.height = containerText.style.height
        const textSpan=document.querySelector(".text-container>span")

        const textSpanClone = textSpan.cloneNode(true)
        containerText.appendChild(textSpanClone)
    },[])

    return (
    <div className="text-container">
      <span>{children}</span>
    </div>
  );
}

export default Text;
