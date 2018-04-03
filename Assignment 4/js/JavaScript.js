/// Solution of Assignment 4 of class html css javascript in LasalleCollege Montreal 3/28/2018
/// Practice using javascript operate DOM to achieve additions and deletions
/// Gilbert Zhang xixi2010@gamil.com
var d = document;
submitButton = d.getElementById("submitButton");

submitButton.addEventListener("click", function() 
{
    var name = d.getElementById("websiteName");
    var url = d.getElementById("websiteUrl");
    var websiteName = name.value;
    var websiteUrl = url.value;

    var content = d.getElementById("content");
    var newItemId = websiteName + "NewItemId";
    var deleteButtonId = websiteName + "Delete";

    //Vlidate if name is null
    if(websiteName.length == 0)
    {
        alert("THe Websit Name can not be null, please check it.");
        return;
    }
    //Vlidate if name exists
    var ifNameExists = d.querySelector("#" + newItemId);
    if(ifNameExists != null)
    {
        alert("The Website Name already exists, please change the Website Name and try it again");
        return;
    }

    //Way 1:
    var htmlStr = "<div class='newItem' id='" + newItemId + "'>" +
                         "<strong class='itemName'>" + websiteName + "</strong>" +
                         "<a class='item' href='http://" + websiteUrl + "' target='_blank' text-decoration='none'><input class='visitButton' type='button' value='Visit'></input></a>" +
                         "<input class='deleteButton' type='button' value='Delete' id='" + deleteButtonId +"' ></input>" +
                  "</div>";
    var newItem = d.createElement("div");
    newItem.innerHTML = htmlStr;
    content.appendChild(newItem);

    d.getElementById(deleteButtonId).addEventListener("click", function()
    {
        var newItem = d.getElementById(newItemId);
        newItem.parentNode.removeChild(newItem);
    })
    //End of Way 1



    //Way 2
    // var newItem = d.createElement("div");
    // newItem.setAttribute("class", "newItem");
    // newItem.setAttribute("id", newItemId);

    // var websiteNameItem = d.createElement("text");
    // websiteNameItem.setAttribute("class", "itemName");////or websiteNameItem.className = "itemName";
    // websiteNameItem.innerHTML =  "<strong>" + websiteName + "</strong>";

    // var websiteUrlItem = d.createElement("a");
    // websiteUrlItem.innerHTML =  "<a href='http://" + websiteUrl + "' target='_blank'><input class='visitButton' type='button' value='Visit'></input></a>";

    // var deleteButtonItem = d.createElement("a");
    // deleteButtonItem.innerHTML =  "<input class='deleteButton' type='button' value='Delete' id='" + deleteButtonId +"' ></input>";

    // newItem.appendChild(websiteNameItem);
    // newItem.appendChild(websiteUrlItem);
    // newItem.appendChild(deleteButtonItem);

    // content.appendChild(newItem);

    // d.getElementById(deleteButtonId).addEventListener("click", function()
    // {
    //     var newItem = d.getElementById(newItemId);
    //     newItem.parentNode.removeChild(newItem);
    // })
    //End of Way 2

    

    //Way 3
    // var newItem = d.createElement("div");
    // newItem.setAttribute("class", "newItem");
    // newItem.setAttribute("id", newItemId);
    
    // var websiteNameItem = d.createElement("text");
    // websiteNameItem.setAttribute("class", "itemName");////or websiteNameItem.className = "itemName";
    // websiteNameItem.innerHTML =  "<strong>" + websiteName + "</strong>";
    
    // var websiteUrlItem = d.createElement("span");
    // websiteUrlItem.setAttribute("width", "100");
    // websiteUrlItem.setAttribute("height", "50");

    // var link = d.createElement("a");
    // link.setAttribute("href", "http://" + websiteUrl);
    // link.setAttribute("target", "_blank");
    
    // var btn = d.createElement("button");
    // btn.className = "visitButton";
    // var t = document.createTextNode("Visit");
    // btn.appendChild(t);
    // //btn.setAttribute = ("value", "Visit");//Why those three doesn't work?
    // //btn.value = "Visit";
    // //btn.setAttribute("type", "button");
    // link.appendChild(btn);
    // websiteUrlItem.appendChild(link);

    // var deleteButtonItem = d.createElement("button");
    // deleteButtonItem.className = "deleteButton";
    // deleteButtonItem.setAttribute("id", deleteButtonId);
    // var tt = document.createTextNode("Delete");
    // deleteButtonItem.appendChild(tt);

    // newItem.appendChild(websiteNameItem);
    // newItem.appendChild(websiteUrlItem);
    // newItem.appendChild(deleteButtonItem);
    
    // content.appendChild(newItem);
    
    // d.querySelector("#" + deleteButtonId).addEventListener("click", function()
    // {
    //     var newItem = d.getElementById(newItemId);
    //     newItem.parentNode.removeChild(newItem);
    // })
    //End of Way 3



    //Way 4
    // var newItem = d.createElement("div");
    // newItem.setAttribute("class", "newItem");
    // newItem.setAttribute("id", newItemId);
    
    // var websiteNameItem = d.createElement("text");
    // websiteNameItem.setAttribute("class", "itemName");////or websiteNameItem.className = "itemName";
    // websiteNameItem.innerHTML =  "<strong>" + websiteName + "</strong>";
    
    // var websiteUrlItem = d.createElement("span");
    // websiteUrlItem.setAttribute("width", "100");
    // websiteUrlItem.setAttribute("height", "50");


    // var linkName = newItemId + "linkName";
    // var btn = d.createElement("button");
    // btn.className = "visitButton";
    // btn.setAttribute("id", linkName )
    // var t = document.createTextNode("Visit");
    // btn.appendChild(t);

    // websiteUrlItem.appendChild(btn);

    // var deleteButtonItem = d.createElement("button");
    // deleteButtonItem.className = "deleteButton";
    // deleteButtonItem.setAttribute("id", deleteButtonId);
    // var tt = document.createTextNode("Delete");
    // deleteButtonItem.appendChild(tt);

    // newItem.appendChild(websiteNameItem);
    // newItem.appendChild(websiteUrlItem);
    // newItem.appendChild(deleteButtonItem);
    
    // content.appendChild(newItem);
    
    // //d.querySelector("#" + deleteButtonId).addEventListener("click", function(e)//IE not support
    // d.getElementById(deleteButtonId).addEventListener("click", function()
    // {
    //     var newItem = d.getElementById(newItemId);
    //     newItem.parentNode.removeChild(newItem);
    // })
    //End of Way 4

    name.value = "";
    name.className = "noneText"
    url.value = "";
    url.className = "noneText"

    d.querySelector("#" + linkName).addEventListener("click", function(e)
    {
        window.open("http://" + websiteUrl);
    });
});

//change NameTextBox's background color
var newName = d.getElementById("websiteName");//Why can not use name here?
newName.addEventListener("input", function()
{
    var textLength = newName.value.length;
    if(textLength > 0)
    {
        newName.className = "withText";
    }
    else
    {
        newName.className = "noneText"
    }
});

////change UrlTextBox's background color
var newUrl = d.getElementById("websiteUrl");//Why can not use url here?
newUrl.addEventListener("input", function()
{
    var textLength = newUrl.value.length;
    if(textLength > 0)
    {
        newUrl.className = "withText";
    }
    else
    {
        newUrl.className = "noneText"
    }
});