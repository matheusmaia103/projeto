import { ToggleSwitch } from 'react-dragswitch';
import 'react-dragswitch/dist/index.css';
import { useState } from 'react';

export default function Switcher() {

    const [checked, setChecked] = useState(true)

    return (
        <ToggleSwitch
            checked = { checked }
            onChange = {e => setChecked(!checked)}
        />
    )
}