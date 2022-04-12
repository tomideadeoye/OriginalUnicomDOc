import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import { routes } from "routes";

function NavbarDark() {
  return (
    <MKBox variant="gradient" bgColor="dark" shadow="sm" py={0.25}>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          href: "https://docs.google.com/spreadsheets/d/1X_oPC8_oaiQ-eLgWvGir8QkMvWZukYLS/edit?usp=sharing&ouid=109599550030499733240&rtpof=true&sd=true",
          label: "Download Excel",
          color: "info",
        }}
        transparent
        relative
        light
        center
      />
    </MKBox>
  );
}

export default NavbarDark;
