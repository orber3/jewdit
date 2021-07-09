



const SideBar = () => {

  
const menu  = [
  {
    text: 'מנות ראשונות',
    link: '0'
  },
  {
    text: 'מנות עיקריות',
    link: '1'
  },
  {
    text: 'מנות סופיות',
    link: '2'
  },
  {
    text: 'על יהודית',
    link: '3'
  },
  {
    text: 'כתבו לי',
    link: '4'
  }

]




  return (


<nav class="side-nav" >
<div class="side-nav__stick">
<ul class="side-nav" id="side">
                <li class="side-nav__item side-nav__item--active">
                        <a href="#0" class='side-nav__link'> 
                  
                            <span> מנה ראשונה</span>
                        </a>
                </li>
                <li class="side-nav__item">
                    <a href="#1" class='side-nav__link'> 
                    
                        <span> מנה עיקרית</span>
                    </a>
            </li>
        
        <li class="side-nav__item">
            <a href="#2" class='side-nav__link'> 
        
                <span> אחרונות</span>
            </a>
    </li>
    <li class="side-nav__item">
            <a href="#3" class='side-nav__link'> 
        
                <span> יהודית</span>
            </a>
    </li>
    <li class="side-nav__item">
            <a href="#4" class='side-nav__link'> 
        
                <span> כתבו לי</span>
            </a>
    </li>
                        </ul>     
                        </div>
    </nav>



  )
  
   
      }
  export default SideBar;