"use strict";

//Import recommender class
import { Recommender } from '../JavaScript/recommender.js';
import { Recommender_user } from '../JavaScript/recommender_user.js';

//Create recommender object - it loads its state from local storage
let recommender = new Recommender();
let recommender_user= new Recommender_user();
/* Set up button to call search function. We have to do it here 
    because search() is not visible outside the module. */
document.getElementById("click_search").onclick = search;

//Display recommendation
window.onload = showRecommendation;
//Searches for products in database
function search() {
      //Extract the search text
    let searchText = document.getElementById("searcfield").value;
   
    if(sessionStorage.getItem("session_status")==999)// only call when user is logged in
        recommender_user.addKeywordUser(searchText);
        else
        recommender.addKeyword(searchText);

 product_search(searchText);
    //Add the search keyword to the recommender

   
    showRecommendation(searchText);

    //#FIXME# PERFORM SEARCH FOR PRODUCTS
}

//Display the recommendation in the document
function showRecommendation(search_text) {// only call when user is logged in
    if(window.location.href=="https://ecommerce-website99.herokuapp.com/"||window.location.href=="https://ecommerce-website99.herokuapp.com/index.php"&&recommender_user.getTopKeywordUser()!=null&&recommender.getTopKeyword()){
        if(sessionStorage.getItem("session_status")==999){
    search_recom(recommender_user.getTopKeywordUser());
        }else{
    search_recom(recommender.getTopKeyword());
    }
}


}