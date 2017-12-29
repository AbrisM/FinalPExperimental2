/* Function for purchases */
var ecommerce = [10, 10, 10, 10, 10];

function purchaseFunction(index) {
  if (ecommerce[index] === 0)
    window.alert("Sorry! That item is no longer available");
  else ecommerce[index]--;
  document.getElementById("tabledisplay").children[index].innerText = ecommerce[index];
  console.log(ecommerce);
}

/* Adding the change icon function for pictures */
function changeimage () {
	document.getElementById("changeme").src ="Bcake.png";
}
/*Function for Towns*/

function countyresult() {
  /*inputs first displays second*/
  verifyZIP(
    document.getElementById("firstInput").value,
    document.getElementById("secondInput").value
  );
}
function verifyZIP(zipfield, countyfield) {
  var valid = "0123456789-";
  var hyphencount = 0;

  /* Prevents incomplete zips*/
  if (zipfield.length != 5) {
    alert("Only 5 digits zips are allowed");
    return false;
  }

  for (var q = 0; q < zipfield.length; q++) {
    temp = "" + zipfield.substring(q, q + 1);
    if (temp == "-") hyphen++;
    if (valid.indexOf(temp) == "-1") {
      alert("The following input is not allowed.Please try again.");
      return false;
    }
  }
  /* addding display for second input */
  document.getElementById("secondInput").value = getcounty(zipfield);
}
/* Hartford and Fairfield counties */
function getcounty(Countynames) {
  Countynames = parseInt(Countynames);
  if (Countynames < 6001) {
    return "Out of State!";
  } 
   else if (Countynames>=6051 && Countynames<=6053){
            return "New Britian Party Bashers!!!"
            }
			else if (Countynames>=6107 && Countynames<=6119){
            return "West Hartford Party Bashers!"
            }
			else if (Countynames>=6604 && Countynames<=6610){
            return "Bridgeport Party Bashers!"
            }
			else if (Countynames>=6850 && Countynames<=6855){
            return "Norwalk Party Bashers!"
            }
			else if (Countynames>=6901 && Countynames<=6907){
            return "Stamford Party Bashers!"
            } 
			return "Sorry! No location available here!"
}
  //the bottom closing bracket

// Adding the script for the picture gallery
var myImage=document.getElementById("galleryPhoto");
var forwardslide=true;
var imageArray=["pballoons.jpeg","pwhoopiecakes.jpeg","ppresents.jpeg","ppoolparty.jpeg","pdrinks.jpeg","pcupcakes.jpg","pcooks.jpg","pcakesandcookies.jpeg"];
var imageIndex=0;
function changeImage (condition) {
	if(condition){
		myImage.setAttribute("src",imageArray [ imageIndex]);
		imageIndex++;
		if(imageIndex>=imageArray.length) {
			imageIndex=0;
		}
	}
}
//Changing the image
var intervalHandle =setInterval(function(){changeImage(forwardslide)},2000);

//Stops image
myImage.onclick=function() {
	forwardslide=!forwardslide;
}

