import Body from "./Body";
import Topic from "./Topic";
import Footer from "./footer";
import Header from "./header";
import Main from "./main";
import Article from "./Articles";
import ServicesTopic from "./ServicesTopic";
import Quote from "./quote";
import Services from "./Services";

export default function Homepage() {
  return (
    <>
      <Header />
      <Body>
        <Main>
          <Topic />
          <Article />
          <Quote />
          <ServicesTopic />
          <Services />
        </Main>
      </Body>
      <Footer />
    </>
  );
}
