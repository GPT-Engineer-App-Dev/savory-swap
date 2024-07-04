import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const SubmitRecipe = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Submit Your Recipe</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="recipe-name">Recipe Name</label>
          <Input id="recipe-name" placeholder="Enter recipe name" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="ingredients">Ingredients</label>
          <Textarea id="ingredients" placeholder="Enter ingredients" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="instructions">Instructions</label>
          <Textarea id="instructions" placeholder="Enter instructions" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="image-upload">Upload Image</label>
          <Input id="image-upload" type="file" />
        </div>
        <Button type="submit" variant="primary">Submit</Button>
      </form>
    </div>
  );
};

export default SubmitRecipe;