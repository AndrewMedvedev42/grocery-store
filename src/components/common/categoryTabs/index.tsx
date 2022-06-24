import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { FoodCardComponent } from 'components/common/foodCard';
import { PreviewCategoryMenu } from './styles';

import { categorysList } from "assets/data/categoryList";
import { catalogList } from "assets/data/catalogList";

export const CategoryList = () => {
    const [activeTab, setActiveTab] = useState(0)
    const [category, setCategory] = useState("bread")
    const [categoryMenu, setCategoryMenu] = useState<any>(null)

    useEffect(()=>{
        setCategoryMenu(catalogList.find((item:any)=>item.category === category))
    },[category])

    return (
        <>
            <section className="tab-list mb-5">
                {
                    categorysList.map((item:any, index:any)=>{
                        return (
                            <button key={uuid()} onClick={()=>{
                                setActiveTab(index)
                                setCategory(item.name)
                            }} className={`btn ${activeTab === index ? "btn-primary" : "btn-light"}`}>
                                <span>{item.name}</span>
                            </button>
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