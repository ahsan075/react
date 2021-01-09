import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

const Service = () => {

    return (
        <>
            <div className="text-center my-5">
                <h1>Our Services</h1>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {Sdata.map((value,index)=>{
                                return(<Card 
                                    imgsrc={value.imgsrc}
                                    title={value.title}
                                    key={index}
                                />)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Service;