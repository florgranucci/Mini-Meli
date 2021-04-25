import Carousel from "react-material-ui-carousel";
import { Container } from "@material-ui/core";
import Item from "./Item/Item";

const Header = () => {
    var items = [
    {
      image: "https://i.ibb.co/5rDR560/mla-home-desktop-slider-picture-5693b95c-371b-41e4-96db-fa5b3e843bac.webp",
    },
    {
      image: "https://i.ibb.co/mz4Ljct/mla-home-desktop-slider-picture-932f5fa4-348b-4d5e-814f-87da6ad357f7.webp",
    },
    {
        image: 'https://i.ibb.co/PMwQHjT/mla-home-desktop-slider-picture-9649a9dc-56c6-4335-a6fa-96637afbfa3c.webp'
    }
  ];
    return (
     <Container maxWidth='lg'>
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Container>
    )
}

export default Header
