import {ProductInfoSection} from "components/pages/productPage/ProductInfo";
import {BoughtWithSection} from "components/pages/productPage/BoughtWithSection";
import {RecomendationsSection} from "components/pages/productPage/Recomendations";
import {RelatedProducts} from "components/pages/productPage/RelatedProducts";

export const ProductPage = () => {
    return (
        <>
            <ProductInfoSection/>
            <BoughtWithSection/>
            <RecomendationsSection/>
            <RelatedProducts/>
        </>
    )
}