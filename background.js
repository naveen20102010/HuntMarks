

function searchfun()  //function that search using the given text.
{
 
 var x= document.getElementById('search').value;
    
   chrome.bookmarks.search(x,function(results) //chrome extension function for searching bookmarks
   {
   
   
   if(results.length>0) //  if results found 
   {
  
   bookmark.innerHTML=""; //Will initially clear the display every time we search for results.
   for(var i=0; i<results.length; i++)//function to fetch all the matching parameters...
{
var j=i+1;

 var le = results[i].url; //fetch URL's
 

 var title = results[i].title.toUpperCase(); // fetch titles
 

 bookmark.innerHTML = bookmark.innerHTML +   "</br></br>" +j+ " : " +"<a class='bookAnchor' href =" +le+">" +title+"</a>";//making links of titles obtained.
 
 }
 }
 
 else{
 bookmark.innerHTML="";            // if result count is less than zero(no results corresponding to entered text) pop-up  no text found
 alert('Text not found ! ! !');     
 }

	var anchors = document.getElementsByClassName('bookAnchor'); 
	for(var i=0; i<anchors.length; i++)//function to fetch all the URL corresponding to anchor parameters...
	{
		anchors[i].addEventListener('click', newTab); // adding event to create new tab on click of link obtained as results
 
	}
 
   });
   
   }
   
   

	
	document.addEventListener('DOMContentLoaded', function () {     //adding button click event on loading Domcontent  
    document.getElementById('btn').addEventListener('click', searchfun);// that will call the search function
	
	
	});

	function newTab(tab){					// function to create new tab on clicking the link obtained in results.
	var newUrl = event.target.href;
	chrome.tabs.create({'url': newUrl})
 }




	












	










