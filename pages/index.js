import HeroSlider from "../components/HeroSlider/HeroSlider";
import ShopCategories from "../components/ShopCategories/ShopCategories.container";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Mapa from "../components/Mapa/Mapa";
import Contacto from "../components/Contacto/Contacto";
import Servicios from "../components/Servicios/Servicios";
import PageTitleBox from "../components/PageTitleBox/PageTitleBox";
import Info from "../components/Info/Info";
// import RecipeCard from "../components/RecipeCard/RecipeCard";


export default function Home() {
  return (
    <>
      <HeroSlider />
      <Info />
      {/* <ShopCategories /> */}
      <PageTitleBox />
      <Servicios />
      {/* <FeaturedProducts /> */}
      <Mapa />
      <Contacto />
    </>
  );
}
