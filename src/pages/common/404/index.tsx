import { NavLink } from "react-router-dom";
import { NotAvailableContainer } from "./styles";

export const NotAvailablePage = () => {
    return (
        <>
            <NotAvailableContainer>
                <span style={{fontSize:240}}>404</span>
                <h1>Page Not Found</h1>
                <p>Sorry, but the page you are trying to find does not exist. We invite you to go to the main page</p>
                <NavLink to="/">To main page</NavLink>
            </NotAvailableContainer>
        </>
    )
}