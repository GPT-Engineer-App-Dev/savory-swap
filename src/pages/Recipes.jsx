import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Recipes = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">All Recipes</h1>
      <Input placeholder="Search recipes..." className="mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Placeholder recipe cards */}
        {[...Array(8)].map((_, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>Recipe Title {index + 1}</CardTitle>
              <CardDescription>Short description of the recipe.</CardDescription>
            </CardHeader>
            <CardContent>
              <img src="https://via.placeholder.com/150" alt="Recipe" className="w-full h-32 object-cover mb-4" />
              <Button variant="link">View Recipe</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Recipes;