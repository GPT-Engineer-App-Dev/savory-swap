import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">Welcome to RecipeShare</h1>
      <p className="text-xl mt-2">Discover and Share Amazing Recipes</p>
      <div className="mt-8">
        <Button variant="primary" size="lg">Explore Recipes</Button>
      </div>
    </div>
  );
};

export default Index;