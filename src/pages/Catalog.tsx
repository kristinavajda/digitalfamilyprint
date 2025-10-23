import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Palette } from "lucide-react";
import { useNavigate } from "react-router-dom";
import tshirtImage from "@/assets/m1.jpg";
import tshirtImage2 from "@/assets/m2.jpg";
import tshirtImage3 from "@/assets/m3.jpg";
import tshirtImage4 from "@/assets/m4.jpg";
import tshirtImage5 from "@/assets/m5.jpg";
import tshirtImage6 from "@/assets/m6.jpg";
import tshirtImage7 from "@/assets/m7.jpg";
import tshirtImage8 from "@/assets/m8.jpg";
import tshirtImage9 from "@/assets/m9.jpg";
import tshirtImage10 from "@/assets/m10.jpg";
import tshirtImage11 from "@/assets/m11.jpg";
import tshirtImage12 from "@/assets/m12.jpg";
import tshirtImage13 from "@/assets/m13.jpg";
import tshirtImage14 from "@/assets/m14.jpg";
import tshirtImage15 from "@/assets/m15.jpg";
import tshirtImage16 from "@/assets/m16.jpg";
import tshirtImage17 from "@/assets/m17.jpg";
import tshirtImage18 from "@/assets/m18.jpg";
import tshirtImage19 from "@/assets/m19.jpg";
import tshirtImage20 from "@/assets/m20.jpg";
import tshirtImage21 from "@/assets/m21.jpg";
import tshirtImage22 from "@/assets/m22.jpg";
import tshirtImage23 from "@/assets/m23.jpg";
import tshirtImage24 from "@/assets/m24.jpg";
import tshirtImage25 from "@/assets/m25.jpg";
import tshirtImage26 from "@/assets/m26.jpg";
import tshirtImage27 from "@/assets/m27.jpg";
import mugImage from "@/assets/s1.jpg";
import mugImage2 from "@/assets/s2.jpg";
import mugImage3 from "@/assets/s3.jpg";
import mugImage4 from "@/assets/s4.jpg";
import mugImage5 from "@/assets/s5.jpg";
import mugImage6 from "@/assets/s6.jpg";
import mugImage7 from "@/assets/s7.jpg";
import mugImage8 from "@/assets/s8.jpg";
import mugImage9 from "@/assets/s9.jpg";
import mugImage10 from "@/assets/s10.jpg";
import mugImage11 from "@/assets/s11.jpg";
import mugImage12 from "@/assets/s12.jpg";
import mugImage13 from "@/assets/s13.jpg";
import mugImage14 from "@/assets/s14.jpg";
import mugImage15 from "@/assets/s15.jpg";
import mugImage16 from "@/assets/s16.jpg";
import bag from "@/assets/c1.jpg";
import bag2 from "@/assets/c2.jpg";
import bag3 from "@/assets/c3.jpg";
import bag4 from "@/assets/c4.jpg";
import bodici from "@/assets/b1.jpg";
import bodici2 from "@/assets/b2.jpg";
import bodici3 from "@/assets/b3.jpg";
import bodici4 from "@/assets/b4.jpg";
import bodici5 from "@/assets/b5.jpg";
import bodici6 from "@/assets/b6.jpg";
import bodici7 from "@/assets/b7.jpg";
import bodici8 from "@/assets/b8.jpg";
import bodici9 from "@/assets/b9.jpg";
import ram from "@/assets/d1.jpg";
import ram2 from "@/assets/d2.jpg";
import jastuk from "@/assets/j.jpg";
import jastuk2 from "@/assets/j2.jpg";
import jastuk3 from "@/assets/j3.jpg";
import jastuk4 from "@/assets/j4.jpg";
import jastuk5 from "@/assets/j5.jpg";
import jastuk6 from "@/assets/j6.jpg";
import jastuk8 from "@/assets/j8.jpg";
import jastuk9 from "@/assets/j9.jpg";
import jastuk10 from "@/assets/j10.jpg";
import jastuk11 from "@/assets/j11.jpg";
import jastuk12 from "@/assets/j12.jpg";
import jastuk13 from "@/assets/j13.jpg";
import jastuk14 from "@/assets/j14.jpg";
import privezak from "@/assets/p1.jpg";
import privezak2 from "@/assets/p2.jpg";
import privezak3 from "@/assets/p3.jpg";
import privezak4 from "@/assets/p4.jpg";
import puzzleImage from "@/assets/pz1.jpg";
import puzzleImage2 from "@/assets/pz2.jpg";
import vizitke from "@/assets/v.jpg";
import vizitke2 from "@/assets/v2.jpg";
import amb from "@/assets/amb.jpg";

const Catalog = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const products = [
    { name: "Pamučna majica", category: "workwear", image: tshirtImage },
    { name: "Pamučna majica", category: "workwear", image: tshirtImage2 },
    { name: "Pamučna majica", category: "workwear", image: tshirtImage3 },
    { name: "Pamučna majica", category: "workwear", image: tshirtImage4 },
    { name: "Pamučna majica", category: "workwear", image: tshirtImage5 },
    { name: "Pamučna majica", category: "workwear", image: tshirtImage6 },
    { name: "Pamučna majica", category: "workwear", image: tshirtImage7 },
    { name: "Pamučna majica", category: "workwear", image: tshirtImage8 },
    { name: "Pamučna majica", category: "workwear", image: tshirtImage9 },
    { name: "Pamučna majica", category: "workwear", image: tshirtImage10 },
    { name: "Pamučna majica", category: "workwear", image: tshirtImage11 },
    { name: "Pamučna majica", category: "workwear", image: tshirtImage12 },
    { name: "Pamučna majica", category: "tshirts", image: tshirtImage13 },
    { name: "Pamučna majica", category: "tshirts", image: tshirtImage14 },
    { name: "Pamučna majica", category: "tshirts", image: tshirtImage15 },
    { name: "Pamučna majica", category: "tshirts", image: tshirtImage16 },
    { name: "Pamučna majica", category: "tshirts", image: tshirtImage17 },
    { name: "Pamučna majica", category: "tshirts", image: tshirtImage18 },
    { name: "Pamučna majica", category: "tshirts", image: tshirtImage19 },
    { name: "Pamučna majica", category: "tshirts", image: tshirtImage20 },
    { name: "Pamučna majica", category: "tshirts", image: tshirtImage21 },
    { name: "Pamučna majica", category: "tshirts", image: tshirtImage22 },
    { name: "Pamučna majica", category: "tshirts", image: tshirtImage23 },
    { name: "Dukserica", category: "tshirts", image: tshirtImage24 },
    { name: "Pamučna majica", category: "tshirts", image: tshirtImage26 },
    { name: "Pamučna majica", category: "tshirts", image: tshirtImage27 },
    { name: "Šolje", category: "mugs", image: mugImage },
    { name: "Šolje", category: "mugs", image: mugImage2 },
    { name: "Šolje", category: "mugs", image: mugImage3 },
    { name: "Šolje", category: "mugs", image: mugImage4 },
    { name: "Šolje", category: "mugs", image: mugImage5 },
    { name: "Šolje", category: "mugs", image: mugImage6 },
    { name: "Šolje", category: "mugs", image: mugImage7 },
    { name: "Šolje", category: "mugs", image: mugImage8 },
    { name: "Šolje", category: "mugs", image: mugImage9 },
    { name: "Šolje", category: "mugs", image: mugImage10 },
    { name: "Šolje", category: "mugs", image: mugImage11 },
    { name: "Šolje", category: "mugs", image: mugImage12 },
    { name: "Šolje", category: "mugs", image: mugImage13 },
    { name: "Šolje", category: "mugs", image: mugImage14 },
    { name: "Šolje", category: "mugs", image: mugImage15 },
    { name: "Šolje", category: "mugs", image: mugImage16 },
    { name: "Torbe", category: "bags", image: bag },
    { name: "Torbe", category: "bags", image: bag2 },
    { name: "Torbe", category: "bags", image: bag3 },
    { name: "Torbe", category: "bags", image: bag4 },
    { name: "Bodići", category: "baby", image: bodici },
    { name: "Bodići", category: "baby", image: bodici2 },
    { name: "Bodići", category: "baby", image: bodici3 },
    { name: "Bodići", category: "baby", image: bodici4 },
    { name: "Bodići", category: "baby", image: bodici5 },
    { name: "Bodići", category: "baby", image: bodici6 },
    { name: "Bodići", category: "baby", image: bodici7 },
    { name: "Bodići", category: "baby", image: bodici8 },
    { name: "Bodići", category: "baby", image: bodici9 },
    { name: "Sportski dres", category: "sports", image: tshirtImage25 },
    { name: "Kameni ram drvo", category: "slike", image: ram },
    { name: "Kameni ram drvo", category: "slike", image: ram2 },
    { name: "Jastuci", category: "home", image: jastuk },
    { name: "Jastuci", category: "home", image: jastuk2 },
    { name: "Jastuci", category: "home", image: jastuk3 },
    { name: "Jastuci", category: "home", image: jastuk4 },
    { name: "Jastuci", category: "home", image: jastuk5 },
    { name: "Jastuci", category: "home", image: jastuk6 },
    { name: "Jastuci", category: "home", image: jastuk8 },
    { name: "Jastuci", category: "home", image: jastuk9 },    
    { name: "Jastuci", category: "home", image: jastuk10 },
    { name: "Jastuci", category: "home", image: jastuk11 },
    { name: "Jastuci", category: "home", image: jastuk12 },
    { name: "Jastuci", category: "home", image: jastuk13 },
    { name: "Jastuci", category: "home", image: jastuk14 },
    { name: "Privesci", category: "accessories", image: privezak },
    { name: "Privesci", category: "accessories", image: privezak2 },
    { name: "Privesci", category: "accessories", image: privezak3 },
    { name: "Privesci", category: "accessories", image: privezak4 },
    { name: "Puzle", category: "games", image: puzzleImage },
    { name: "Puzle", category: "games", image: puzzleImage2 },
    { name: "Vizit karte", category: "print", image: vizitke },
    { name: "Vizit karte", category: "print", image: vizitke2 },
    { name: "Kartonska ambalaža", category: "packaging", image: amb },
  ];

  const categories = [
    { id: "all", label: "Svi proizvodi" },
    { id: "tshirts", label: "Majice" },
    { id: "workwear", label: "Radna odeća" },
    { id: "sports", label: "Sport" },
    { id: "baby", label: "Za bebe" },
    { id: "mugs", label: "Šolje i krigle" },
    { id: "home", label: "Jastuci" },
    { id: "slike", label: "Slike na kamenu" },
    { id: "bags", label: "Cegeri" },
    { id: "accessories", label: "Privesci" },
    { id: "games", label: "Puzzle" },
    { id: "print", label: "Vizit karte" },
    { id: "packaging", label: "Ambalaža" },
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
            <Palette className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              DigitalFamily Print
            </span>
          </div>
          <Button variant="hero" size="lg" onClick={() => navigate("/order")}>
            Poruči
          </Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Naš <span className="text-primary">Katalog</span>
        </h1>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "hero" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <Card 
              key={index}
              className="group hover:shadow-[0_8px_30px_hsl(var(--primary)/0.2)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-4 pb-6">
                <h3 className="text-lg font-semibold text-center">{product.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;