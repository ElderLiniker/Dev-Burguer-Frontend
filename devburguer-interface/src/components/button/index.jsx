import PropTypes from "prop-types";


import { Containerbutton } from "./styles";



export function Button({children}){
    return <Containerbutton>
{children}
    </Containerbutton>
}
Button.propTypes = {
    clidren:PropTypes.string
}/* avisando oq ele e se e uma string ou um number */