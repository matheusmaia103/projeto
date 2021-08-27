import { Bar, Global }  from './StyledNav.js';

export default function Nav () {

    return(
         <>
               <Bar 
               onMouseOver = {e => e.target.classList.add('hovered')}
               onMouseLeave = {e => e.target.classList.remove('hovered')}
               >
                    dreezer
               </Bar>

          </>
     )
}