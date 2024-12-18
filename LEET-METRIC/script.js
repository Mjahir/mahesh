document.addEventListener("DOMContentLoaded", function(){
    const serchbutton = document.getElementById("serch-btn");
    const usernameInput = document.getElementById("user-input");
    const startsContainer = document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-lebel");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardStatscontainer = document.querySelector(".starts-cards");

    // returrn true or false based on a regex
    function validateusername(username){
        if(username.trim() === ""){
            alert("username should not be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMathing = regex.test(username);
        if(!isMathing){
            alert("Invalid Username");
        }
        return isMathing;
    }
    async function fetchUserDetails(username) { 
        

        try{
            serchbutton.textContent = "serching...";
            serchbutton.disabled = true;
            const proxyUrl = 'https://cors-anywhere.herokuapp.com' 
            const targeturl = 'https://leetcode.com/graph/';
        const myHeader = new Headers();
        myHeaders.append("content-type","application/json");

        const graphql = JSON.stringify({
            query:"\n    query userSessionProgress($username: String!){\n  allowQuestionsCount {\n   difficulty\n   count\n  matchedUser(username: $username) {\n   submitStats {\n    acSubmissionNum {\n     difficulty\n     count\n      submissions\n     }\n     totalSubmissionNuum {\n    difficulty\n    count\n    sibmission\n    }\n  }\n  }\n}\n ",
            variables: {"username":`${username}`}
        })
        const requestOptions = {
            method: "POST",
            headers: myHeader,
            body: graphql,
            redirect: "follow"
        };

        const response = await fetch(proxyUrl+targeturl,requestOptions);
            
            if(!responce.ok){
                throw new Error("unable to fetch the User details");
            }
            const parsedata = await responce.json();
            console.log("logging data:",data);

            displayUserdata(parsedata);

        }
        catch(error){
            startsContainer.innerHTML = `<p>No data found</p>`
        }
        finally{
            serchbutton.textContent = "serch";
            serchbutton.disabled = false;
        }

    }

    function displayUserdata(parsedata){

    }

    serchbutton.addEventListener('click',function(){
        const username = usernameInput.value;
        console.log("logging username",username);
        if(validateusername(username)){
            fetchUserDetails(username);
        }
    })

})