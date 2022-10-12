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
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useLink1Cb, useLink2Cb, useContactCb, useFlex5Cb, useFlex7Cb, useLink8Cb, useLink9Cb, useLink10Cb, useMenu_BarCb, useTextBox7Cb, useDropdown2Cb, useTextBox8Cb, useTextBox9Cb, useIntro_BoxCb, useTextBox10Cb, useTextBox11Cb, useTextBox12Cb, useTextBox13Cb, useTextBox14Cb, usepast_projectsCb, useCarousel1Cb, useFlex11Cb, useTextBox15Cb, useTextBox16Cb, useTextBox17Cb, useTextBox18Cb, useLink11Cb, useCarousel3Cb, useTextBox19Cb, useTextBox20Cb, useTextBox21Cb, useLink12Cb, useLink13Cb, useTextBox26Cb, useTextBox27Cb, useTextBox28Cb, useLink14Cb, useTextBox29Cb, useTextBox30Cb, useTextBox31Cb, useLink15Cb, useTextBox32Cb, useTextBox33Cb, useTextBox34Cb, useLink16Cb, useTextBox35Cb, useTextBox36Cb, useTextBox37Cb, useLink17Cb, useTextBox38Cb, useTextBox39Cb, useTextBox40Cb, useLink18Cb, useTextBox41Cb, useTextBox42Cb, useTextBox43Cb, useLink19Cb, useTextBox44Cb, useTextBox45Cb, useTextBox46Cb, useCarousel11Cb, useDiv11Cb, useImage11Cb, useLink20Cb, useTextBox47Cb, useTextBox48Cb, useTextBox49Cb, useTextBox50Cb, useTextBox51Cb, useTextBox52Cb, useLink21Cb, useImage13Cb, useDiv13Cb, useCarousel13Cb, useFlex25Cb, useCarousel14Cb, useFlex26Cb, useFlex27Cb, useTextBox56Cb, useTextBox57Cb, useTextBox58Cb, useLink23Cb, useCard_ContainerCb, useTextBox59Cb, useTextBox60Cb, useTextBox61Cb, useLink24Cb, useImage16Cb, useDiv16Cb, useCarousel16Cb, useFlex30Cb, useTextBox62Cb, useTextBox63Cb, useTextBox64Cb, useLink25Cb, useImage17Cb, useDiv17Cb, useCarousel17Cb, useFlex31Cb, useTextBox65Cb, useTextBox66Cb, useTextBox67Cb, useLink26Cb, useTextBox68Cb, useTextBox69Cb, useTextBox70Cb, useLink27Cb, useImage19Cb, useDiv19Cb, useCarousel19Cb, useFlex33Cb, useFlex34Cb, useTextBox71Cb, useFlex35Cb, useTextBox74Cb, useTextBox75Cb, useFlex37Cb, useFlex38Cb, useFlex39Cb, useImage22Cb, useLink28Cb, useFlex40Cb, useTextBox76Cb, useFlex41Cb, useTextBox77Cb, useLink29Cb, useImage48Cb, useTextBox146Cb, useTextBox147Cb, useTextBox148Cb, useImage49Cb, useTextBox149Cb, useTextBox150Cb, useTextBox151Cb, useImage50Cb, useTextBox152Cb, useTextBox153Cb, useTextBox154Cb, useImage51Cb, useTextBox155Cb, useTextBox156Cb, useTextBox157Cb, useImage52Cb, useTextBox158Cb, useTextBox159Cb, useTextBox160Cb, useImage53Cb, useTextBox161Cb, useTextBox162Cb, useTextBox163Cb, useFlex74Cb, useFlex75Cb, useFlex76Cb, useFlex77Cb, useFlex78Cb, useFlex79Cb, useFlex80Cb, useFlex81Cb, useFlex82Cb, useFlex93Cb, useTextBox176Cb, useTextBox177Cb, useTextBox178Cb, useTextBox179Cb, useFlex94Cb, useImage57Cb, useImage58Cb, useFlex95Cb, useTextBox180Cb, useTextBox181Cb, useTextBox182Cb, useFlex96Cb, useFlex97Cb, useFlex98Cb, useFlex99Cb, useTextBox187Cb, useTextBox188Cb, useTextBox189Cb, useTextBox190Cb, useImage60Cb, useFlex102Cb, useFlex103Cb, useTextBox191Cb } from "../page-cbs/Home";

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
const TextBox16Props = useStore((state)=>state["Home"]["TextBox16"]);
const TextBox16IoProps = useIoStore((state)=>state["Home"]["TextBox16"]);
const TextBox16Cb = useTextBox16Cb()
const TextBox17Props = useStore((state)=>state["Home"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["Home"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const TextBox18Props = useStore((state)=>state["Home"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["Home"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()
const Link11Props = useStore((state)=>state["Home"]["Link11"]);
const Link11IoProps = useIoStore((state)=>state["Home"]["Link11"]);
const Link11Cb = useLink11Cb()
const Carousel3Props = useStore((state)=>state["Home"]["Carousel3"]);
const Carousel3IoProps = useIoStore((state)=>state["Home"]["Carousel3"]);
const Carousel3Cb = useCarousel3Cb()
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
const Link17Props = useStore((state)=>state["Home"]["Link17"]);
const Link17IoProps = useIoStore((state)=>state["Home"]["Link17"]);
const Link17Cb = useLink17Cb()
const TextBox38Props = useStore((state)=>state["Home"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["Home"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const TextBox39Props = useStore((state)=>state["Home"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["Home"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const TextBox40Props = useStore((state)=>state["Home"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["Home"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const Link18Props = useStore((state)=>state["Home"]["Link18"]);
const Link18IoProps = useIoStore((state)=>state["Home"]["Link18"]);
const Link18Cb = useLink18Cb()
const TextBox41Props = useStore((state)=>state["Home"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["Home"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const TextBox42Props = useStore((state)=>state["Home"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["Home"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const TextBox43Props = useStore((state)=>state["Home"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["Home"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const Link19Props = useStore((state)=>state["Home"]["Link19"]);
const Link19IoProps = useIoStore((state)=>state["Home"]["Link19"]);
const Link19Cb = useLink19Cb()
const TextBox44Props = useStore((state)=>state["Home"]["TextBox44"]);
const TextBox44IoProps = useIoStore((state)=>state["Home"]["TextBox44"]);
const TextBox44Cb = useTextBox44Cb()
const TextBox45Props = useStore((state)=>state["Home"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["Home"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()
const TextBox46Props = useStore((state)=>state["Home"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["Home"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()
const Carousel11Props = useStore((state)=>state["Home"]["Carousel11"]);
const Carousel11IoProps = useIoStore((state)=>state["Home"]["Carousel11"]);
const Carousel11Cb = useCarousel11Cb()
const Div11Props = useStore((state)=>state["Home"]["Div11"]);
const Div11IoProps = useIoStore((state)=>state["Home"]["Div11"]);
const Div11Cb = useDiv11Cb()
const Image11Props = useStore((state)=>state["Home"]["Image11"]);
const Image11IoProps = useIoStore((state)=>state["Home"]["Image11"]);
const Image11Cb = useImage11Cb()
const Link20Props = useStore((state)=>state["Home"]["Link20"]);
const Link20IoProps = useIoStore((state)=>state["Home"]["Link20"]);
const Link20Cb = useLink20Cb()
const TextBox47Props = useStore((state)=>state["Home"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["Home"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const TextBox48Props = useStore((state)=>state["Home"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["Home"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const TextBox49Props = useStore((state)=>state["Home"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["Home"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const TextBox50Props = useStore((state)=>state["Home"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["Home"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const TextBox51Props = useStore((state)=>state["Home"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["Home"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const TextBox52Props = useStore((state)=>state["Home"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["Home"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const Link21Props = useStore((state)=>state["Home"]["Link21"]);
const Link21IoProps = useIoStore((state)=>state["Home"]["Link21"]);
const Link21Cb = useLink21Cb()
const Image13Props = useStore((state)=>state["Home"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["Home"]["Image13"]);
const Image13Cb = useImage13Cb()
const Div13Props = useStore((state)=>state["Home"]["Div13"]);
const Div13IoProps = useIoStore((state)=>state["Home"]["Div13"]);
const Div13Cb = useDiv13Cb()
const Carousel13Props = useStore((state)=>state["Home"]["Carousel13"]);
const Carousel13IoProps = useIoStore((state)=>state["Home"]["Carousel13"]);
const Carousel13Cb = useCarousel13Cb()
const Flex25Props = useStore((state)=>state["Home"]["Flex25"]);
const Flex25IoProps = useIoStore((state)=>state["Home"]["Flex25"]);
const Flex25Cb = useFlex25Cb()
const Carousel14Props = useStore((state)=>state["Home"]["Carousel14"]);
const Carousel14IoProps = useIoStore((state)=>state["Home"]["Carousel14"]);
const Carousel14Cb = useCarousel14Cb()
const Flex26Props = useStore((state)=>state["Home"]["Flex26"]);
const Flex26IoProps = useIoStore((state)=>state["Home"]["Flex26"]);
const Flex26Cb = useFlex26Cb()
const Flex27Props = useStore((state)=>state["Home"]["Flex27"]);
const Flex27IoProps = useIoStore((state)=>state["Home"]["Flex27"]);
const Flex27Cb = useFlex27Cb()
const TextBox56Props = useStore((state)=>state["Home"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Home"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const TextBox57Props = useStore((state)=>state["Home"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["Home"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const TextBox58Props = useStore((state)=>state["Home"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["Home"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const Link23Props = useStore((state)=>state["Home"]["Link23"]);
const Link23IoProps = useIoStore((state)=>state["Home"]["Link23"]);
const Link23Cb = useLink23Cb()
const Card_ContainerProps = useStore((state)=>state["Home"]["Card_Container"]);
const Card_ContainerIoProps = useIoStore((state)=>state["Home"]["Card_Container"]);
const Card_ContainerCb = useCard_ContainerCb()
const TextBox59Props = useStore((state)=>state["Home"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["Home"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const TextBox60Props = useStore((state)=>state["Home"]["TextBox60"]);
const TextBox60IoProps = useIoStore((state)=>state["Home"]["TextBox60"]);
const TextBox60Cb = useTextBox60Cb()
const TextBox61Props = useStore((state)=>state["Home"]["TextBox61"]);
const TextBox61IoProps = useIoStore((state)=>state["Home"]["TextBox61"]);
const TextBox61Cb = useTextBox61Cb()
const Link24Props = useStore((state)=>state["Home"]["Link24"]);
const Link24IoProps = useIoStore((state)=>state["Home"]["Link24"]);
const Link24Cb = useLink24Cb()
const Image16Props = useStore((state)=>state["Home"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Home"]["Image16"]);
const Image16Cb = useImage16Cb()
const Div16Props = useStore((state)=>state["Home"]["Div16"]);
const Div16IoProps = useIoStore((state)=>state["Home"]["Div16"]);
const Div16Cb = useDiv16Cb()
const Carousel16Props = useStore((state)=>state["Home"]["Carousel16"]);
const Carousel16IoProps = useIoStore((state)=>state["Home"]["Carousel16"]);
const Carousel16Cb = useCarousel16Cb()
const Flex30Props = useStore((state)=>state["Home"]["Flex30"]);
const Flex30IoProps = useIoStore((state)=>state["Home"]["Flex30"]);
const Flex30Cb = useFlex30Cb()
const TextBox62Props = useStore((state)=>state["Home"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["Home"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const TextBox63Props = useStore((state)=>state["Home"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["Home"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()
const TextBox64Props = useStore((state)=>state["Home"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["Home"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const Link25Props = useStore((state)=>state["Home"]["Link25"]);
const Link25IoProps = useIoStore((state)=>state["Home"]["Link25"]);
const Link25Cb = useLink25Cb()
const Image17Props = useStore((state)=>state["Home"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["Home"]["Image17"]);
const Image17Cb = useImage17Cb()
const Div17Props = useStore((state)=>state["Home"]["Div17"]);
const Div17IoProps = useIoStore((state)=>state["Home"]["Div17"]);
const Div17Cb = useDiv17Cb()
const Carousel17Props = useStore((state)=>state["Home"]["Carousel17"]);
const Carousel17IoProps = useIoStore((state)=>state["Home"]["Carousel17"]);
const Carousel17Cb = useCarousel17Cb()
const Flex31Props = useStore((state)=>state["Home"]["Flex31"]);
const Flex31IoProps = useIoStore((state)=>state["Home"]["Flex31"]);
const Flex31Cb = useFlex31Cb()
const TextBox65Props = useStore((state)=>state["Home"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["Home"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()
const TextBox66Props = useStore((state)=>state["Home"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["Home"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()
const TextBox67Props = useStore((state)=>state["Home"]["TextBox67"]);
const TextBox67IoProps = useIoStore((state)=>state["Home"]["TextBox67"]);
const TextBox67Cb = useTextBox67Cb()
const Link26Props = useStore((state)=>state["Home"]["Link26"]);
const Link26IoProps = useIoStore((state)=>state["Home"]["Link26"]);
const Link26Cb = useLink26Cb()
const TextBox68Props = useStore((state)=>state["Home"]["TextBox68"]);
const TextBox68IoProps = useIoStore((state)=>state["Home"]["TextBox68"]);
const TextBox68Cb = useTextBox68Cb()
const TextBox69Props = useStore((state)=>state["Home"]["TextBox69"]);
const TextBox69IoProps = useIoStore((state)=>state["Home"]["TextBox69"]);
const TextBox69Cb = useTextBox69Cb()
const TextBox70Props = useStore((state)=>state["Home"]["TextBox70"]);
const TextBox70IoProps = useIoStore((state)=>state["Home"]["TextBox70"]);
const TextBox70Cb = useTextBox70Cb()
const Link27Props = useStore((state)=>state["Home"]["Link27"]);
const Link27IoProps = useIoStore((state)=>state["Home"]["Link27"]);
const Link27Cb = useLink27Cb()
const Image19Props = useStore((state)=>state["Home"]["Image19"]);
const Image19IoProps = useIoStore((state)=>state["Home"]["Image19"]);
const Image19Cb = useImage19Cb()
const Div19Props = useStore((state)=>state["Home"]["Div19"]);
const Div19IoProps = useIoStore((state)=>state["Home"]["Div19"]);
const Div19Cb = useDiv19Cb()
const Carousel19Props = useStore((state)=>state["Home"]["Carousel19"]);
const Carousel19IoProps = useIoStore((state)=>state["Home"]["Carousel19"]);
const Carousel19Cb = useCarousel19Cb()
const Flex33Props = useStore((state)=>state["Home"]["Flex33"]);
const Flex33IoProps = useIoStore((state)=>state["Home"]["Flex33"]);
const Flex33Cb = useFlex33Cb()
const Flex34Props = useStore((state)=>state["Home"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["Home"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
const TextBox71Props = useStore((state)=>state["Home"]["TextBox71"]);
const TextBox71IoProps = useIoStore((state)=>state["Home"]["TextBox71"]);
const TextBox71Cb = useTextBox71Cb()
const Flex35Props = useStore((state)=>state["Home"]["Flex35"]);
const Flex35IoProps = useIoStore((state)=>state["Home"]["Flex35"]);
const Flex35Cb = useFlex35Cb()
const TextBox74Props = useStore((state)=>state["Home"]["TextBox74"]);
const TextBox74IoProps = useIoStore((state)=>state["Home"]["TextBox74"]);
const TextBox74Cb = useTextBox74Cb()
const TextBox75Props = useStore((state)=>state["Home"]["TextBox75"]);
const TextBox75IoProps = useIoStore((state)=>state["Home"]["TextBox75"]);
const TextBox75Cb = useTextBox75Cb()
const Flex37Props = useStore((state)=>state["Home"]["Flex37"]);
const Flex37IoProps = useIoStore((state)=>state["Home"]["Flex37"]);
const Flex37Cb = useFlex37Cb()
const Flex38Props = useStore((state)=>state["Home"]["Flex38"]);
const Flex38IoProps = useIoStore((state)=>state["Home"]["Flex38"]);
const Flex38Cb = useFlex38Cb()
const Flex39Props = useStore((state)=>state["Home"]["Flex39"]);
const Flex39IoProps = useIoStore((state)=>state["Home"]["Flex39"]);
const Flex39Cb = useFlex39Cb()
const Image22Props = useStore((state)=>state["Home"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["Home"]["Image22"]);
const Image22Cb = useImage22Cb()
const Link28Props = useStore((state)=>state["Home"]["Link28"]);
const Link28IoProps = useIoStore((state)=>state["Home"]["Link28"]);
const Link28Cb = useLink28Cb()
const Flex40Props = useStore((state)=>state["Home"]["Flex40"]);
const Flex40IoProps = useIoStore((state)=>state["Home"]["Flex40"]);
const Flex40Cb = useFlex40Cb()
const TextBox76Props = useStore((state)=>state["Home"]["TextBox76"]);
const TextBox76IoProps = useIoStore((state)=>state["Home"]["TextBox76"]);
const TextBox76Cb = useTextBox76Cb()
const Flex41Props = useStore((state)=>state["Home"]["Flex41"]);
const Flex41IoProps = useIoStore((state)=>state["Home"]["Flex41"]);
const Flex41Cb = useFlex41Cb()
const TextBox77Props = useStore((state)=>state["Home"]["TextBox77"]);
const TextBox77IoProps = useIoStore((state)=>state["Home"]["TextBox77"]);
const TextBox77Cb = useTextBox77Cb()
const Link29Props = useStore((state)=>state["Home"]["Link29"]);
const Link29IoProps = useIoStore((state)=>state["Home"]["Link29"]);
const Link29Cb = useLink29Cb()
const Image48Props = useStore((state)=>state["Home"]["Image48"]);
const Image48IoProps = useIoStore((state)=>state["Home"]["Image48"]);
const Image48Cb = useImage48Cb()
const TextBox146Props = useStore((state)=>state["Home"]["TextBox146"]);
const TextBox146IoProps = useIoStore((state)=>state["Home"]["TextBox146"]);
const TextBox146Cb = useTextBox146Cb()
const TextBox147Props = useStore((state)=>state["Home"]["TextBox147"]);
const TextBox147IoProps = useIoStore((state)=>state["Home"]["TextBox147"]);
const TextBox147Cb = useTextBox147Cb()
const TextBox148Props = useStore((state)=>state["Home"]["TextBox148"]);
const TextBox148IoProps = useIoStore((state)=>state["Home"]["TextBox148"]);
const TextBox148Cb = useTextBox148Cb()
const Image49Props = useStore((state)=>state["Home"]["Image49"]);
const Image49IoProps = useIoStore((state)=>state["Home"]["Image49"]);
const Image49Cb = useImage49Cb()
const TextBox149Props = useStore((state)=>state["Home"]["TextBox149"]);
const TextBox149IoProps = useIoStore((state)=>state["Home"]["TextBox149"]);
const TextBox149Cb = useTextBox149Cb()
const TextBox150Props = useStore((state)=>state["Home"]["TextBox150"]);
const TextBox150IoProps = useIoStore((state)=>state["Home"]["TextBox150"]);
const TextBox150Cb = useTextBox150Cb()
const TextBox151Props = useStore((state)=>state["Home"]["TextBox151"]);
const TextBox151IoProps = useIoStore((state)=>state["Home"]["TextBox151"]);
const TextBox151Cb = useTextBox151Cb()
const Image50Props = useStore((state)=>state["Home"]["Image50"]);
const Image50IoProps = useIoStore((state)=>state["Home"]["Image50"]);
const Image50Cb = useImage50Cb()
const TextBox152Props = useStore((state)=>state["Home"]["TextBox152"]);
const TextBox152IoProps = useIoStore((state)=>state["Home"]["TextBox152"]);
const TextBox152Cb = useTextBox152Cb()
const TextBox153Props = useStore((state)=>state["Home"]["TextBox153"]);
const TextBox153IoProps = useIoStore((state)=>state["Home"]["TextBox153"]);
const TextBox153Cb = useTextBox153Cb()
const TextBox154Props = useStore((state)=>state["Home"]["TextBox154"]);
const TextBox154IoProps = useIoStore((state)=>state["Home"]["TextBox154"]);
const TextBox154Cb = useTextBox154Cb()
const Image51Props = useStore((state)=>state["Home"]["Image51"]);
const Image51IoProps = useIoStore((state)=>state["Home"]["Image51"]);
const Image51Cb = useImage51Cb()
const TextBox155Props = useStore((state)=>state["Home"]["TextBox155"]);
const TextBox155IoProps = useIoStore((state)=>state["Home"]["TextBox155"]);
const TextBox155Cb = useTextBox155Cb()
const TextBox156Props = useStore((state)=>state["Home"]["TextBox156"]);
const TextBox156IoProps = useIoStore((state)=>state["Home"]["TextBox156"]);
const TextBox156Cb = useTextBox156Cb()
const TextBox157Props = useStore((state)=>state["Home"]["TextBox157"]);
const TextBox157IoProps = useIoStore((state)=>state["Home"]["TextBox157"]);
const TextBox157Cb = useTextBox157Cb()
const Image52Props = useStore((state)=>state["Home"]["Image52"]);
const Image52IoProps = useIoStore((state)=>state["Home"]["Image52"]);
const Image52Cb = useImage52Cb()
const TextBox158Props = useStore((state)=>state["Home"]["TextBox158"]);
const TextBox158IoProps = useIoStore((state)=>state["Home"]["TextBox158"]);
const TextBox158Cb = useTextBox158Cb()
const TextBox159Props = useStore((state)=>state["Home"]["TextBox159"]);
const TextBox159IoProps = useIoStore((state)=>state["Home"]["TextBox159"]);
const TextBox159Cb = useTextBox159Cb()
const TextBox160Props = useStore((state)=>state["Home"]["TextBox160"]);
const TextBox160IoProps = useIoStore((state)=>state["Home"]["TextBox160"]);
const TextBox160Cb = useTextBox160Cb()
const Image53Props = useStore((state)=>state["Home"]["Image53"]);
const Image53IoProps = useIoStore((state)=>state["Home"]["Image53"]);
const Image53Cb = useImage53Cb()
const TextBox161Props = useStore((state)=>state["Home"]["TextBox161"]);
const TextBox161IoProps = useIoStore((state)=>state["Home"]["TextBox161"]);
const TextBox161Cb = useTextBox161Cb()
const TextBox162Props = useStore((state)=>state["Home"]["TextBox162"]);
const TextBox162IoProps = useIoStore((state)=>state["Home"]["TextBox162"]);
const TextBox162Cb = useTextBox162Cb()
const TextBox163Props = useStore((state)=>state["Home"]["TextBox163"]);
const TextBox163IoProps = useIoStore((state)=>state["Home"]["TextBox163"]);
const TextBox163Cb = useTextBox163Cb()
const Flex74Props = useStore((state)=>state["Home"]["Flex74"]);
const Flex74IoProps = useIoStore((state)=>state["Home"]["Flex74"]);
const Flex74Cb = useFlex74Cb()
const Flex75Props = useStore((state)=>state["Home"]["Flex75"]);
const Flex75IoProps = useIoStore((state)=>state["Home"]["Flex75"]);
const Flex75Cb = useFlex75Cb()
const Flex76Props = useStore((state)=>state["Home"]["Flex76"]);
const Flex76IoProps = useIoStore((state)=>state["Home"]["Flex76"]);
const Flex76Cb = useFlex76Cb()
const Flex77Props = useStore((state)=>state["Home"]["Flex77"]);
const Flex77IoProps = useIoStore((state)=>state["Home"]["Flex77"]);
const Flex77Cb = useFlex77Cb()
const Flex78Props = useStore((state)=>state["Home"]["Flex78"]);
const Flex78IoProps = useIoStore((state)=>state["Home"]["Flex78"]);
const Flex78Cb = useFlex78Cb()
const Flex79Props = useStore((state)=>state["Home"]["Flex79"]);
const Flex79IoProps = useIoStore((state)=>state["Home"]["Flex79"]);
const Flex79Cb = useFlex79Cb()
const Flex80Props = useStore((state)=>state["Home"]["Flex80"]);
const Flex80IoProps = useIoStore((state)=>state["Home"]["Flex80"]);
const Flex80Cb = useFlex80Cb()
const Flex81Props = useStore((state)=>state["Home"]["Flex81"]);
const Flex81IoProps = useIoStore((state)=>state["Home"]["Flex81"]);
const Flex81Cb = useFlex81Cb()
const Flex82Props = useStore((state)=>state["Home"]["Flex82"]);
const Flex82IoProps = useIoStore((state)=>state["Home"]["Flex82"]);
const Flex82Cb = useFlex82Cb()
const Flex93Props = useStore((state)=>state["Home"]["Flex93"]);
const Flex93IoProps = useIoStore((state)=>state["Home"]["Flex93"]);
const Flex93Cb = useFlex93Cb()
const TextBox176Props = useStore((state)=>state["Home"]["TextBox176"]);
const TextBox176IoProps = useIoStore((state)=>state["Home"]["TextBox176"]);
const TextBox176Cb = useTextBox176Cb()
const TextBox177Props = useStore((state)=>state["Home"]["TextBox177"]);
const TextBox177IoProps = useIoStore((state)=>state["Home"]["TextBox177"]);
const TextBox177Cb = useTextBox177Cb()
const TextBox178Props = useStore((state)=>state["Home"]["TextBox178"]);
const TextBox178IoProps = useIoStore((state)=>state["Home"]["TextBox178"]);
const TextBox178Cb = useTextBox178Cb()
const TextBox179Props = useStore((state)=>state["Home"]["TextBox179"]);
const TextBox179IoProps = useIoStore((state)=>state["Home"]["TextBox179"]);
const TextBox179Cb = useTextBox179Cb()
const Flex94Props = useStore((state)=>state["Home"]["Flex94"]);
const Flex94IoProps = useIoStore((state)=>state["Home"]["Flex94"]);
const Flex94Cb = useFlex94Cb()
const Image57Props = useStore((state)=>state["Home"]["Image57"]);
const Image57IoProps = useIoStore((state)=>state["Home"]["Image57"]);
const Image57Cb = useImage57Cb()
const Image58Props = useStore((state)=>state["Home"]["Image58"]);
const Image58IoProps = useIoStore((state)=>state["Home"]["Image58"]);
const Image58Cb = useImage58Cb()
const Flex95Props = useStore((state)=>state["Home"]["Flex95"]);
const Flex95IoProps = useIoStore((state)=>state["Home"]["Flex95"]);
const Flex95Cb = useFlex95Cb()
const TextBox180Props = useStore((state)=>state["Home"]["TextBox180"]);
const TextBox180IoProps = useIoStore((state)=>state["Home"]["TextBox180"]);
const TextBox180Cb = useTextBox180Cb()
const TextBox181Props = useStore((state)=>state["Home"]["TextBox181"]);
const TextBox181IoProps = useIoStore((state)=>state["Home"]["TextBox181"]);
const TextBox181Cb = useTextBox181Cb()
const TextBox182Props = useStore((state)=>state["Home"]["TextBox182"]);
const TextBox182IoProps = useIoStore((state)=>state["Home"]["TextBox182"]);
const TextBox182Cb = useTextBox182Cb()
const Flex96Props = useStore((state)=>state["Home"]["Flex96"]);
const Flex96IoProps = useIoStore((state)=>state["Home"]["Flex96"]);
const Flex96Cb = useFlex96Cb()
const Flex97Props = useStore((state)=>state["Home"]["Flex97"]);
const Flex97IoProps = useIoStore((state)=>state["Home"]["Flex97"]);
const Flex97Cb = useFlex97Cb()
const Flex98Props = useStore((state)=>state["Home"]["Flex98"]);
const Flex98IoProps = useIoStore((state)=>state["Home"]["Flex98"]);
const Flex98Cb = useFlex98Cb()
const Flex99Props = useStore((state)=>state["Home"]["Flex99"]);
const Flex99IoProps = useIoStore((state)=>state["Home"]["Flex99"]);
const Flex99Cb = useFlex99Cb()
const TextBox187Props = useStore((state)=>state["Home"]["TextBox187"]);
const TextBox187IoProps = useIoStore((state)=>state["Home"]["TextBox187"]);
const TextBox187Cb = useTextBox187Cb()
const TextBox188Props = useStore((state)=>state["Home"]["TextBox188"]);
const TextBox188IoProps = useIoStore((state)=>state["Home"]["TextBox188"]);
const TextBox188Cb = useTextBox188Cb()
const TextBox189Props = useStore((state)=>state["Home"]["TextBox189"]);
const TextBox189IoProps = useIoStore((state)=>state["Home"]["TextBox189"]);
const TextBox189Cb = useTextBox189Cb()
const TextBox190Props = useStore((state)=>state["Home"]["TextBox190"]);
const TextBox190IoProps = useIoStore((state)=>state["Home"]["TextBox190"]);
const TextBox190Cb = useTextBox190Cb()
const Image60Props = useStore((state)=>state["Home"]["Image60"]);
const Image60IoProps = useIoStore((state)=>state["Home"]["Image60"]);
const Image60Cb = useImage60Cb()
const Flex102Props = useStore((state)=>state["Home"]["Flex102"]);
const Flex102IoProps = useIoStore((state)=>state["Home"]["Flex102"]);
const Flex102Cb = useFlex102Cb()
const Flex103Props = useStore((state)=>state["Home"]["Flex103"]);
const Flex103IoProps = useIoStore((state)=>state["Home"]["Flex103"]);
const Flex103Cb = useFlex103Cb()
const TextBox191Props = useStore((state)=>state["Home"]["TextBox191"]);
const TextBox191IoProps = useIoStore((state)=>state["Home"]["TextBox191"]);
const TextBox191Cb = useTextBox191Cb()

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
<Carousel {...Carousel3Props} {...Carousel3Cb} {...Carousel3IoProps}/>
<Flex {...Flex27Props} {...Flex27Cb} {...Flex27IoProps}>
<Flex {...Flex26Props} {...Flex26Cb} {...Flex26IoProps}>
<Carousel {...Carousel14Props} {...Carousel14Cb} {...Carousel14IoProps}/>
</Flex>
</Flex>
<Flex {...Card_ContainerProps} {...Card_ContainerCb} {...Card_ContainerIoProps}>
<Flex {...Flex31Props} {...Flex31Cb} {...Flex31IoProps}>
<Carousel {...Carousel17Props} {...Carousel17Cb} {...Carousel17IoProps}/>
<Div {...Div17Props} {...Div17Cb} {...Div17IoProps}>
<TextBox {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
<TextBox {...TextBox63Props} {...TextBox63Cb} {...TextBox63IoProps}/>
<TextBox {...TextBox64Props} {...TextBox64Cb} {...TextBox64IoProps}/>
<Link {...Link25Props} {...Link25Cb} {...Link25IoProps}/>
</Div>
<Image {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
</Flex>
<Flex {...Flex33Props} {...Flex33Cb} {...Flex33IoProps}>
<Carousel {...Carousel19Props} {...Carousel19Cb} {...Carousel19IoProps}/>
<Div {...Div19Props} {...Div19Cb} {...Div19IoProps}>
<TextBox {...TextBox68Props} {...TextBox68Cb} {...TextBox68IoProps}/>
<TextBox {...TextBox69Props} {...TextBox69Cb} {...TextBox69IoProps}/>
<TextBox {...TextBox70Props} {...TextBox70Cb} {...TextBox70IoProps}/>
<Link {...Link27Props} {...Link27Cb} {...Link27IoProps}/>
</Div>
<Image {...Image19Props} {...Image19Cb} {...Image19IoProps}/>
</Flex>
<Flex {...Flex30Props} {...Flex30Cb} {...Flex30IoProps}>
<Carousel {...Carousel16Props} {...Carousel16Cb} {...Carousel16IoProps}/>
<Div {...Div16Props} {...Div16Cb} {...Div16IoProps}>
<TextBox {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
<TextBox {...TextBox60Props} {...TextBox60Cb} {...TextBox60IoProps}/>
<TextBox {...TextBox61Props} {...TextBox61Cb} {...TextBox61IoProps}/>
<Link {...Link24Props} {...Link24Cb} {...Link24IoProps}/>
</Div>
<Image {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
</Flex>
</Flex>
<Flex {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}>
<TextBox {...TextBox71Props} {...TextBox71Cb} {...TextBox71IoProps}/>
<Flex {...Flex35Props} {...Flex35Cb} {...Flex35IoProps}>
<Flex {...Flex37Props} {...Flex37Cb} {...Flex37IoProps}>
<Flex {...Flex38Props} {...Flex38Cb} {...Flex38IoProps}>
<Flex {...Flex39Props} {...Flex39Cb} {...Flex39IoProps}>
<TextBox {...TextBox74Props} {...TextBox74Cb} {...TextBox74IoProps}/>
<TextBox {...TextBox75Props} {...TextBox75Cb} {...TextBox75IoProps}/>
<Link {...Link28Props} {...Link28Cb} {...Link28IoProps}/>
</Flex>
<Image {...Image22Props} {...Image22Cb} {...Image22IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex {...Flex40Props} {...Flex40Cb} {...Flex40IoProps}>
<TextBox {...TextBox76Props} {...TextBox76Cb} {...TextBox76IoProps}/>
<Flex {...Flex41Props} {...Flex41Cb} {...Flex41IoProps}>
<TextBox {...TextBox77Props} {...TextBox77Cb} {...TextBox77IoProps}/>
<Link {...Link29Props} {...Link29Cb} {...Link29IoProps}/>
</Flex>
<Flex {...Flex82Props} {...Flex82Cb} {...Flex82IoProps}>
<Flex {...Flex81Props} {...Flex81Cb} {...Flex81IoProps}>
<Flex {...Flex77Props} {...Flex77Cb} {...Flex77IoProps}>
<Image {...Image51Props} {...Image51Cb} {...Image51IoProps}/>
<TextBox {...TextBox156Props} {...TextBox156Cb} {...TextBox156IoProps}/>
<TextBox {...TextBox155Props} {...TextBox155Cb} {...TextBox155IoProps}/>
<TextBox {...TextBox157Props} {...TextBox157Cb} {...TextBox157IoProps}/>
</Flex>
<Flex {...Flex78Props} {...Flex78Cb} {...Flex78IoProps}>
<Image {...Image52Props} {...Image52Cb} {...Image52IoProps}/>
<TextBox {...TextBox159Props} {...TextBox159Cb} {...TextBox159IoProps}/>
<TextBox {...TextBox158Props} {...TextBox158Cb} {...TextBox158IoProps}/>
<TextBox {...TextBox160Props} {...TextBox160Cb} {...TextBox160IoProps}/>
</Flex>
<Flex {...Flex79Props} {...Flex79Cb} {...Flex79IoProps}>
<Image {...Image53Props} {...Image53Cb} {...Image53IoProps}/>
<TextBox {...TextBox162Props} {...TextBox162Cb} {...TextBox162IoProps}/>
<TextBox {...TextBox161Props} {...TextBox161Cb} {...TextBox161IoProps}/>
<TextBox {...TextBox163Props} {...TextBox163Cb} {...TextBox163IoProps}/>
</Flex>
</Flex>
<Flex {...Flex80Props} {...Flex80Cb} {...Flex80IoProps}>
<Flex {...Flex74Props} {...Flex74Cb} {...Flex74IoProps}>
<Image {...Image48Props} {...Image48Cb} {...Image48IoProps}/>
<TextBox {...TextBox147Props} {...TextBox147Cb} {...TextBox147IoProps}/>
<TextBox {...TextBox146Props} {...TextBox146Cb} {...TextBox146IoProps}/>
<TextBox {...TextBox148Props} {...TextBox148Cb} {...TextBox148IoProps}/>
</Flex>
<Flex {...Flex75Props} {...Flex75Cb} {...Flex75IoProps}>
<Image {...Image49Props} {...Image49Cb} {...Image49IoProps}/>
<TextBox {...TextBox150Props} {...TextBox150Cb} {...TextBox150IoProps}/>
<TextBox {...TextBox149Props} {...TextBox149Cb} {...TextBox149IoProps}/>
<TextBox {...TextBox151Props} {...TextBox151Cb} {...TextBox151IoProps}/>
</Flex>
<Flex {...Flex76Props} {...Flex76Cb} {...Flex76IoProps}>
<Image {...Image50Props} {...Image50Cb} {...Image50IoProps}/>
<TextBox {...TextBox153Props} {...TextBox153Cb} {...TextBox153IoProps}/>
<TextBox {...TextBox152Props} {...TextBox152Cb} {...TextBox152IoProps}/>
<TextBox {...TextBox154Props} {...TextBox154Cb} {...TextBox154IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex {...Flex93Props} {...Flex93Cb} {...Flex93IoProps}>
<Flex {...Flex99Props} {...Flex99Cb} {...Flex99IoProps}>
<Flex {...Flex98Props} {...Flex98Cb} {...Flex98IoProps}>
<TextBox {...TextBox181Props} {...TextBox181Cb} {...TextBox181IoProps}/>
<TextBox {...TextBox180Props} {...TextBox180Cb} {...TextBox180IoProps}/>
</Flex>
<Flex {...Flex97Props} {...Flex97Cb} {...Flex97IoProps}>
<Flex {...Flex95Props} {...Flex95Cb} {...Flex95IoProps}>
<TextBox {...TextBox179Props} {...TextBox179Cb} {...TextBox179IoProps}/>
<TextBox {...TextBox178Props} {...TextBox178Cb} {...TextBox178IoProps}/>
</Flex>
<Image {...Image58Props} {...Image58Cb} {...Image58IoProps}/>
</Flex>
<TextBox {...TextBox182Props} {...TextBox182Cb} {...TextBox182IoProps}/>
<Flex {...Flex96Props} {...Flex96Cb} {...Flex96IoProps}>
<Flex {...Flex94Props} {...Flex94Cb} {...Flex94IoProps}>
<TextBox {...TextBox176Props} {...TextBox176Cb} {...TextBox176IoProps}/>
<TextBox {...TextBox177Props} {...TextBox177Cb} {...TextBox177IoProps}/>
</Flex>
<Image {...Image57Props} {...Image57Cb} {...Image57IoProps}/>
</Flex>
</Flex>
</Flex>
<TextBox {...TextBox191Props} {...TextBox191Cb} {...TextBox191IoProps}/>
<Flex {...Flex103Props} {...Flex103Cb} {...Flex103IoProps}>
<Flex {...Flex102Props} {...Flex102Cb} {...Flex102IoProps}>
<TextBox {...TextBox190Props} {...TextBox190Cb} {...TextBox190IoProps}/>
<TextBox {...TextBox189Props} {...TextBox189Cb} {...TextBox189IoProps}/>
<TextBox {...TextBox188Props} {...TextBox188Cb} {...TextBox188IoProps}/>
<TextBox {...TextBox187Props} {...TextBox187Cb} {...TextBox187IoProps}/>
</Flex>
<Image {...Image60Props} {...Image60Cb} {...Image60IoProps}/>
</Flex>
  </>);
}
