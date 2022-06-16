import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Button } from 'react-bootstrap';

import { FoodCardComponent } from 'components/FoodCard';
import { PreviewCategoryMenu } from './styles';

import { categorysList } from "assets/data/categoryList";
import { previewCategoryList } from "assets/data/previewCategoryMenu";

export const CategoryList = () => {
    const [activeTab, setActiveTab] = useState(0)
    const [category, setCategory] = useState("bread")
    const [categoryMenu, setCategoryMenu] = useState<any>(null)

    useEffect(()=>{
        setCategoryMenu(previewCategoryList.find((item:any)=>item.category === category))
    },[category])

    console.log(category);

    return (
        <>
            <section className="tab-list mb-5">
                {
                    categorysList.map((item:any, index:any)=>{
                        return (
                            <Button key={uuid()} onClick={()=>{
                                setActiveTab(index)
                                setCategory(item.name)
                            }} className={`btn ${activeTab === index ? "btn-primary" : "btn-light"}`}>
                                <span>{item.name}</span>
                            </Button>
                        )
                    })
                }
            </section>
            <PreviewCategoryMenu>
                {
                    categoryMenu && (
                        categoryMenu.menuList.map((item:any)=>{
                            return (
                                <FoodCardComponent key={uuid()} data={item}/>
                            )
                        })
                    )
                }
            </PreviewCategoryMenu>
        </>
    )
}