import React from "react";

function prodotti() {
  const Prodotti = [
    {
      title: "Castagne fresche",
      img: "/images/avatar1.jpeg",
    },
    {
      title: "Castagne secche in guscio",
      img: "/images/avatar1.jpeg",
    },
    {
      title: "Castagne secche sgusciate",
      img: "/images/avatar1.jpeg",
    },
  ];
  return (
    <div className="prodotti-wrapper" data-scroll-section>
      {Prodotti.map(({ title, img },index) => {
        if(index % 2 !== 0){
          return (
            <div className="prodotto">
              <div className="prodotto-image" data-scroll-speed='1' data-scroll>
                <img src={img} />
              </div>
              <div className="prodotto-title"  data-scroll>
                <h1>{title}</h1>
              </div>
            </div>
          );
  
        }else{
          return(
            <div className="prodotto-reverse">
              <div className="prodotto-image" data-scroll-speed='-1.2' data-scroll>
                <img src={img} />
              </div>
              <div className="prodotto-title"  data-scroll>
                <h1>{title}</h1>
              </div>
            </div>
          )
        }

      })}
    </div>
  );
}

export default prodotti;
