import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Button } from 'react-bootstrap';
import { Base, Section } from "assets/styles/styled-components";
import { ProductList } from "assets/styles/styled-components/ProductList";
import { FoodCardComponent } from 'components/FoodCard';

import { catalogList } from "assets/data/catalogList";

export const CatalogListSection = () => {
    const [activeTab, setActiveTab] = useState(0)
    const [category, setCategory] = useState("milk")
    const [categoryMenu, setCategoryMenu] = useState<any>(null)

    useEffect(()=>{
        setCategoryMenu(catalogList.find((item:any)=>item.category === category))
    },[category])
    
    return (
        <Base>
            <Section>
                <section className="tab-list mb-5">
                    {
                        catalogList.map((item:any, index:any)=>{
                            return (
                                <Button key={uuid()} onClick={()=>{
                                    setActiveTab(index)
                                    setCategory(item.category)
                                }} className={`btn ${activeTab === index ? "btn-primary" : "btn-light"}`}>
                                    <span>{item.category}</span>
                                </Button>
                            )
                        })
                    }
                </section>
                <ProductList>
                    {
                        categoryMenu && (
                            categoryMenu.menuList.map((item:any)=>{
                                return (
                                    <FoodCardComponent key={uuid()} data={item}/>
                                )
                            })
                        )
                    }
                </ProductList>
            </Section>
        </Base>
    )
}

export default CatalogListSection