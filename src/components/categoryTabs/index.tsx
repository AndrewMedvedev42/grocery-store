import { categoriesList } from "assets/data/categoryList";
import { previewCategoryList } from "assets/data/previewCategoryMenu";
import { useEffect, useState } from 'react';
import { FoodCardComponent } from 'components/FoodCard';
import { PreviewCategoryMenu } from './styles';

import { Button } from 'react-bootstrap';

export const CategoryList = () => {
    const [activeTab, setActiveTab] = useState(0)
    const [category, setCategory] = useState("milk profucts")
    const [categoryMenu, setCategoryMenu] = useState<any>(null)
    useEffect(()=>{
        setCategoryMenu(previewCategoryList.find((item:any)=>item.category === category))
    })

    console.log(previewCategoryList.find((item:any)=>item.category === category))
    
    return (
        <>
            <section className="tab-list mb-5">
                {
                    categoriesList.map((item:any, index:any)=>{
                        return (
                            <Button onClick={()=>{setActiveTab(index)}} className={`btn ${activeTab === index ? "btn-primary" : "btn-light"}`}>
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
                                <FoodCardComponent data={item}/>
                            )
                        })
                    )
                }
            </PreviewCategoryMenu>
        </>
    )
}