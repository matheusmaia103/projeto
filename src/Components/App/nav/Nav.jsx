import { Bar, Flex }  from './StyledNav.js';
import logo from './logo.png';
import Switcher from './themeSwitcher/switcher'
import {Sun, Moon} from 'phosphor-react';

export default function Nav ({themeToggler}) {

    return(
         <>
               <Bar>
                    <Flex>
                         <img src={logo} alt="" />
                         dreezer
                    </Flex>

                    <Flex>
                         <Sun size={25}/>
                         <Switcher themeToggler={themeToggler}/>
                         <Moon size={25}/>
                    </Flex>

               </Bar>

          </>
     )
}