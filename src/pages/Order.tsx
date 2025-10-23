import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

import soljeImg1 from "@/assets/solje1.jpg";
import soljeImg2 from "@/assets/solje2.png";
import privesciImg from "@/assets/privesci1.jpg";
import magnetiImg from "@/assets/magneti1.jpg";
import termos from "@/assets/termos.jpg";
import lonce1 from "@/assets/lonce1.jpg";
import lonce2 from "@/assets/lonce2.jpg";
import muski1 from "@/assets/muski.png";
import muski2 from "@/assets/muski2.png";
import zenski from "@/assets/zenski.png";
import deciji from "@/assets/deciji.png";
import bodici from "@/assets/bebe.png";
import rukavice1 from "@/assets/rukavice1.png";
import rukavice2 from "@/assets/rukavice2.png";
import kecelje from "@/assets/kecelje.png";

import duks1 from "@/assets/duksevi.png";
import duks2 from "@/assets/duksevi2.png";
import duks3 from "@/assets/duksevi3.png";

import poloZD from "@/assets/poloZenskiDugi.png";
import poloZK from "@/assets/poloZenskiKratki.png";
import poloMD from "@/assets/poloMuskiDugi.png";
import poloMK from "@/assets/poloMuskiKratki.png";


const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  lastName: z.string().min(1, "Last name is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email().optional().or(z.literal("")),
  product: z.string().min(1, "Please select a product"),
  quantity: z.string().min(1, "Quantity is required"),
  designType: z.enum(["image", "text", "both"], {
    required_error: "Molimo izaberite opciju dizajna",
  }),
  image: z.any().optional(),
  designText: z.string().optional(),
  cupType: z.string().optional(),
  cupBox: z.string().optional(),
  tshirtSize: z.string().optional(),
  tshirtSleeve: z.string().optional(),
  bodysuitSize: z.string().optional(),
  bodysuitSleeve: z.string().optional(),
  pendantShape: z.string().optional(),
  hearAbout: z.string().optional(),
  comment: z.string().optional(),
  typeofID: z.string().optional(),
  typeofStickers: z.string().optional(),
  typeofDuks: z.string().optional(),
  colorofDuks: z.string().optional(),
  sizeofDuks: z.string().optional(),
  typeofTshirt: z.string().optional(),
  womanMan: z.string().optional(),
  typeoflonce: z.string().optional(),
  typeofmagnet: z.string().optional(),
  colorofTshirt: z.string().optional(),
  colorofKecelja: z.string().optional(),
  colorofRukavica: z.string().optional(),
  colorofHats: z.string().optional(),
  pillowShape: z.string().optional(),
});

const Order = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastName: "",
      address: "",
      city: "",
      phone: "",
      email: "",
      product: "",
      quantity: "",
      designType: undefined,
      image: undefined,
      designText: "",
      cupType: "",
      cupBox: "",
      tshirtSize: "",
      tshirtSleeve: "",
      bodysuitSize: "",
      bodysuitSleeve: "",
      pendantShape: "",
      hearAbout: "",
      comment: "",
      typeofID: "",
      typeofStickers: "",
      typeofDuks: "",
      colorofDuks: "",
      sizeofDuks: "",
      typeofTshirt: "",
      typeoflonce: "",
      typeofmagnet: "",
      colorofTshirt: "",
      colorofKecelja: "",
      colorofRukavica: "",
      colorofHats: "",
      pillowShape: "",
      womanMan: "",
    },
  });

  const selectedProduct = form.watch("product");
  const selectedDuks = form.watch("typeofDuks");
  const selectedTshirt = form.watch("typeofTshirt");
  const selectedTshirtSleeve = form.watch("tshirtSleeve");
  const selectedTshirtWM = form.watch("womanMan");
  const designType = form.watch("designType");

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);

    try {
      const { error } = await supabase.functions.invoke("send-email", {
        body: {
          type: "order",
          data: values,
        },
      });

      if (error) throw error;

      toast({
        title: "Porudžbina poslata!",
        description: "Uskoro ćemo vas kontaktirati da potvrdimo vašu porudžbinu.",
      });
    } catch (error) {
      console.error("Greška pri slanju porudžbine:", error);
      toast({
        title: "Greška",
        description: "Nije uspelo slanje porudžbine. Pokušajte ponovo.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Button variant="ghost" onClick={() => navigate("/")} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Vratite se nazad
        </Button>

        <div className="bg-card/50 backdrop-blur-sm rounded-lg border p-8 shadow-lg">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Pošaljite svoju porudžbinu
          </h1>
          <p className="text-muted-foreground mb-8">
            Popunite formu ispod i pretvorićemo vaše ideje u stvarnost
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* --- Osnovni podaci --- */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ime *</FormLabel>
                      <FormControl>
                        <Input placeholder="Petar" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prezime *</FormLabel>
                      <FormControl>
                        <Input placeholder="Petrović" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ulica i broj *</FormLabel>
                    <FormControl>
                      <Input placeholder="Hajduk Veljka 33" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Grad *</FormLabel>
                      <FormControl>
                        <Input placeholder="Bečej" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Broj telefona *</FormLabel>
                      <FormControl>
                        <Input placeholder="+381 69 151 0181" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="digitalfamilyprint@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* --- Novi deo: izbor dizajna --- */}
              <FormField
                control={form.control}
                name="designType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Šta želite na proizvodu?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Izaberite opciju" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="image">Samo sliku</SelectItem>
                        <SelectItem value="text">Samo tekst</SelectItem>
                        <SelectItem value="both">Sliku i tekst</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {(designType === "image" || designType === "both") && (
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field: { onChange, value, ...field } }) => (
                    <FormItem>
                      <FormLabel>Izaberite sliku za štampu</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => onChange(e.target.files?.[0])}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              {(designType === "text" || designType === "both") && (
                <FormField
                  control={form.control}
                  name="designText"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tekst za štampu</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Unesite tekst koji želite da odštampamo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              

              <FormField
                control={form.control}
                name="product"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Izaberite proizvod *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Izaberite proizvod" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="tshirt">Majica</SelectItem>
                        <SelectItem value="cup">Krigle</SelectItem>
                        <SelectItem value="keychain">Privezak</SelectItem>
                        <SelectItem value="pillow">Jastuk</SelectItem>
                        <SelectItem value="sweatshirt">Duks</SelectItem>
                        <SelectItem value="baby-bodysuit">Bodići za bebe</SelectItem>
                        <SelectItem value="puzzle">Puzzle</SelectItem>
                        <SelectItem value="wooden-frame">Slika na kamenu sa drvenim ramom</SelectItem>
                        <SelectItem value="stickers">Nalepnice</SelectItem>
                        <SelectItem value="business-cards">Vizit karte</SelectItem>
                        <SelectItem value="mugs">Šolje</SelectItem>

                        <SelectItem value="hats">Kačketi</SelectItem>
                        <SelectItem value="rerna">Rukavice za rernu</SelectItem>
                        <SelectItem value="kecelja">Kecelje</SelectItem>
                        <SelectItem value="aluBoca">Aluminijumska boca</SelectItem>
                        <SelectItem value="termos">Termos</SelectItem>
                        <SelectItem value="flase">Majice za flaše</SelectItem>                        
                        <SelectItem value="bedzevi">Bedževi</SelectItem>
                        <SelectItem value="IDcard">ID kartice</SelectItem>
                        <SelectItem value="magnets">Magneti za frižider</SelectItem>
                        <SelectItem value="pepeljara">Pepeljara</SelectItem>
                        <SelectItem value="lonce">Lonče</SelectItem>
                        <SelectItem value="rancevi">Rančevi za patike</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Količina *</FormLabel>
                    <FormControl>
                      <Input type="number" min="1" placeholder="1" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {(selectedProduct === "mugs") && (
                <>
                  <FormField
                    control={form.control}
                    name="cupType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Vrsta šolje</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Izaberite vrstu šolje" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="glossy">Sjajna</SelectItem>
                            <SelectItem value="matte">Mat</SelectItem>
                            <SelectItem value="magic">Magična</SelectItem>
                            <SelectItem value="cork">Sa plutom</SelectItem>
                            <SelectItem value="bela175ml">Manja bela šolja, 175 ml</SelectItem>
                            <SelectItem value="satanjiricem">Šolja sa tanjirićem</SelectItem>
                            <SelectItem value="konusna355ml">Konusna bela šolja, 355 ml</SelectItem>
                            <SelectItem value="bela90ml">Mala bela šolja, 90 ml</SelectItem>                                                        
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                <div className="flex flex-wrap justify-center gap-6 my-4">
                  <img
                    src={soljeImg1}
                    alt="Šolje"
                    className="w-64 h-auto rounded-xl shadow-lg object-cover transition-transform hover:scale-105"
                  />
                  <img
                    src={soljeImg2}
                    alt="Šolje"
                    className="w-64 h-auto rounded-xl shadow-lg object-cover transition-transform hover:scale-105"
                  />
                </div>
                  <FormField
                    control={form.control}
                    name="cupBox"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Da li želite kutiju uz šolju?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Izaberite jednu opciju" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="yes">Da</SelectItem>
                            <SelectItem value="no">Ne</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {(selectedProduct === "tshirt") && (
              <>
                  <FormField
                    control={form.control}
                    name="typeofTshirt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Vrsta majice</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Izaberite vrstu majice" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="cotton">Pamučna</SelectItem>
                            <SelectItem value="polyester">Poliester</SelectItem>
                            <SelectItem value="polo">Polo</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />



                {(selectedTshirt === "polyester" || selectedTshirt === "cotton") && (
                    <>
                <FormField
                  control={form.control}
                  name="tshirtSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Veličina majice</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Izaberite veličinu" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="children-2">Dečiji 2</SelectItem>
                          <SelectItem value="children-4">Dečiji 4</SelectItem>
                          <SelectItem value="children-6">Dečiji 6</SelectItem>
                          <SelectItem value="children-8">Dečiji 8</SelectItem>
                          <SelectItem value="children-10">Dečiji 10</SelectItem>
                          <SelectItem value="children-12">Dečiji 12</SelectItem>
                          <SelectItem value="children-14">Dečiji 14</SelectItem>
                          <SelectItem value="children-14">Dečiji 16</SelectItem>
                          <SelectItem value="womens-s">Ženski S</SelectItem>
                          <SelectItem value="womens-m">Ženski M</SelectItem>
                          <SelectItem value="womens-l">Ženski L</SelectItem>
                          <SelectItem value="womens-xl">Ženski XL</SelectItem>
                          <SelectItem value="womens-xxl">Ženski XXL</SelectItem>
                          <SelectItem value="mens-xs">Muški XS</SelectItem>
                          <SelectItem value="mens-s">Muški S</SelectItem>
                          <SelectItem value="mens-m">Muški M</SelectItem>
                          <SelectItem value="mens-l">Muški L</SelectItem>
                          <SelectItem value="mens-xl">Muški XL</SelectItem>
                          <SelectItem value="mens-xxl">Muški XXL</SelectItem>
                          <SelectItem value="mens-xxxl">Muški XXXL</SelectItem>
                          <SelectItem value="mens-4xl">Muški 4XL</SelectItem>
                          <SelectItem value="mens-5xl">Muški 5XL</SelectItem>
                          <SelectItem value="mens-6xl">Muški 6XL</SelectItem>
                          <SelectItem value="mens-7xl">Muški 7XL</SelectItem>
                          <SelectItem value="else">Drugo</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                    control={form.control}
                    name="colorofTshirt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Boja majice</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Izaberite boju majice" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="white">Bela</SelectItem>
                            <SelectItem value="babyrose">Baby roze</SelectItem>
                            <SelectItem value="orange">Narandžasta</SelectItem>
                            <SelectItem value="red">Crvena</SelectItem>
                            <SelectItem value="lila">Lila</SelectItem>
                            <SelectItem value="tirkiz">Tirkiz</SelectItem>
                            <SelectItem value="blue">Royal plava</SelectItem>
                            <SelectItem value="green">Beneton zelena</SelectItem>
                            <SelectItem value="gray">Siva</SelectItem>
                            <SelectItem value="black">Crna</SelectItem>

                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                <div className="flex flex-wrap justify-center gap-6 my-4">
                  <img
                    src={muski1}
                    alt="Majica"
                    className="w-64 h-auto rounded-xl shadow-lg object-cover transition-transform hover:scale-105"
                  />
                  <img
                    src={muski2}
                    alt="Majica"
                    className="w-64 h-auto rounded-xl shadow-lg object-cover transition-transform hover:scale-105"
                  />
                  <img
                    src={zenski}
                    alt="Majica"
                    className="w-64 h-auto rounded-xl shadow-lg object-cover transition-transform hover:scale-105"
                  />
                  <img
                    src={deciji}
                    alt="Majica"
                    className="w-64 h-auto rounded-xl shadow-lg object-cover transition-transform hover:scale-105"
                  />
                </div>
                </> )}

                
                {selectedTshirt === "polo" && (
                    <>
                <FormField
                  control={form.control}
                  name="tshirtSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Veličina majice</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Izaberite veličinu" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="womens-s">Ženski S</SelectItem>
                          <SelectItem value="womens-m">Ženski M</SelectItem>
                          <SelectItem value="womens-l">Ženski L</SelectItem>
                          <SelectItem value="womens-xl">Ženski XL</SelectItem>
                          <SelectItem value="womens-xxl">Ženski XXL</SelectItem>
                          <SelectItem value="mens-s">Muški S</SelectItem>
                          <SelectItem value="mens-m">Muški M</SelectItem>
                          <SelectItem value="mens-l">Muški L</SelectItem>
                          <SelectItem value="mens-xl">Muški XL</SelectItem>
                          <SelectItem value="mens-xxl">Muški XXL</SelectItem>
                          <SelectItem value="mens-xxxl">Muški XXXL</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="tshirtSleeve"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dužina rukava majice</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Izaberite dužinu rukava" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="dugi">Dugi</SelectItem>
                          <SelectItem value="kratki">Kratki</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {selectedTshirtSleeve === "dugi" && (
                    <>
                <FormField
                    control={form.control}
                    name="colorofTshirt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Boja majice</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Izaberite boju majice" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="white">Bela</SelectItem>
                            <SelectItem value="red">Crvena</SelectItem>
                            <SelectItem value="bordo">Bordo</SelectItem>
                            <SelectItem value="blue">Plava</SelectItem>
                            <SelectItem value="royalblue">Royal plava</SelectItem>
                            <SelectItem value="green">Zelena</SelectItem>
                            <SelectItem value="tamnogray">Tamno siva</SelectItem>
                            <SelectItem value="pepeljastogray">Pepeljasto siva</SelectItem>
                            <SelectItem value="black">Crna</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  </>)}

                {selectedTshirtSleeve === "kratki" && (
                    <>

                <FormField
                  control={form.control}
                  name="womanMan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tip majice</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Izaberite tip majice" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="muski">Muški</SelectItem>
                          <SelectItem value="zenski">Ženski</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {selectedTshirtWM === "muski" && (
                    <>
                <FormField
                    control={form.control}
                    name="colorofTshirt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Boja majice</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Izaberite boju majice" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="white">Bela</SelectItem>
                            <SelectItem value="bez">Bež</SelectItem>
                            <SelectItem value="red">Crvena</SelectItem>
                            <SelectItem value="bordo">Bordo</SelectItem>
                            <SelectItem value="blue">Plava</SelectItem>
                            <SelectItem value="svetloblue">Svetlo plava</SelectItem>
                            <SelectItem value="royalblue">Royal plava</SelectItem>
                            <SelectItem value="tirkiznoblue">Tirkizno plava</SelectItem>                            
                            <SelectItem value="green">Zelena</SelectItem>
                            <SelectItem value="svetlogreen">Svetlo zelena</SelectItem>
                            <SelectItem value="tamnoGreen">Tamno zelena</SelectItem>
                            <SelectItem value="keligreen">Keli zelena</SelectItem>
                            <SelectItem value="maslinasta">Maslinasta</SelectItem>
                            <SelectItem value="yellow">Žuta</SelectItem>
                            <SelectItem value="petrol">Petrol</SelectItem>
                            <SelectItem value="Oranz">Oranž</SelectItem>                            
                            <SelectItem value="brown">Braon</SelectItem>
                            <SelectItem value="purple">Ljubičasta</SelectItem>
                            <SelectItem value="tamnogray">Tamno siva</SelectItem>
                            <SelectItem value="pepeljastogray">Pepeljasto siva</SelectItem>
                            <SelectItem value="tamnoPepeljastogray">Tamno pepeljasto siva</SelectItem>
                            <SelectItem value="gray">Siva</SelectItem>
                            <SelectItem value="black">Crna</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  </>)}

                {selectedTshirtWM === "zenski" && (
                    <>
                <FormField
                    control={form.control}
                    name="colorofTshirt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Boja majice</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Izaberite boju majice" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="white">Bela</SelectItem>
                            <SelectItem value="bez">Bež</SelectItem>
                            <SelectItem value="red">Crvena</SelectItem>
                            <SelectItem value="bordo">Bordo</SelectItem>
                            <SelectItem value="ciklama">Ciklama</SelectItem>
                            <SelectItem value="blue">Plava</SelectItem>
                            <SelectItem value="svetloblue">Svetlo plava</SelectItem>
                            <SelectItem value="royalblue">Royal plava</SelectItem>
                            <SelectItem value="tirkiznoblue">Tirkizno plava</SelectItem>                            
                            <SelectItem value="green">Zelena</SelectItem>
                            <SelectItem value="svetlogreen">Svetlo zelena</SelectItem>
                            <SelectItem value="tamnoGreen">Tamno zelena</SelectItem>
                            <SelectItem value="keligreen">Keli zelena</SelectItem>
                            <SelectItem value="maslinasta">Maslinasta</SelectItem>
                            <SelectItem value="yellow">Žuta</SelectItem>
                            <SelectItem value="petrol">Petrol</SelectItem>
                            <SelectItem value="Oranz">Oranž</SelectItem>                            
                            <SelectItem value="brown">Braon</SelectItem>
                            <SelectItem value="purple">Ljubičasta</SelectItem>
                            <SelectItem value="tamnogray">Tamno siva</SelectItem>
                            <SelectItem value="pepeljastogray">Pepeljasto siva</SelectItem>
                            <SelectItem value="svetlopepeljastogray">Svelo pepeljasto siva</SelectItem>
                            <SelectItem value="tamnoPepeljastogray">Tamno pepeljasto siva</SelectItem>
                            <SelectItem value="gray">Siva</SelectItem>
                            <SelectItem value="black">Crna</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  </>)}

                  </>)}

                <div className="flex flex-wrap justify-center gap-6 my-4">
                  <img
                    src={poloZD}
                    alt="Majica"
                    className="w-full max-w-xl h-auto rounded-2xl shadow-xl object-contain transition-transform hover:scale-105"
                  />
                  <img
                    src={poloZK}
                    alt="Majica"
                    className="w-full max-w-xl h-auto rounded-2xl shadow-xl object-contain transition-transform hover:scale-105"
                  />
                  <img
                    src={poloMD}
                    alt="Majica"
                    className="w-full max-w-xl h-auto rounded-2xl shadow-xl object-contain transition-transform hover:scale-105"
                  />
                  <img
                    src={poloMK}
                    alt="Majica"
                    className="w-full max-w-xl h-auto rounded-2xl shadow-xl object-contain transition-transform hover:scale-105"
                  />
                </div>
                </> )}
                </> 
              )}

              

              {selectedProduct === "baby-bodysuit" && (
                <>
                  <FormField
                    control={form.control}
                    name="bodysuitSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Veličina bodića</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Izaberite veličinu" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="56">56</SelectItem>
                            <SelectItem value="62">62</SelectItem>
                            <SelectItem value="68">68</SelectItem>
                            <SelectItem value="74">74</SelectItem>
                            <SelectItem value="80">80</SelectItem>
                            <SelectItem value="86">86</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="bodysuitSleeve"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Dužina rukava</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Izaberite dužinu rukava" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="long">Dugi rukavi</SelectItem>
                            <SelectItem value="short">Kratki rukavi</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex flex-wrap justify-center gap-6 my-4">
                  <img
                    src={bodici}
                    alt="Bodici"
                    className="w-64 h-auto rounded-xl shadow-lg object-cover transition-transform hover:scale-105"
                  />
                </div>
                </>
              )}

              {selectedProduct === "keychain" && (
                <>
                <FormField
                  control={form.control}
                  name="pendantShape"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Oblik priveska</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Izaberite oblik priveska" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="circle">Krug</SelectItem>
                          <SelectItem value="square">Kvadrat</SelectItem>
                          <SelectItem value="rectangle">Pravougaonik</SelectItem>
                          <SelectItem value="house">Kućica</SelectItem>
                          <SelectItem value="heart">Srce</SelectItem>
                          <SelectItem value="bone">Koska</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-wrap justify-center gap-6 my-4">
                  <img
                    src={privesciImg}
                    alt="Privesci"
                    className="w-64 h-auto rounded-xl shadow-lg object-cover transition-transform hover:scale-105"
                  />
                </div>
                </>
              )}


              {selectedProduct === "pillow" && (
                <>
                <FormField
                  control={form.control}
                  name="pillowShape"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Oblik jastuka</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Izaberite oblik jastuka" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="square">Kvadrat</SelectItem>
                          <SelectItem value="heart">Srce</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                </>
              )}

              {selectedProduct === "IDcard" && (
                <FormField
                  control={form.control}
                  name="typeofID"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vrsta ID kartice</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Izaberite vrstu ID kartice" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="pcv">PVC obične</SelectItem>
                          <SelectItem value="regular">Beskontaktne sa čipom Mifare 13,56 MHz</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}  

              {selectedProduct === "stickers" && (
                <FormField
                  control={form.control}
                  name="typeofStickers"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vrsta nalepnice</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Izaberite tip nalepnice" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="regular">Obične</SelectItem>
                          <SelectItem value="pcv">PVC</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              {selectedProduct === "sweatshirt" && (
                <>
                  <FormField
                    control={form.control}
                    name="typeofDuks"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Vrsta duksa</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Izaberite duks" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="zip">Sa kapuljačom i cibzarom</SelectItem>
                            <SelectItem value="hoodie">Sa kapuljačom i džepom</SelectItem>
                            <SelectItem value="basic">Običan duks (280 g)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {selectedDuks === "zip" && (
                    <>
                      <div className="flex justify-center my-6">
                        <img
                          src={duks3}
                          alt="Duks sa cibzarom"
                          className="w-full max-w-xl h-auto rounded-2xl shadow-xl object-contain transition-transform hover:scale-105"
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="colorofDuks"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Boja duksa</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Izaberite boju" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="black">Crna</SelectItem>
                                <SelectItem value="tamnogray">Tamno siva</SelectItem>
                                <SelectItem value="pepeljastogray">Pepeljasto siva</SelectItem>
                                <SelectItem value="tamnoblue">Tamno plava</SelectItem>
                                <SelectItem value="rolayblue">Royal plava</SelectItem>
                                <SelectItem value="red">Crvena</SelectItem>
                                <SelectItem value="white">Bela</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="sizeofDuks"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Veličina duksa</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Izaberite veličinu" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="xs">XS</SelectItem>
                                <SelectItem value="s">S</SelectItem>
                                <SelectItem value="m">M</SelectItem>
                                <SelectItem value="l">L</SelectItem>
                                <SelectItem value="xl">XL</SelectItem>
                                <SelectItem value="xxl">XXL</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}

                  {selectedDuks === "hoodie" && (
                    <>
                      <div className="flex justify-center my-6">
                        <img
                          src={duks2}
                          alt="Duks sa kapuljačom i džepom"
                          className="w-full max-w-xl h-auto rounded-2xl shadow-xl object-contain transition-transform hover:scale-105"
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="colorofDuks"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Boja duksa</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Izaberite boju" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="black">Crna</SelectItem>
                                <SelectItem value="tamnogray">Tamno siva</SelectItem>
                                <SelectItem value="gray">Siva</SelectItem>
                                <SelectItem value="pepeljastogray">Pepeljasto siva</SelectItem>
                                <SelectItem value="tamnoblue">Tamno plava</SelectItem>
                                <SelectItem value="rolayblue">Royal plava</SelectItem>
                                <SelectItem value="red">Crvena</SelectItem>
                                <SelectItem value="bordo">Bordo</SelectItem>
                                <SelectItem value="yellow">Žuta</SelectItem>
                                <SelectItem value="keligreen">Keli zelena</SelectItem>
                                <SelectItem value="maslinasta">Maslinasta</SelectItem>
                                <SelectItem value="orange">Narandžasta - oranž</SelectItem>
                                <SelectItem value="white">Bela</SelectItem>
                                <SelectItem value="bez">Bež</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="sizeofDuks"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Veličina duksa</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Izaberite veličinu" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="xs">XS</SelectItem>
                                <SelectItem value="s">S</SelectItem>
                                <SelectItem value="m">M</SelectItem>
                                <SelectItem value="l">L</SelectItem>
                                <SelectItem value="xl">XL</SelectItem>
                                <SelectItem value="xxl">XXL</SelectItem>
                                <SelectItem value="xxxl">XXXL</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}

                  {selectedDuks === "basic" && (
                    <>
                      <div className="flex justify-center my-6">
                        <img
                          src={duks1}
                          alt="Običan duks"
                          className="w-full max-w-xl h-auto rounded-2xl shadow-xl object-contain transition-transform hover:scale-105"
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="colorofDuks"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Boja duksa</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Izaberite boju" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="black">Crna</SelectItem>
                                <SelectItem value="tamnogray">Tamno siva</SelectItem>
                                <SelectItem value="gray">Siva</SelectItem>
                                <SelectItem value="pepeljastogray">Pepeljasto siva</SelectItem>
                                <SelectItem value="tamnoblue">Tamno plava</SelectItem>
                                <SelectItem value="rolayblue">Royal plava</SelectItem>
                                <SelectItem value="red">Crvena</SelectItem>
                                <SelectItem value="bordo">Bordo</SelectItem>
                                <SelectItem value="yellow">Žuta</SelectItem>
                                <SelectItem value="keligreen">Keli zelena</SelectItem>
                                <SelectItem value="zelena">Zelena</SelectItem>
                                <SelectItem value="orange">Narandžasta - oranž</SelectItem>
                                <SelectItem value="white">Bela</SelectItem>
                                <SelectItem value="bez">Bež</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="sizeofDuks"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Veličina duksa</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Izaberite veličinu" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="xs">XS</SelectItem>
                                <SelectItem value="s">S</SelectItem>
                                <SelectItem value="m">M</SelectItem>
                                <SelectItem value="l">L</SelectItem>
                                <SelectItem value="xl">XL</SelectItem>
                                <SelectItem value="xxl">XXL</SelectItem>
                                <SelectItem value="xxxl">XXXL</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}
                </>
              )}


              {selectedProduct === "rerna" && (
                <>
                <FormField
                  control={form.control}
                  name="colorofRukavica"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Boja rukavice za rernu</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Izaberite boju rukavice za rernu" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="gray">Siva</SelectItem>
                          <SelectItem value="red">Crvena</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-wrap justify-center gap-6 my-4">
                  <img
                    src={rukavice1}
                    alt="Rukavice"
                    className="w-64 h-auto rounded-xl shadow-lg object-cover transition-transform hover:scale-105"
                  />
                  <img
                    src={rukavice2}
                    alt="Rukavice"
                    className="w-64 h-auto rounded-xl shadow-lg object-cover transition-transform hover:scale-105"
                  />
                </div>
                </>
              )}   

              {selectedProduct === "kecelja" && (
                <>
                <FormField
                  control={form.control}
                  name="colorofKecelja"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Boja kecelje</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Izaberite boju kecelje" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="black">Crna</SelectItem>
                          <SelectItem value="white">Bela</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-wrap justify-center gap-6 my-4">
                  <img
                    src={kecelje}
                    alt="Kecelje"
                    className="w-64 h-auto rounded-xl shadow-lg object-cover transition-transform hover:scale-105"
                  />
                </div>
                </>
              )}


              {selectedProduct === "hats" && (
                <>
                <FormField
                  control={form.control}
                  name="colorofHats"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Boja kačketa</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Izaberite boju kačketa" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="white">Bela</SelectItem>
                          <SelectItem value="black">Crna</SelectItem>
                          <SelectItem value="gray">Siva</SelectItem>
                          <SelectItem value="red">Crvena</SelectItem>
                          <SelectItem value="royalBlue">Royal plava</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                </>
              )}   
              
              {selectedProduct === "lonce" && (
                <>
                <FormField
                  control={form.control}
                  name="typeoflonce"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Boja lončeta</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Izaberite boju lončeta" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="narandzasta">Emajlirana narandžasta šolja, 350 ml</SelectItem>
                          <SelectItem value="zuta">Emajlirana žuta šolja, 350 ml</SelectItem>
                          <SelectItem value="zelena">Emajlirana zelena šolja, 350 ml</SelectItem>
                          <SelectItem value="plava">Emajlirana plava šolja, 350 ml</SelectItem>
                          <SelectItem value="crvena">Emajlirana crvena šolja, 350 ml</SelectItem>
                          <SelectItem value="crvenirub">Keramičko lonče belo sa crvenim rubom, 300 ml</SelectItem>
                          <SelectItem value="plavirub">Keramičko lonče belo sa plavim rubom, 300 ml</SelectItem>
                          <SelectItem value="crnirub">Keramičko lonče belo sa crnim rubom, 300 ml</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-wrap justify-center gap-6 my-4">
                  <img
                    src={lonce1}
                    alt="Lonče"
                    className="w-64 h-auto rounded-xl shadow-lg object-cover transition-transform hover:scale-105"
                  />
                  <img
                    src={lonce2}
                    alt="Lonče"
                    className="w-64 h-auto rounded-xl shadow-lg object-cover transition-transform hover:scale-105"
                  />
                </div>
                </>
              )}                  

              {selectedProduct === "magnets" && (
                <>
                <FormField
                  control={form.control}
                  name="typeofmagnet"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Oblik magneta</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Izaberite oblik magneta" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="heart">Srce</SelectItem>
                          <SelectItem value="grb">Grb</SelectItem>
                          <SelectItem value="reactangle">Pravougaonik</SelectItem>
                          <SelectItem value="square">Zaobljeni kvadrat</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-wrap justify-center gap-6 my-4">
                  <img
                    src={magnetiImg}
                    alt="Magneti"
                    className="w-64 h-auto rounded-xl shadow-lg object-cover transition-transform hover:scale-105"
                  />
                </div>
                </>
              )}      

              <FormField
                control={form.control}
                name="hearAbout"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kako ste čuli za nas?</FormLabel>
                    <FormControl>
                      <Input placeholder="Društvene mreže, prijatelji, itd." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Komentar</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Dodatne informacije ili posebni zahtevi..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Pošalji porudžbinu
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Order;

