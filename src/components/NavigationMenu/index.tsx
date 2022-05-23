import { categoriesList } from "./data";

const NavigationBar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>
                        <span>+00000000</span>
                        <span>from 10:00 to 20:00</span>
                    </li>
                    <li>
                        <div></div>
                    </li>
                    <li>
                        <div></div>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul>
                    {
                        categoriesList.map((category, index)=>{
                            const {name, image} = category
                            return (
                                <li key={name + index}>
                                    <img src={image} alt={`${name} icon`} />
                                    <span>{name}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}

export default NavigationBar