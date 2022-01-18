"use strict";

//Constructor for the recommender object
export class Recommender_user {
    //Holds the keywords
    
    keywords = {};

    //Keywords older than this window will be deleted
    timeWindow = 86400000; //store data for one day

    constructor(){
        this.load();
    }

    //Adds a keyword to the reommender
    addKeywordUser(word){
        //Increase count of keyword
        
        if(this.keywords[word] === undefined)
            this.keywords[word] = {count: 1, date: new Date().getTime()};
        else{
            this.keywords[word].count++;
            this.keywords[word].date = new Date().getTime();
        }
        
    
        
        //Save state of recommender
        this.save();
    }

    //Returns the most popular keyword
    getTopKeywordUser(){
        //Clean up old keywords
        this.deleteOldKeywords();
        
        //Return word with highest count
        let maxCount = 0;
        let maxKeyword = "";
        for(let word in this.keywords){
            if(this.keywords[word].count > maxCount){
                maxCount = this.keywords[word].count;
                maxKeyword = word;
            }
        }
        return maxKeyword;
    }

    /* Saves state of recommender. Currently this uses local storage, 
        but it could easily be changed to save on the server */
    save(){
        localStorage.recommenderKeywordsUser = JSON.stringify(this.keywords);
    };

    /* Loads state of recommender */
    load(){
        if(localStorage.recommenderKeywordsUser === undefined)
            this.keywords = {};
        else
            this.keywords = JSON.parse(localStorage.recommenderKeywordsUser);
        
        //Clean up keywords by deleting old ones
        this.deleteOldKeywords();
    };
    
    //Removes keywords that are older than the time window
    deleteOldKeywords(){
        let currentTimeMillis = new Date().getTime();
        for(let word in this.keywords){
            if(currentTimeMillis - this.keywords[word].date > this.timeWindow){
                delete this.keywords[word];
            }
        }
        this.save();
    }
}

