import React, { useState } from "react";
import RecipeData from "./RecipeData"

function RecipeCreate({createRecipe}) {
  
  
  
  
    const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
 const[photo,setPhoto]=useState("")
  const[ingredients,setIngredients]=useState("")
  const[preparation,setPreparation]=useState("")
 const handleNameChange = (event) => setName(event.target.value);
 const handlePhotoChange = (event) => setPhoto(event.target.value);
   const handleIngredientsChange = (event) => setIngredients(event.target.value);
  const handlePreparationChange = (event) => setPreparation(event.target.value);
   const handleCuisineChange = (event) => setCuisine(event.target.value);

  
  
    // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.

  
 const handleSubmit = (event) => {
  event.preventDefault();
  console.log("Submitted:",name,cuisine,photo,ingredients,preparation);
   createRecipe({name,cuisine,photo,ingredients,preparation})
   
   setName("")
   setCuisine("")
   setPhoto("")
   setIngredients("")
   setPreparation("")
};

 
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  
  
  


  
  return (
    <form  onSubmit={handleSubmit}   name="create">
      <table>
        <tbody>
          
          
          <tr></tr>
          
          
          <tr>
            <td>
                      <input placeholder="Name"   type="text" id="name" name="name" textholder="Name" onChange={handleNameChange}  value={name}/>

            </td>
            <td>
                      <input placeholder="cuisine" type="text" id="name" name="cuisine" onChange={handleCuisineChange} value={cuisine} />

            </td>
            <td>
                      <input   placeholder="Url"  type="text" id="name" name="photo" onChange={handlePhotoChange} value={photo} />

            </td>
            
            <td>        <textarea  placeholder="Ingredients" name="ingredients" onChange={handleIngredientsChange} value={ingredients} />
</td>
            <td>
              <textarea   placeholder="Preparation" name="preparation" onChange={handlePreparationChange} value={preparation}/>
            </td>
            <td>
              <button   type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;




































