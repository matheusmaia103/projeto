import { ToggleSwitch } from 'react-dragswitch';
import 'react-dragswitch/dist/index.css';
import { useState } from 'react';

export default function Switcher({themeToggler}) {

    const [checked, setChecked] = useState(true);
    const changeHandler = () =>{
        themeToggler();
        setChecked(!checked);
    }

    return (
        <ToggleSwitch
            checked = { checked }
            onChange = {e => changeHandler()}
        />
    )
}