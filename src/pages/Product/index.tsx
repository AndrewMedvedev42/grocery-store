import {ProductInfoSection} from "components/ProductPage/ProductInfo";
import {BoughtWithSection} from "components/ProductPage/BoughtWithSection";
import {RecomendationsSection} from "components/ProductPage/Recomendations";
import {RelatedProducts} from "components/ProductPage/RelatedProducts";

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