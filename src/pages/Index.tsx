import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Palette, Shirt, Coffee, Puzzle, Sparkles, Users, Clock, CheckCircle2, Facebook, Instagram, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ContactDialog } from "@/components/ContactDialog";
import heroImage from "@/assets/hero-printing.jpg";
import tshirtImage from "@/assets/m17.jpg";
import tshirtImage2 from "@/assets/m25.jpg";
import tshirtImage3 from "@/assets/m3.jpg";
import polo from "@/assets/polo2.jpg";
import kacket from "@/assets/kacket.jpg";
import jastuk from "@/assets/j1.jpg";
import mugImage from "@/assets/s2.jpg";
import puzzleImage from "@/assets/pz1.jpg";
import privezak from "@/assets/p1.jpg";
import ceger from "@/assets/c1.jpg";
import bodic from "@/assets/b3.jpg";
import vizitka from "@/assets/v.jpg";
import slikadrvo from "@/assets/d1.jpg";
import amb from "@/assets/amb.jpg";
import kecelja from "@/assets/kecelja2.jpg";
import bedzevi from "@/assets/bedzevi2.jpg";
import pepeljara from "@/assets/pepeljara.jpg";
import lonce from "@/assets/lonce.jpg";
import ranac from "@/assets/ranacboca.jpg";
import duks from "@/assets/duksevi.jpg";
import krigle from "@/assets/krigla2.jpg";
import diploma from "@/assets/diploma.jpg";
import idcard from "@/assets/idcard.jpg";
import flasa from "@/assets/flasa2.jpg";
import pozivnica from "@/assets/pozivnica.jpg";
import magnet from "@/assets/magnet.jpg";
import rukavica from "@/assets/rukavice.jpg";
import nalepnica from "@/assets/nalepnica.jpg";
import termos from "@/assets/termos.jpg";



const Index = () => {
  const navigate = useNavigate();
  const [contactOpen, setContactOpen] = useState(false);
  
  const products = [
    { icon: Shirt, title: "Pamučne majice", description: "Kvalitetna štampa na pamučnim majicama", image: tshirtImage },
    { icon: Shirt, title: "Polo majice", description: "Kvalitetna štampa na polo majicama", image: polo },
    { icon: Shirt, title: "Polyester majice", description: "Sportske majice sa trajnom štampom", image: tshirtImage2 },
    { icon: Shirt, title: "Radna odela", description: "Profesionalna radna odeća sa logoom", image: tshirtImage3 },
    { icon: Shirt, title: "Sportske dresove", description: "Personalizovani dresovi za timove", image: tshirtImage2 },
    { icon: Palette, title: "Kačkete", description: "Kvalitetna štampa na kačketima", image: kacket },
    { icon: Shirt, title: "Rukavice za rernu", description: "Kvalitetna štampa na rukavicama za rernu", image: rukavica },
    { icon: Shirt, title: "Kecelje", description: "Kvalitetna štampa na keceljama", image: kecelja },
    { icon: Coffee, title: "Aluminijumske boce", description: "Kvalitetna štampa na aluminijumskim bocamma", image: ranac },
    { icon: Coffee, title: "Termose sa meračem temperature", description: "500 ml", image: termos },
    { icon: Shirt, title: "Majice za flaše", description: "Kvalitetna štampa na majicama za flašu", image: flasa },
    { icon: Palette, title: "Bedževe", description: "Kvalitetna štampa na bedževima", image: bedzevi },
    { icon: Palette, title: "ID kartice", description: "Kvalitetna štampa na ID karticama", image: idcard },
    { icon: Palette, title: "Magnete za frižider", description: "Kvalitetna štampa na magnetima za frižider", image: magnet },
    { icon: Palette, title: "Pepeljare", description: "Kvalitetna štampa na pepeljarama", image: pepeljara },
    { icon: Coffee, title: "Lonče", description: "Kvalitetna štampa na lonče", image: lonce },
    { icon: Palette, title: "Rančeve za patike", description: "Kvalitetna štampa na rančevima za patike", image: ranac },
    { icon: Shirt, title: "Dukserice", description: "Tople dukserice sa vašim dizajnom", image: duks },
    { icon: Palette, title: "Jastuke", description: "Dekorativni jastuci sa štampom", image: jastuk },
    { icon: Coffee, title: "Šolje", description: "Personalizovane šolje za kafu i čaj", image: mugImage },
    { icon: Coffee, title: "Krigle", description: "Elegantne čaše sa custom dizajnom", image: krigle },
    { icon: Palette, title: "Cegere", description: "Ekološke torbe sa štampom", image: ceger },
    { icon: Shirt, title: "Bodiće", description: "Slatki bodići za najmađe", image: bodic },
    { icon: Palette, title: "Vizit karte", description: "Profesionalne vizit karte", image: vizitka },
    { icon: Palette, title: "Pozivnice", description: "Elegantne pozivnice za sve prilike", image: pozivnica },
    { icon: Palette, title: "Priveske", description: "Personalizovani privesci za ključeve", image: privezak },
    { icon: Puzzle, title: "Puzzle", description: "Pretvorite fotografije u puzle", image: puzzleImage },
    { icon: Palette, title: "Slike na kamenu sa drvenim ramom", description: "Luksuzni ukrasi sa vašom slikom", image: slikadrvo },
    { icon: Palette, title: "Nalepnice", description: "Custom nalepnice svih veličina", image: nalepnica },
    { icon: Palette, title: "Diplome", description: "Svečane diplome i sertifikati", image: diploma },
    { icon: Palette, title: "Kartonske ambalaže", description: "Brendirana ambalaža za proizvode", image: amb },
  ];

  const bestSellers = [
    { name: "Majice", price: "800 — 1200 RSD", image: tshirtImage },
    { name: "Šolje", price: "660 — 1000 RSD", image: mugImage },
    { name: "Jastuci", price: "900 RSD", image: jastuk },
    { name: "Cegeri", price: "750 RSD", image: ceger },
  ];

  const testimonials = [
    {
      text: "Svaka zamisao i želja – ispunjena. Pedantno odrađena porudžbina, pakovanje je spremno za poklon, stiglo na dan. Ljubazni, predusetljivi i laki za saradnju. Preporučujem iz iskustva.",
      author: "Adrijana F.",
      role: "Vlasnik firme"
    },
    {
      text: "Baš su lepe i dobre majice. Puno vam hvala!",
      author: "Eržebet R.",
      role: "HR menadžer"
    },
    {
      text: "Визиткарте су одличне.",
      author: "Јована М.",
      role: "Sport trener"
    },
        {
      text: "Super su majice!",
      author: "Auto servis Tomy",
      role: "Vlasnik firme"
    },
    {
      text: "Majice su odlične. Naručujem sledeći mesec opet da upotpunim boje.",
      author: "Ivan M.",
      role: "HR menadžer"
    },
  ];

  const process = [
    {
      icon: Sparkles,
      title: "Odaberite proizvod",
      description: "Izaberite iz širokog spektra proizvoda",
    },
    {
      icon: Palette,
      title: "Upload dizajn",
      description: "Pošaljite svoj dizajn ili kreirajmo zajedno",
    },
    {
      icon: CheckCircle2,
      title: "Mi štampamo i dostavljamo",
      description: "Profesionalna štampa i brza dostava",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Palette className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              DigitalFamily Print
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">
              Usluge
            </a>
            <a href="#bestsellers" className="text-foreground/80 hover:text-primary transition-colors">
              Najprodavanije
            </a>
            <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">
              Utisci
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">
              Kontakt
            </a>
          </div>
          <Button variant="hero" size="lg" onClick={() => navigate("/order")}>
            Poruči
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Štampa po meri,{" "}
                <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                  Neograničena kreativnost
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Pretvorite vaše ideje u stvarnost sa profesionalnom štampom na majicama, šoljama, puzlama i još mnogo toga. 
                Kvalitetna štampa koja ističe vaš brend.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" className="group" onClick={() => navigate("/order")}>
                  Počni porudžbinu
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outlineHero" size="lg" onClick={() => navigate("/catalog")}>
                  Pogledaj katalog
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-sm text-foreground/80">Brza dostava</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm text-foreground/80">1000+ zadovoljnih klijenata</span>
                </div>
              </div>
            </div>
            <div className="relative animate-in fade-in slide-in-from-right duration-700">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-2xl" />
              <img
                src={heroImage}
                alt="Prikaz štampanih proizvoda"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Carousel */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Šta <span className="text-primary">štampamo</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Od odeće do kućnog dekora, oživljavamo vaše dizajne kvalitetnom štampom
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent>
              {products.map((product, index) => {
                const Icon = product.icon;
                return (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                    <Card className="group hover:shadow-[0_8px_30px_hsl(var(--primary)/0.2)] transition-all duration-300 hover:-translate-y-1 border-border/50 overflow-hidden h-full">
                      {product.image && (
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                        </div>
                      )}
                      <CardContent className="pt-4 pb-6 space-y-3">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">{product.title}</h3>
                        <p className="text-muted-foreground">{product.description}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </Carousel>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section id="bestsellers" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Najprodavaniji <span className="text-primary">proizvodi</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Naši najpopularniji artikli po najboljim cenama
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {bestSellers.map((item, index) => (
              <Card key={index} className="group hover:shadow-[0_8px_30px_hsl(var(--primary)/0.2)] transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden rounded-t-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-6 pb-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                  <p className="text-primary text-xl font-semibold">{item.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Jednostavan <span className="text-primary">proces</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Do vaše štampe u 3 jednostavna koraka
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <Card className="text-center p-8 hover:shadow-lg transition-shadow border-border/50">
                    <CardContent className="pt-6 space-y-4">
                      <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
                        <Icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div className="text-4xl font-bold text-primary/20">0{index + 1}</div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Zašto <span className="text-primary">nas biraju</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Pročitajte šta naši klijenti kažu o nama
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-border/50">
                <CardContent className="pt-6 space-y-4">
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Posetite <span className="text-primary">nas</span>
            </h2>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <p>Hajduk Veljka 33, Bečej</p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.0!2d20.0384!3d45.6143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa070000001%3A0x0!2sHajduk%20Veljka%2033%2C%20Be%C4%8Dej!5e0!3m2!1sen!2srs!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokacija DigitalFamily Print"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
        <div className="container mx-auto px-4 relative">
          <Card className="max-w-4xl mx-auto text-center p-12 bg-card/50 backdrop-blur-sm border-border/50 shadow-2xl">
            <CardContent className="space-y-6 pt-6">
              <h2 className="text-3xl md:text-5xl font-bold">
                Spremni da štampate svoju <span className="text-primary">viziju?</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Pridružite se hiljadama zadovoljnih klijenata koji nam veruju za svoje potrebe štampe. 
                Počnite danas i oživite svoje ideje!
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Button variant="hero" size="lg" className="group" onClick={() => navigate("/order")}>
                  Zatražite ponudu
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outlineHero" size="lg" onClick={() => setContactOpen(true)}>
                  Kontaktirajte nas
                </Button>
              </div>
              <div className="flex items-center justify-center gap-6 pt-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Bez minimuma</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Besplatna pomoć</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Brza isporuka</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Palette className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  DigitalFamily Print
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                Profesionalna usluga štampe za sve vaše kreativne potrebe.
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.facebook.com/p/DigitalFamily-Print-100089253632323/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.instagram.com/digitalfamilyprint" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Radno vreme</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Ponedeljak — Petak</li>
                <li>10 — 16 h</li>
                <li>Subota</li>
                <li>10 — 14 h</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kompanija</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">O nama</a></li>
                <li><a href="#" className="hover:text-primary transition-colors" onClick={(e) => { e.preventDefault(); setContactOpen(true); }}>Kontakt</a></li>
                <li><a href="/catalog" className="hover:text-primary transition-colors">Katalog sa proizvodima</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="mailto:digitalfamilyprint@gmail.com" className="hover:text-primary transition-colors">digitalfamilyprint@gmail.com</a></li>
                <li><a href="tel:+381691510181" className="hover:text-primary transition-colors">+381691510181</a></li>
                <li>Hajduk Veljka 33</li>
                <li>Bečej, Srbija</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 DigitalFamily Print. Sva prava zadržana.</p>
          </div>
        </div>
      </footer>

      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
};

export default Index;