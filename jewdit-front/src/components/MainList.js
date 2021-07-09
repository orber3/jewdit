import Paper from '@material-ui/core/Paper';
import { Divider } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import kaved from '../pics/kaved.jpg'
import AddIcon from '@material-ui/icons/Add';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {listAllProducts} from '../Actions/ProductsAction'
import  useDivideCat  from './DivideCat';
import  _ from 'lodash'
import InfiniteScroll from 'react-infinite-scroller';


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  }}))

const MainList = () => { 
  const allProducts = useSelector(state => state.allProducts)
  const{loading , error , products} = allProducts
  const dispatch= useDispatch()

console.log(products)
const callDispatch = useCallback(() => { 
  dispatch(listAllProducts())
})
  useEffect( () => {

    callDispatch()


  }, [])

  const {firstDish , mainDish , lastDish} =  useDivideCat(products)
const classes=useStyles()

  return ( 
    <div class= "main-list">
        
        <Paper class="main-list__list" elevation={4}> 
        <h1 class="main-list__section--head" id="0" > מנות ראשונות</h1>   
{firstDish.map(item => (  

<div  id={item.id}   class="main-list__item" > 
      <h2 class ="main-list__headline"> 
        {item.name}

      </h2>
      <p class="main-list__desc"> 
        {item.desc}
      </p>
      <> 

      <img src={`/products/uploads/${item.pic}`} alt="kaved" class="main-list__pic" />

      </>
      <p class="main-list__price">
      ₪ {item.price}
      </p>
      <IconButton className={classes.margin} onClick={() => console.log('clicked')} class="main-list__addIcon" >
      <AddIcon fontSize={'large'} color={'secondary'}  />
</IconButton>
<Divider />
</div>
))}
        </Paper>

        
        <Paper class="main-list__list" elevation={4}> 
        <h1 class="main-list__section--head" id='1'> מנות עיקריות</h1>   
{mainDish.map(item => (  
<div id={item.id} class="main-list__item" > 
      <h2 class ="main-list__headline"> 
        {item.name}
      </h2>
      <p class="main-list__desc"> 
        {item.desc}
      </p>
      <> 
      <img src={`products/uploads/${item.pic}`} alt="kaved" class="main-list__pic" />
      </>
      <p class="main-list__price">
      ₪ {item.price}  
      </p>
      <IconButton className={classes.margin} onClick={() => console.log('clicked')} class="main-list__addIcon" >
      <AddIcon fontSize={'large'} color={'secondary'}  />
</IconButton>
<Divider />
</div>
))}
        </Paper>

        
        <Paper class="main-list__list" elevation={4}> 
        <h1 class="main-list__section--head"id='2' > מנות סופיות</h1>   
{lastDish.map(item => (  
<div id={item.id} class="main-list__item" > 
      <h2 class ="main-list__headline"> 
        {item.name}
      </h2>
      <p class="main-list__desc"> 
        {item.desc}
      </p>
      <> 
      <img src={`/products/uploads/${item.pic}`} alt="kaved" class="main-list__pic" />
      </>
      <p class="main-list__price">
      ₪ {item.price}  
      </p>
      <IconButton className={classes.margin} onClick={() => console.log('clicked')} class="main-list__addIcon" >
      <AddIcon fontSize={'large'} color={'secondary'}  />
</IconButton>
<Divider />
</div>
))}
        </Paper>



    </div>
  )
}

export default MainList