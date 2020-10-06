export const initialState={
    basket:[],
    user: null,
}

//Build a Selector
//get basket and return the following
export const getBasketTotal=(basket)=> basket?.reduce((amount, item)=> item.price + amount, 0)//set amount default to "0"

//Reducer is a function that is always listing in the app for case 'types' switches
// reduce(()) function maps through the "basket" then tally up the total
//action = "dispatch" from useStateValue in Product.js
const reducer = (state, action)=>{
    console.log(action);
    switch(action.type) {
        case 'Add_To_Basket':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET': //   WE USE THE BASKET INDEX INSTEAD OF THE ITEM ID
// OPTION "A" >>{basket: state.basket.filter(item=>item.id !== action.id)}
                //THIS OPTON "A" ABOVE removes ALL items with the  same id  from the basket, thats NOT what we want here we want to delete a sinlge quantity of that same item
                //that way if we have 3 iphones/watches wit the same id and delete 1 of them only 1 will delete and not all
                // ...state,
               
                //THIS OPTION "B" BELOW deletes only that specify insance use of that item.id therefore leaving all the other same id items unaffected
            
/*OPTION B >>>> */ const index=state.basket.findIndex(
                (basketItem)=> basketItem.id === action.id
            );
            let newBasket= [...state.basket];//COPY of current basket state/state of basket into newBasket variable
            if (index >=0){//Finds the momentum of tha specific item by splice()
                newBasket.splice(index, 1);//find the intanst click and chops it by one /( geting the moment of that item in the array )thus crea
            } else {
                console.warn(`Cant remove the product (id:${action.id})as its not in basket:`)
            }
            
            return{
                ...state,
                basket: newBasket
            };
            case 'EMPTY_BASKET':
            return {
                ...state,//keep whatever is inside the basket at that state
                basket: []//but change the basket to its default empty array
            }
        case 'SET_USER': return {...state,user: action.user};
            default: return state;
    }

        
}
//This "action.id" is very important instead of deleting all "id"'s  {action.id} finds the instance of that id at the particular state moment, and so the other items with the same {id} are unaffected
export default reducer;