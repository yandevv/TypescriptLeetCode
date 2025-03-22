// First Approach - DFS 
function findAllRecipes(recipes: string[], ingredients: string[][], supplies: string[]): string[] {
  const availableSupplies = new Set(supplies);
  const recipeToIngredients: Map<string, string[]> = new Map();
  const visited: Map<string, number> = new Map();
  const result: string[] = [];

  for(let i = 0; i < recipes.length; i++) {
    recipeToIngredients.set(recipes[i], ingredients[i]);
  }

  function canMake(recipe: string) {
    if(visited.has(recipe)) {
      return visited.get(recipe) === 1;
    }

    if(availableSupplies.has(recipe)) {
      return true;
    }

    if(!recipeToIngredients.has(recipe)) {
      return false;
    }

    visited.set(recipe, 0);

    for(let ingredient of recipeToIngredients.get(recipe)!) {
      if(!canMake(ingredient)) {
        visited.set(recipe, -1);
        return false;
      }
    }

    visited.set(recipe, 1);
    result.push(recipe);
    return true;
  };

  for(let recipe of recipes) {
    canMake(recipe);
  }

  return result;
};

const case1 = findAllRecipes(["bread"], [["yeast", "flour"]], ["yeast", "flour", "corn"]);
const case2 = findAllRecipes(["bread", "sandwich"], [["yeast", "flour"], ["bread", "meat"]], ["yeast", "flour", "meat"]);
const case3 = findAllRecipes(["bread", "sandwich", "burger"], [["yeast", "flour"], ["bread", "meat"], ["sandwich", "meat", "bread"]], ["yeast", "flour", "meat"]);

console.log(`case1: ${case1} // Should be: ["bread"]`);
console.log(`case2: ${case2} // Should be: ["bread","sandwich"]`);
console.log(`case3: ${case3} // Should be: ["bread","sandwich","burger"]`);