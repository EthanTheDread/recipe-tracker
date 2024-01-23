import React, { useState } from 'react';

function RecipeCreate({ addRecipe }) {
  const [recipe, setRecipe] = useState({
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
 if (!recipe.name || !recipe.cuisine || !recipe.photo || !recipe.ingredients || !recipe.preparation) {
      alert("Please fill all boxes to create your recipe.");
      return;
    }
    addRecipe(recipe);
    setRecipe({
      name: '',
      cuisine: '',
      photo: '',
      ingredients: '',
      preparation: '',
    });
  };

   return (
    
    <form onSubmit={handleSubmit} name="create">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <table>
        <tbody>
          <tr>
            <td >
              <input style={{width: `70px`}}
                name="name"
                placeholder="Name"
                value={recipe.name}
                onChange={handleChange}
                
              />
            </td>
            <td>
              <input style={{width: `70px`}}
                name="cuisine"
                placeholder="Cuisine"
                value={recipe.cuisine}
                onChange={handleChange}
              />
            </td>
            <td>
              <input style={{width: `523px`}}
                name="photo"
                placeholder="URL"
                value={recipe.photo}
                onChange={handleChange}
              />
            </td>
            <td>
              <textarea style={{width: `450px`}}
                name="ingredients"
                placeholder="Ingredients"
                value={recipe.ingredients}
                onChange={handleChange}
                width=""
              />
            </td>
            <td>
              <textarea style={{width: `650px`}}
                name="preparation"
                placeholder="Preparation"
                value={recipe.preparation}
                onChange={handleChange}
              />
            </td>
            <td>
              <button  type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
       </div>
    </form>
     
  );
}

export default RecipeCreate;
