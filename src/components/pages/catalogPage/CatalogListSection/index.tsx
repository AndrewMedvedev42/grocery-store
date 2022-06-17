import { Base, Section } from "assets/styles/styled-components";
import { CategoryList } from "components/common/categoryTabs";

export const CatalogListSection = () => {
    return (
        <Base>
            <Section>
                <section>
                    <h2 className="mb-4">Categories</h2>
                    <section className="tab-section">
                        <CategoryList/>
                    </section>
                </section>
            </Section>
        </Base>
    )
}

export default CatalogListSection