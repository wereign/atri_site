import { useLayoutEffect, useEffect } from "react";
import useStore, { setEffectivePropsForPage, updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Link } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Dropdown } from "@atrilabs/react-component-manifests/src/manifests/Dropdown/Dropdown.tsx";
import { Carousel } from "@atrilabs/react-component-manifests/src/manifests/Carousel/Carousel.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useLink1Cb, useLink2Cb, useContactCb, useFlex5Cb, useFlex7Cb, useLink8Cb, useLink9Cb, useLink10Cb, useMenu_BarCb, useTextBox7Cb, useDropdown2Cb, useTextBox8Cb, useTextBox9Cb, useIntro_BoxCb, useTextBox10Cb, useTextBox11Cb, useTextBox12Cb, useTextBox13Cb, useTextBox14Cb, usepast_projectsCb, useCarousel1Cb, useFlex11Cb, useTextBox15Cb, useCard1Cb, useFlex13Cb, useTextBox16Cb, useTextBox17Cb, useTextBox18Cb, useImage2Cb, useDiv2Cb, useLink11Cb, useCarousel3Cb, useCarousel4Cb, useTextBox19Cb, useTextBox20Cb, useTextBox21Cb, useLink12Cb, useLink13Cb, useTextBox26Cb, useTextBox27Cb, useTextBox28Cb, useLink14Cb, useTextBox29Cb, useTextBox30Cb, useTextBox31Cb, useLink15Cb, useTextBox32Cb, useTextBox33Cb, useTextBox34Cb, useCarousel7Cb, useDiv7Cb, useImage7Cb, useFlex19Cb, useButton2Cb, useLink16Cb, useTextBox35Cb, useTextBox36Cb, useTextBox37Cb, useCarousel8Cb, useDiv8Cb, useImage8Cb, useFlex20Cb } from "../page-cbs/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  useLayoutEffect(()=>{
    setEffectivePropsForPage("Home")
  }, [])

  useEffect(()=>{
    const onResize = ()=>{
      setEffectivePropsForPage("Home")
    };
    window.addEventListener("resize", onResize);
    return ()=>{
      window.removeEventListener("resize", onResize);
    }
  }, [])

  const Link1Props = useStore((state)=>state["Home"]["Link1"]);
const Link1IoProps = useIoStore((state)=>state["Home"]["Link1"]);
const Link1Cb = useLink1Cb()
const Link2Props = useStore((state)=>state["Home"]["Link2"]);
const Link2IoProps = useIoStore((state)=>state["Home"]["Link2"]);
const Link2Cb = useLink2Cb()
const ContactProps = useStore((state)=>state["Home"]["Contact"]);
const ContactIoProps = useIoStore((state)=>state["Home"]["Contact"]);
const ContactCb = useContactCb()
const Flex5Props = useStore((state)=>state["Home"]["Flex5"]);
const Flex5IoProps = useIoStore((state)=>state["Home"]["Flex5"]);
const Flex5Cb = useFlex5Cb()
const Flex7Props = useStore((state)=>state["Home"]["Flex7"]);
const Flex7IoProps = useIoStore((state)=>state["Home"]["Flex7"]);
const Flex7Cb = useFlex7Cb()
const Link8Props = useStore((state)=>state["Home"]["Link8"]);
const Link8IoProps = useIoStore((state)=>state["Home"]["Link8"]);
const Link8Cb = useLink8Cb()
const Link9Props = useStore((state)=>state["Home"]["Link9"]);
const Link9IoProps = useIoStore((state)=>state["Home"]["Link9"]);
const Link9Cb = useLink9Cb()
const Link10Props = useStore((state)=>state["Home"]["Link10"]);
const Link10IoProps = useIoStore((state)=>state["Home"]["Link10"]);
const Link10Cb = useLink10Cb()
const Menu_BarProps = useStore((state)=>state["Home"]["Menu_Bar"]);
const Menu_BarIoProps = useIoStore((state)=>state["Home"]["Menu_Bar"]);
const Menu_BarCb = useMenu_BarCb()
const TextBox7Props = useStore((state)=>state["Home"]["TextBox7"]);
const TextBox7IoProps = useIoStore((state)=>state["Home"]["TextBox7"]);
const TextBox7Cb = useTextBox7Cb()
const Dropdown2Props = useStore((state)=>state["Home"]["Dropdown2"]);
const Dropdown2IoProps = useIoStore((state)=>state["Home"]["Dropdown2"]);
const Dropdown2Cb = useDropdown2Cb()
const TextBox8Props = useStore((state)=>state["Home"]["TextBox8"]);
const TextBox8IoProps = useIoStore((state)=>state["Home"]["TextBox8"]);
const TextBox8Cb = useTextBox8Cb()
const TextBox9Props = useStore((state)=>state["Home"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["Home"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()
const Intro_BoxProps = useStore((state)=>state["Home"]["Intro_Box"]);
const Intro_BoxIoProps = useIoStore((state)=>state["Home"]["Intro_Box"]);
const Intro_BoxCb = useIntro_BoxCb()
const TextBox10Props = useStore((state)=>state["Home"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["Home"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const TextBox11Props = useStore((state)=>state["Home"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["Home"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const TextBox12Props = useStore((state)=>state["Home"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["Home"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const TextBox13Props = useStore((state)=>state["Home"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["Home"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const TextBox14Props = useStore((state)=>state["Home"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["Home"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const past_projectsProps = useStore((state)=>state["Home"]["past_projects"]);
const past_projectsIoProps = useIoStore((state)=>state["Home"]["past_projects"]);
const past_projectsCb = usepast_projectsCb()
const Carousel1Props = useStore((state)=>state["Home"]["Carousel1"]);
const Carousel1IoProps = useIoStore((state)=>state["Home"]["Carousel1"]);
const Carousel1Cb = useCarousel1Cb()
const Flex11Props = useStore((state)=>state["Home"]["Flex11"]);
const Flex11IoProps = useIoStore((state)=>state["Home"]["Flex11"]);
const Flex11Cb = useFlex11Cb()
const TextBox15Props = useStore((state)=>state["Home"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["Home"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const Card1Props = useStore((state)=>state["Home"]["Card1"]);
const Card1IoProps = useIoStore((state)=>state["Home"]["Card1"]);
const Card1Cb = useCard1Cb()
const Flex13Props = useStore((state)=>state["Home"]["Flex13"]);
const Flex13IoProps = useIoStore((state)=>state["Home"]["Flex13"]);
const Flex13Cb = useFlex13Cb()
const TextBox16Props = useStore((state)=>state["Home"]["TextBox16"]);
const TextBox16IoProps = useIoStore((state)=>state["Home"]["TextBox16"]);
const TextBox16Cb = useTextBox16Cb()
const TextBox17Props = useStore((state)=>state["Home"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["Home"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const TextBox18Props = useStore((state)=>state["Home"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["Home"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()
const Image2Props = useStore((state)=>state["Home"]["Image2"]);
const Image2IoProps = useIoStore((state)=>state["Home"]["Image2"]);
const Image2Cb = useImage2Cb()
const Div2Props = useStore((state)=>state["Home"]["Div2"]);
const Div2IoProps = useIoStore((state)=>state["Home"]["Div2"]);
const Div2Cb = useDiv2Cb()
const Link11Props = useStore((state)=>state["Home"]["Link11"]);
const Link11IoProps = useIoStore((state)=>state["Home"]["Link11"]);
const Link11Cb = useLink11Cb()
const Carousel3Props = useStore((state)=>state["Home"]["Carousel3"]);
const Carousel3IoProps = useIoStore((state)=>state["Home"]["Carousel3"]);
const Carousel3Cb = useCarousel3Cb()
const Carousel4Props = useStore((state)=>state["Home"]["Carousel4"]);
const Carousel4IoProps = useIoStore((state)=>state["Home"]["Carousel4"]);
const Carousel4Cb = useCarousel4Cb()
const TextBox19Props = useStore((state)=>state["Home"]["TextBox19"]);
const TextBox19IoProps = useIoStore((state)=>state["Home"]["TextBox19"]);
const TextBox19Cb = useTextBox19Cb()
const TextBox20Props = useStore((state)=>state["Home"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["Home"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const TextBox21Props = useStore((state)=>state["Home"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["Home"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const Link12Props = useStore((state)=>state["Home"]["Link12"]);
const Link12IoProps = useIoStore((state)=>state["Home"]["Link12"]);
const Link12Cb = useLink12Cb()
const Link13Props = useStore((state)=>state["Home"]["Link13"]);
const Link13IoProps = useIoStore((state)=>state["Home"]["Link13"]);
const Link13Cb = useLink13Cb()
const TextBox26Props = useStore((state)=>state["Home"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["Home"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const TextBox27Props = useStore((state)=>state["Home"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Home"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const TextBox28Props = useStore((state)=>state["Home"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["Home"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const Link14Props = useStore((state)=>state["Home"]["Link14"]);
const Link14IoProps = useIoStore((state)=>state["Home"]["Link14"]);
const Link14Cb = useLink14Cb()
const TextBox29Props = useStore((state)=>state["Home"]["TextBox29"]);
const TextBox29IoProps = useIoStore((state)=>state["Home"]["TextBox29"]);
const TextBox29Cb = useTextBox29Cb()
const TextBox30Props = useStore((state)=>state["Home"]["TextBox30"]);
const TextBox30IoProps = useIoStore((state)=>state["Home"]["TextBox30"]);
const TextBox30Cb = useTextBox30Cb()
const TextBox31Props = useStore((state)=>state["Home"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["Home"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const Link15Props = useStore((state)=>state["Home"]["Link15"]);
const Link15IoProps = useIoStore((state)=>state["Home"]["Link15"]);
const Link15Cb = useLink15Cb()
const TextBox32Props = useStore((state)=>state["Home"]["TextBox32"]);
const TextBox32IoProps = useIoStore((state)=>state["Home"]["TextBox32"]);
const TextBox32Cb = useTextBox32Cb()
const TextBox33Props = useStore((state)=>state["Home"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["Home"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const TextBox34Props = useStore((state)=>state["Home"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["Home"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const Carousel7Props = useStore((state)=>state["Home"]["Carousel7"]);
const Carousel7IoProps = useIoStore((state)=>state["Home"]["Carousel7"]);
const Carousel7Cb = useCarousel7Cb()
const Div7Props = useStore((state)=>state["Home"]["Div7"]);
const Div7IoProps = useIoStore((state)=>state["Home"]["Div7"]);
const Div7Cb = useDiv7Cb()
const Image7Props = useStore((state)=>state["Home"]["Image7"]);
const Image7IoProps = useIoStore((state)=>state["Home"]["Image7"]);
const Image7Cb = useImage7Cb()
const Flex19Props = useStore((state)=>state["Home"]["Flex19"]);
const Flex19IoProps = useIoStore((state)=>state["Home"]["Flex19"]);
const Flex19Cb = useFlex19Cb()
const Button2Props = useStore((state)=>state["Home"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["Home"]["Button2"]);
const Button2Cb = useButton2Cb()
const Link16Props = useStore((state)=>state["Home"]["Link16"]);
const Link16IoProps = useIoStore((state)=>state["Home"]["Link16"]);
const Link16Cb = useLink16Cb()
const TextBox35Props = useStore((state)=>state["Home"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["Home"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const TextBox36Props = useStore((state)=>state["Home"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Home"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const TextBox37Props = useStore((state)=>state["Home"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Home"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const Carousel8Props = useStore((state)=>state["Home"]["Carousel8"]);
const Carousel8IoProps = useIoStore((state)=>state["Home"]["Carousel8"]);
const Carousel8Cb = useCarousel8Cb()
const Div8Props = useStore((state)=>state["Home"]["Div8"]);
const Div8IoProps = useIoStore((state)=>state["Home"]["Div8"]);
const Div8Cb = useDiv8Cb()
const Image8Props = useStore((state)=>state["Home"]["Image8"]);
const Image8IoProps = useIoStore((state)=>state["Home"]["Image8"]);
const Image8Cb = useImage8Cb()
const Flex20Props = useStore((state)=>state["Home"]["Flex20"]);
const Flex20IoProps = useIoStore((state)=>state["Home"]["Flex20"]);
const Flex20Cb = useFlex20Cb()

  return (<>
  <Flex {...Menu_BarProps} {...Menu_BarCb} {...Menu_BarIoProps}>
<TextBox {...TextBox7Props} {...TextBox7Cb} {...TextBox7IoProps}/>
<Link {...Link8Props} {...Link8Cb} {...Link8IoProps}/>
<Link {...Link9Props} {...Link9Cb} {...Link9IoProps}/>
<Flex {...Flex7Props} {...Flex7Cb} {...Flex7IoProps}>
<Dropdown {...Dropdown2Props} {...Dropdown2Cb} {...Dropdown2IoProps}/>
<Link {...Link10Props} {...Link10Cb} {...Link10IoProps}/>
</Flex>
</Flex>
<Flex {...Intro_BoxProps} {...Intro_BoxCb} {...Intro_BoxIoProps}>
<TextBox {...TextBox8Props} {...TextBox8Cb} {...TextBox8IoProps}/>
<TextBox {...TextBox9Props} {...TextBox9Cb} {...TextBox9IoProps}/>
<TextBox {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
<TextBox {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
<TextBox {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
<TextBox {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
<TextBox {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
</Flex>
<Flex {...past_projectsProps} {...past_projectsCb} {...past_projectsIoProps}>
<Carousel {...Carousel1Props} {...Carousel1Cb} {...Carousel1IoProps}/>
</Flex>
<Flex {...Flex11Props} {...Flex11Cb} {...Flex11IoProps}>
<TextBox {...TextBox15Props} {...TextBox15Cb} {...TextBox15IoProps}/>
</Flex>
<Flex {...Flex13Props} {...Flex13Cb} {...Flex13IoProps}>
<Flex {...Card1Props} {...Card1Cb} {...Card1IoProps}>
<Carousel {...Carousel4Props} {...Carousel4Cb} {...Carousel4IoProps}/>
<Div {...Div2Props} {...Div2Cb} {...Div2IoProps}>
<TextBox {...TextBox16Props} {...TextBox16Cb} {...TextBox16IoProps}/>
<TextBox {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
<TextBox {...TextBox18Props} {...TextBox18Cb} {...TextBox18IoProps}/>
<Link {...Link11Props} {...Link11Cb} {...Link11IoProps}/>
</Div>
<Image {...Image2Props} {...Image2Cb} {...Image2IoProps}/>
</Flex>
</Flex>
<Carousel {...Carousel3Props} {...Carousel3Cb} {...Carousel3IoProps}/>
<Flex {...Flex19Props} {...Flex19Cb} {...Flex19IoProps}>
<Carousel {...Carousel7Props} {...Carousel7Cb} {...Carousel7IoProps}/>
<Div {...Div7Props} {...Div7Cb} {...Div7IoProps}>
<TextBox {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
<TextBox {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
<TextBox {...TextBox32Props} {...TextBox32Cb} {...TextBox32IoProps}/>
<Link {...Link15Props} {...Link15Cb} {...Link15IoProps}/>
</Div>
<Image {...Image7Props} {...Image7Cb} {...Image7IoProps}/>
</Flex>
<Flex {...Flex20Props} {...Flex20Cb} {...Flex20IoProps}>
<Carousel {...Carousel8Props} {...Carousel8Cb} {...Carousel8IoProps}/>
<Div {...Div8Props} {...Div8Cb} {...Div8IoProps}>
<TextBox {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
<TextBox {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
<TextBox {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
<Link {...Link16Props} {...Link16Cb} {...Link16IoProps}/>
</Div>
<Image {...Image8Props} {...Image8Cb} {...Image8IoProps}/>
</Flex>
<Button {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
  </>);
}
