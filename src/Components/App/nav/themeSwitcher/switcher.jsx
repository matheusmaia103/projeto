import { ToggleSwitch } from 'react-dragswitch';
import 'react-dragswitch/dist/index.css';
import { useState } from 'react';


export default function Switcher({themeToggler, theme}) {
    
    const [checked, setChecked] = useState(theme);
    const changeHandler = () =>{
        setChecked(!theme);
        themeToggler();
    }

    return (
        <ToggleSwitch
            checked = { checked }
            onChange = {e => changeHandler()}
            onColor= {props => props.theme.bgcolor}
        />
    )
}