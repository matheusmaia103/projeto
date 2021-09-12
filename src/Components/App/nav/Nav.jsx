import { Bar, Flex }  from './StyledNav.js';
import logo from './logo.png';
import Switcher from './themeSwitcher/switcher'
import {Sun, Moon} from 'phosphor-react';

export default function Nav ({themeToggler, theme}) {

    return(
         <>
               <Bar>
                    <Flex>
                         <img src={logo} alt="logoimg" />
                         Dreezer app
                    </Flex>
                    <Flex>
                         <Sun size={25}/>
                         <Switcher themeToggler={themeToggler} theme={theme}/>
                         <Moon size={25}/>
                    </Flex>

               </Bar>

          </>
     )
}