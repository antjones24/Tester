function saveNote() {
    // Create empty <div></div>
    let divContainer = document.createElement("div");
    
    // Create empty <button></button>
    let deleteButton= document.createElement("button");

    // Adding "Clear" to <button>Clear</button>
    deleteButton.innerHTML= "Clear";
    
    
    // Represent whats in the textbox
let saveNote=document.getElementById("myText").value;
// Taking the input and storing it
let newNote= document.createElement("p");	
// Creating an empty <p></p>
newNote.innerHTML= saveNote	
// putting the stored input and putting it into a newNote.
divContainer.appendChild(deleteButton)
divContainer.appendChild(newNote)

//
deleteButton.addEventListener("click", function(){
divContainer.remove()
});

// <p>Text input text</p>
document.getElementById("NotesSection").appendChild(divContainer)
// putting the newNote onto the page




    document.getElementById("myText").value=""
    // Clearing the text input
}			// Clearing the text input