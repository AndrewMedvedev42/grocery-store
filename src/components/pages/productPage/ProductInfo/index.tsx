import { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import { Base, Section } from "assets/styles/styled-components";
import { SelectAmount } from "./styles";

export const ProductInfoSection = () => {
    const [count, setCount] = useState(1)
    useEffect(()=>{
        if (count<=0) {
            setCount(1)
        }
    },[count])
    return (
        <Base>
            <Section>
                <article className="d-flex justify-content-between  align-items-center">
                    <section className=" w-50 d-flex justify-content-center">
                        <img src={`${process.env.PUBLIC_URL}/media/box-icon.png`} alt="" />
                    </section>
                    <section className=" w-50">
                        <h1>Product name</h1>
                        <p>Weight: 200</p>
                        <div className="bottom-content d-flex align-items-center">
                            <div className="prices-conteiner d-flex flex-column w-25">
                                <span className={`${true ? ("previous-price"):("main-price")}`}>95$</span>
                                <span className={`${true ? ("main-price"):("d-none")}`}>125$</span>
                            </div>
                            <div className="d-flex align-items-center w-75">
                                <SelectAmount className="border rounded w-25">
                                    <Button onClick={()=>setCount((prev)=>prev-1)} className="bg-transparent border-0 btn btn-link text-decoration-none">-</Button>
                                    <div className="ps-3 pe-3">
                                        <span>{count}</span>
                                    </div>
                                    <Button onClick={()=>setCount((prev)=>prev+1)} type="button" className="bg-transparent border-0 btn-link text-decoration-none">+</Button>
                                </SelectAmount>
                                <Button type="button" className="button ms-2 w-75">Order</Button>
                            </div>
                        </div>
                    </section>
                </article>            
            </Section>
        </Base>
    )
}