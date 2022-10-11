import { useLayoutEffect, useEffect } from "react";
import useStore, { setEffectivePropsForPage, updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { useImage25Cb, useTextBox82Cb, useTextBox83Cb, useImage27Cb, useTextBox86Cb, useTextBox87Cb, useImage28Cb, useTextBox88Cb, useTextBox89Cb, useImage30Cb, useTextBox92Cb, useTextBox93Cb, useImage31Cb, useTextBox94Cb, useTextBox95Cb, useImage32Cb, useTextBox96Cb, useTextBox97Cb, useTextBox98Cb, useTextBox99Cb, useTextBox100Cb, useTextBox101Cb, useTextBox102Cb, useTextBox103Cb, useImage33Cb, useTextBox104Cb, useTextBox105Cb, useTextBox106Cb, useImage34Cb, useTextBox107Cb, useTextBox108Cb, useTextBox109Cb, useImage35Cb, useTextBox110Cb, useTextBox111Cb, useTextBox112Cb, useImage36Cb, useTextBox113Cb, useTextBox114Cb, useTextBox115Cb, useImage37Cb, useTextBox116Cb, useTextBox117Cb, useTextBox118Cb, useImage38Cb, useFlex58Cb, useFlex59Cb, useFlex60Cb, useTextBox119Cb, useTextBox120Cb, useTextBox121Cb, useImage39Cb, useTextBox122Cb, useTextBox123Cb, useTextBox124Cb, useImage40Cb, useTextBox125Cb, useTextBox126Cb, useTextBox127Cb, useImage41Cb, useTextBox128Cb, useTextBox129Cb, useTextBox130Cb, useImage42Cb, useTextBox131Cb, useTextBox132Cb, useTextBox133Cb, useImage43Cb, useTextBox134Cb, useTextBox135Cb, useTextBox136Cb, useImage44Cb, useFlex66Cb, useFlex67Cb, useFlex68Cb, useTextBox137Cb, useTextBox138Cb, useTextBox139Cb, useImage45Cb, useTextBox140Cb, useTextBox141Cb, useTextBox142Cb, useImage46Cb, useTextBox143Cb, useTextBox144Cb, useTextBox145Cb, useImage47Cb, useFlex83Cb, useFlex84Cb, useTextBox164Cb, useTextBox165Cb, useFlex85Cb, useTextBox166Cb, useTextBox167Cb, useFlex86Cb, useImage54Cb, useFlex87Cb, useFlex88Cb, useFlex89Cb, useTextBox168Cb, useTextBox169Cb, useFlex90Cb, useImage55Cb, useTextBox170Cb, useTextBox171Cb, useTextBox172Cb, useTextBox173Cb, useImage56Cb, useFlex91Cb, useFlex92Cb, useTextBox174Cb } from "../page-cbs/components";

export default function Components() {
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
    setEffectivePropsForPage("components")
  }, [])

  useEffect(()=>{
    const onResize = ()=>{
      setEffectivePropsForPage("components")
    };
    window.addEventListener("resize", onResize);
    return ()=>{
      window.removeEventListener("resize", onResize);
    }
  }, [])

  const Image25Props = useStore((state)=>state["components"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["components"]["Image25"]);
const Image25Cb = useImage25Cb()
const TextBox82Props = useStore((state)=>state["components"]["TextBox82"]);
const TextBox82IoProps = useIoStore((state)=>state["components"]["TextBox82"]);
const TextBox82Cb = useTextBox82Cb()
const TextBox83Props = useStore((state)=>state["components"]["TextBox83"]);
const TextBox83IoProps = useIoStore((state)=>state["components"]["TextBox83"]);
const TextBox83Cb = useTextBox83Cb()
const Image27Props = useStore((state)=>state["components"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["components"]["Image27"]);
const Image27Cb = useImage27Cb()
const TextBox86Props = useStore((state)=>state["components"]["TextBox86"]);
const TextBox86IoProps = useIoStore((state)=>state["components"]["TextBox86"]);
const TextBox86Cb = useTextBox86Cb()
const TextBox87Props = useStore((state)=>state["components"]["TextBox87"]);
const TextBox87IoProps = useIoStore((state)=>state["components"]["TextBox87"]);
const TextBox87Cb = useTextBox87Cb()
const Image28Props = useStore((state)=>state["components"]["Image28"]);
const Image28IoProps = useIoStore((state)=>state["components"]["Image28"]);
const Image28Cb = useImage28Cb()
const TextBox88Props = useStore((state)=>state["components"]["TextBox88"]);
const TextBox88IoProps = useIoStore((state)=>state["components"]["TextBox88"]);
const TextBox88Cb = useTextBox88Cb()
const TextBox89Props = useStore((state)=>state["components"]["TextBox89"]);
const TextBox89IoProps = useIoStore((state)=>state["components"]["TextBox89"]);
const TextBox89Cb = useTextBox89Cb()
const Image30Props = useStore((state)=>state["components"]["Image30"]);
const Image30IoProps = useIoStore((state)=>state["components"]["Image30"]);
const Image30Cb = useImage30Cb()
const TextBox92Props = useStore((state)=>state["components"]["TextBox92"]);
const TextBox92IoProps = useIoStore((state)=>state["components"]["TextBox92"]);
const TextBox92Cb = useTextBox92Cb()
const TextBox93Props = useStore((state)=>state["components"]["TextBox93"]);
const TextBox93IoProps = useIoStore((state)=>state["components"]["TextBox93"]);
const TextBox93Cb = useTextBox93Cb()
const Image31Props = useStore((state)=>state["components"]["Image31"]);
const Image31IoProps = useIoStore((state)=>state["components"]["Image31"]);
const Image31Cb = useImage31Cb()
const TextBox94Props = useStore((state)=>state["components"]["TextBox94"]);
const TextBox94IoProps = useIoStore((state)=>state["components"]["TextBox94"]);
const TextBox94Cb = useTextBox94Cb()
const TextBox95Props = useStore((state)=>state["components"]["TextBox95"]);
const TextBox95IoProps = useIoStore((state)=>state["components"]["TextBox95"]);
const TextBox95Cb = useTextBox95Cb()
const Image32Props = useStore((state)=>state["components"]["Image32"]);
const Image32IoProps = useIoStore((state)=>state["components"]["Image32"]);
const Image32Cb = useImage32Cb()
const TextBox96Props = useStore((state)=>state["components"]["TextBox96"]);
const TextBox96IoProps = useIoStore((state)=>state["components"]["TextBox96"]);
const TextBox96Cb = useTextBox96Cb()
const TextBox97Props = useStore((state)=>state["components"]["TextBox97"]);
const TextBox97IoProps = useIoStore((state)=>state["components"]["TextBox97"]);
const TextBox97Cb = useTextBox97Cb()
const TextBox98Props = useStore((state)=>state["components"]["TextBox98"]);
const TextBox98IoProps = useIoStore((state)=>state["components"]["TextBox98"]);
const TextBox98Cb = useTextBox98Cb()
const TextBox99Props = useStore((state)=>state["components"]["TextBox99"]);
const TextBox99IoProps = useIoStore((state)=>state["components"]["TextBox99"]);
const TextBox99Cb = useTextBox99Cb()
const TextBox100Props = useStore((state)=>state["components"]["TextBox100"]);
const TextBox100IoProps = useIoStore((state)=>state["components"]["TextBox100"]);
const TextBox100Cb = useTextBox100Cb()
const TextBox101Props = useStore((state)=>state["components"]["TextBox101"]);
const TextBox101IoProps = useIoStore((state)=>state["components"]["TextBox101"]);
const TextBox101Cb = useTextBox101Cb()
const TextBox102Props = useStore((state)=>state["components"]["TextBox102"]);
const TextBox102IoProps = useIoStore((state)=>state["components"]["TextBox102"]);
const TextBox102Cb = useTextBox102Cb()
const TextBox103Props = useStore((state)=>state["components"]["TextBox103"]);
const TextBox103IoProps = useIoStore((state)=>state["components"]["TextBox103"]);
const TextBox103Cb = useTextBox103Cb()
const Image33Props = useStore((state)=>state["components"]["Image33"]);
const Image33IoProps = useIoStore((state)=>state["components"]["Image33"]);
const Image33Cb = useImage33Cb()
const TextBox104Props = useStore((state)=>state["components"]["TextBox104"]);
const TextBox104IoProps = useIoStore((state)=>state["components"]["TextBox104"]);
const TextBox104Cb = useTextBox104Cb()
const TextBox105Props = useStore((state)=>state["components"]["TextBox105"]);
const TextBox105IoProps = useIoStore((state)=>state["components"]["TextBox105"]);
const TextBox105Cb = useTextBox105Cb()
const TextBox106Props = useStore((state)=>state["components"]["TextBox106"]);
const TextBox106IoProps = useIoStore((state)=>state["components"]["TextBox106"]);
const TextBox106Cb = useTextBox106Cb()
const Image34Props = useStore((state)=>state["components"]["Image34"]);
const Image34IoProps = useIoStore((state)=>state["components"]["Image34"]);
const Image34Cb = useImage34Cb()
const TextBox107Props = useStore((state)=>state["components"]["TextBox107"]);
const TextBox107IoProps = useIoStore((state)=>state["components"]["TextBox107"]);
const TextBox107Cb = useTextBox107Cb()
const TextBox108Props = useStore((state)=>state["components"]["TextBox108"]);
const TextBox108IoProps = useIoStore((state)=>state["components"]["TextBox108"]);
const TextBox108Cb = useTextBox108Cb()
const TextBox109Props = useStore((state)=>state["components"]["TextBox109"]);
const TextBox109IoProps = useIoStore((state)=>state["components"]["TextBox109"]);
const TextBox109Cb = useTextBox109Cb()
const Image35Props = useStore((state)=>state["components"]["Image35"]);
const Image35IoProps = useIoStore((state)=>state["components"]["Image35"]);
const Image35Cb = useImage35Cb()
const TextBox110Props = useStore((state)=>state["components"]["TextBox110"]);
const TextBox110IoProps = useIoStore((state)=>state["components"]["TextBox110"]);
const TextBox110Cb = useTextBox110Cb()
const TextBox111Props = useStore((state)=>state["components"]["TextBox111"]);
const TextBox111IoProps = useIoStore((state)=>state["components"]["TextBox111"]);
const TextBox111Cb = useTextBox111Cb()
const TextBox112Props = useStore((state)=>state["components"]["TextBox112"]);
const TextBox112IoProps = useIoStore((state)=>state["components"]["TextBox112"]);
const TextBox112Cb = useTextBox112Cb()
const Image36Props = useStore((state)=>state["components"]["Image36"]);
const Image36IoProps = useIoStore((state)=>state["components"]["Image36"]);
const Image36Cb = useImage36Cb()
const TextBox113Props = useStore((state)=>state["components"]["TextBox113"]);
const TextBox113IoProps = useIoStore((state)=>state["components"]["TextBox113"]);
const TextBox113Cb = useTextBox113Cb()
const TextBox114Props = useStore((state)=>state["components"]["TextBox114"]);
const TextBox114IoProps = useIoStore((state)=>state["components"]["TextBox114"]);
const TextBox114Cb = useTextBox114Cb()
const TextBox115Props = useStore((state)=>state["components"]["TextBox115"]);
const TextBox115IoProps = useIoStore((state)=>state["components"]["TextBox115"]);
const TextBox115Cb = useTextBox115Cb()
const Image37Props = useStore((state)=>state["components"]["Image37"]);
const Image37IoProps = useIoStore((state)=>state["components"]["Image37"]);
const Image37Cb = useImage37Cb()
const TextBox116Props = useStore((state)=>state["components"]["TextBox116"]);
const TextBox116IoProps = useIoStore((state)=>state["components"]["TextBox116"]);
const TextBox116Cb = useTextBox116Cb()
const TextBox117Props = useStore((state)=>state["components"]["TextBox117"]);
const TextBox117IoProps = useIoStore((state)=>state["components"]["TextBox117"]);
const TextBox117Cb = useTextBox117Cb()
const TextBox118Props = useStore((state)=>state["components"]["TextBox118"]);
const TextBox118IoProps = useIoStore((state)=>state["components"]["TextBox118"]);
const TextBox118Cb = useTextBox118Cb()
const Image38Props = useStore((state)=>state["components"]["Image38"]);
const Image38IoProps = useIoStore((state)=>state["components"]["Image38"]);
const Image38Cb = useImage38Cb()
const Flex58Props = useStore((state)=>state["components"]["Flex58"]);
const Flex58IoProps = useIoStore((state)=>state["components"]["Flex58"]);
const Flex58Cb = useFlex58Cb()
const Flex59Props = useStore((state)=>state["components"]["Flex59"]);
const Flex59IoProps = useIoStore((state)=>state["components"]["Flex59"]);
const Flex59Cb = useFlex59Cb()
const Flex60Props = useStore((state)=>state["components"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["components"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const TextBox119Props = useStore((state)=>state["components"]["TextBox119"]);
const TextBox119IoProps = useIoStore((state)=>state["components"]["TextBox119"]);
const TextBox119Cb = useTextBox119Cb()
const TextBox120Props = useStore((state)=>state["components"]["TextBox120"]);
const TextBox120IoProps = useIoStore((state)=>state["components"]["TextBox120"]);
const TextBox120Cb = useTextBox120Cb()
const TextBox121Props = useStore((state)=>state["components"]["TextBox121"]);
const TextBox121IoProps = useIoStore((state)=>state["components"]["TextBox121"]);
const TextBox121Cb = useTextBox121Cb()
const Image39Props = useStore((state)=>state["components"]["Image39"]);
const Image39IoProps = useIoStore((state)=>state["components"]["Image39"]);
const Image39Cb = useImage39Cb()
const TextBox122Props = useStore((state)=>state["components"]["TextBox122"]);
const TextBox122IoProps = useIoStore((state)=>state["components"]["TextBox122"]);
const TextBox122Cb = useTextBox122Cb()
const TextBox123Props = useStore((state)=>state["components"]["TextBox123"]);
const TextBox123IoProps = useIoStore((state)=>state["components"]["TextBox123"]);
const TextBox123Cb = useTextBox123Cb()
const TextBox124Props = useStore((state)=>state["components"]["TextBox124"]);
const TextBox124IoProps = useIoStore((state)=>state["components"]["TextBox124"]);
const TextBox124Cb = useTextBox124Cb()
const Image40Props = useStore((state)=>state["components"]["Image40"]);
const Image40IoProps = useIoStore((state)=>state["components"]["Image40"]);
const Image40Cb = useImage40Cb()
const TextBox125Props = useStore((state)=>state["components"]["TextBox125"]);
const TextBox125IoProps = useIoStore((state)=>state["components"]["TextBox125"]);
const TextBox125Cb = useTextBox125Cb()
const TextBox126Props = useStore((state)=>state["components"]["TextBox126"]);
const TextBox126IoProps = useIoStore((state)=>state["components"]["TextBox126"]);
const TextBox126Cb = useTextBox126Cb()
const TextBox127Props = useStore((state)=>state["components"]["TextBox127"]);
const TextBox127IoProps = useIoStore((state)=>state["components"]["TextBox127"]);
const TextBox127Cb = useTextBox127Cb()
const Image41Props = useStore((state)=>state["components"]["Image41"]);
const Image41IoProps = useIoStore((state)=>state["components"]["Image41"]);
const Image41Cb = useImage41Cb()
const TextBox128Props = useStore((state)=>state["components"]["TextBox128"]);
const TextBox128IoProps = useIoStore((state)=>state["components"]["TextBox128"]);
const TextBox128Cb = useTextBox128Cb()
const TextBox129Props = useStore((state)=>state["components"]["TextBox129"]);
const TextBox129IoProps = useIoStore((state)=>state["components"]["TextBox129"]);
const TextBox129Cb = useTextBox129Cb()
const TextBox130Props = useStore((state)=>state["components"]["TextBox130"]);
const TextBox130IoProps = useIoStore((state)=>state["components"]["TextBox130"]);
const TextBox130Cb = useTextBox130Cb()
const Image42Props = useStore((state)=>state["components"]["Image42"]);
const Image42IoProps = useIoStore((state)=>state["components"]["Image42"]);
const Image42Cb = useImage42Cb()
const TextBox131Props = useStore((state)=>state["components"]["TextBox131"]);
const TextBox131IoProps = useIoStore((state)=>state["components"]["TextBox131"]);
const TextBox131Cb = useTextBox131Cb()
const TextBox132Props = useStore((state)=>state["components"]["TextBox132"]);
const TextBox132IoProps = useIoStore((state)=>state["components"]["TextBox132"]);
const TextBox132Cb = useTextBox132Cb()
const TextBox133Props = useStore((state)=>state["components"]["TextBox133"]);
const TextBox133IoProps = useIoStore((state)=>state["components"]["TextBox133"]);
const TextBox133Cb = useTextBox133Cb()
const Image43Props = useStore((state)=>state["components"]["Image43"]);
const Image43IoProps = useIoStore((state)=>state["components"]["Image43"]);
const Image43Cb = useImage43Cb()
const TextBox134Props = useStore((state)=>state["components"]["TextBox134"]);
const TextBox134IoProps = useIoStore((state)=>state["components"]["TextBox134"]);
const TextBox134Cb = useTextBox134Cb()
const TextBox135Props = useStore((state)=>state["components"]["TextBox135"]);
const TextBox135IoProps = useIoStore((state)=>state["components"]["TextBox135"]);
const TextBox135Cb = useTextBox135Cb()
const TextBox136Props = useStore((state)=>state["components"]["TextBox136"]);
const TextBox136IoProps = useIoStore((state)=>state["components"]["TextBox136"]);
const TextBox136Cb = useTextBox136Cb()
const Image44Props = useStore((state)=>state["components"]["Image44"]);
const Image44IoProps = useIoStore((state)=>state["components"]["Image44"]);
const Image44Cb = useImage44Cb()
const Flex66Props = useStore((state)=>state["components"]["Flex66"]);
const Flex66IoProps = useIoStore((state)=>state["components"]["Flex66"]);
const Flex66Cb = useFlex66Cb()
const Flex67Props = useStore((state)=>state["components"]["Flex67"]);
const Flex67IoProps = useIoStore((state)=>state["components"]["Flex67"]);
const Flex67Cb = useFlex67Cb()
const Flex68Props = useStore((state)=>state["components"]["Flex68"]);
const Flex68IoProps = useIoStore((state)=>state["components"]["Flex68"]);
const Flex68Cb = useFlex68Cb()
const TextBox137Props = useStore((state)=>state["components"]["TextBox137"]);
const TextBox137IoProps = useIoStore((state)=>state["components"]["TextBox137"]);
const TextBox137Cb = useTextBox137Cb()
const TextBox138Props = useStore((state)=>state["components"]["TextBox138"]);
const TextBox138IoProps = useIoStore((state)=>state["components"]["TextBox138"]);
const TextBox138Cb = useTextBox138Cb()
const TextBox139Props = useStore((state)=>state["components"]["TextBox139"]);
const TextBox139IoProps = useIoStore((state)=>state["components"]["TextBox139"]);
const TextBox139Cb = useTextBox139Cb()
const Image45Props = useStore((state)=>state["components"]["Image45"]);
const Image45IoProps = useIoStore((state)=>state["components"]["Image45"]);
const Image45Cb = useImage45Cb()
const TextBox140Props = useStore((state)=>state["components"]["TextBox140"]);
const TextBox140IoProps = useIoStore((state)=>state["components"]["TextBox140"]);
const TextBox140Cb = useTextBox140Cb()
const TextBox141Props = useStore((state)=>state["components"]["TextBox141"]);
const TextBox141IoProps = useIoStore((state)=>state["components"]["TextBox141"]);
const TextBox141Cb = useTextBox141Cb()
const TextBox142Props = useStore((state)=>state["components"]["TextBox142"]);
const TextBox142IoProps = useIoStore((state)=>state["components"]["TextBox142"]);
const TextBox142Cb = useTextBox142Cb()
const Image46Props = useStore((state)=>state["components"]["Image46"]);
const Image46IoProps = useIoStore((state)=>state["components"]["Image46"]);
const Image46Cb = useImage46Cb()
const TextBox143Props = useStore((state)=>state["components"]["TextBox143"]);
const TextBox143IoProps = useIoStore((state)=>state["components"]["TextBox143"]);
const TextBox143Cb = useTextBox143Cb()
const TextBox144Props = useStore((state)=>state["components"]["TextBox144"]);
const TextBox144IoProps = useIoStore((state)=>state["components"]["TextBox144"]);
const TextBox144Cb = useTextBox144Cb()
const TextBox145Props = useStore((state)=>state["components"]["TextBox145"]);
const TextBox145IoProps = useIoStore((state)=>state["components"]["TextBox145"]);
const TextBox145Cb = useTextBox145Cb()
const Image47Props = useStore((state)=>state["components"]["Image47"]);
const Image47IoProps = useIoStore((state)=>state["components"]["Image47"]);
const Image47Cb = useImage47Cb()
const Flex83Props = useStore((state)=>state["components"]["Flex83"]);
const Flex83IoProps = useIoStore((state)=>state["components"]["Flex83"]);
const Flex83Cb = useFlex83Cb()
const Flex84Props = useStore((state)=>state["components"]["Flex84"]);
const Flex84IoProps = useIoStore((state)=>state["components"]["Flex84"]);
const Flex84Cb = useFlex84Cb()
const TextBox164Props = useStore((state)=>state["components"]["TextBox164"]);
const TextBox164IoProps = useIoStore((state)=>state["components"]["TextBox164"]);
const TextBox164Cb = useTextBox164Cb()
const TextBox165Props = useStore((state)=>state["components"]["TextBox165"]);
const TextBox165IoProps = useIoStore((state)=>state["components"]["TextBox165"]);
const TextBox165Cb = useTextBox165Cb()
const Flex85Props = useStore((state)=>state["components"]["Flex85"]);
const Flex85IoProps = useIoStore((state)=>state["components"]["Flex85"]);
const Flex85Cb = useFlex85Cb()
const TextBox166Props = useStore((state)=>state["components"]["TextBox166"]);
const TextBox166IoProps = useIoStore((state)=>state["components"]["TextBox166"]);
const TextBox166Cb = useTextBox166Cb()
const TextBox167Props = useStore((state)=>state["components"]["TextBox167"]);
const TextBox167IoProps = useIoStore((state)=>state["components"]["TextBox167"]);
const TextBox167Cb = useTextBox167Cb()
const Flex86Props = useStore((state)=>state["components"]["Flex86"]);
const Flex86IoProps = useIoStore((state)=>state["components"]["Flex86"]);
const Flex86Cb = useFlex86Cb()
const Image54Props = useStore((state)=>state["components"]["Image54"]);
const Image54IoProps = useIoStore((state)=>state["components"]["Image54"]);
const Image54Cb = useImage54Cb()
const Flex87Props = useStore((state)=>state["components"]["Flex87"]);
const Flex87IoProps = useIoStore((state)=>state["components"]["Flex87"]);
const Flex87Cb = useFlex87Cb()
const Flex88Props = useStore((state)=>state["components"]["Flex88"]);
const Flex88IoProps = useIoStore((state)=>state["components"]["Flex88"]);
const Flex88Cb = useFlex88Cb()
const Flex89Props = useStore((state)=>state["components"]["Flex89"]);
const Flex89IoProps = useIoStore((state)=>state["components"]["Flex89"]);
const Flex89Cb = useFlex89Cb()
const TextBox168Props = useStore((state)=>state["components"]["TextBox168"]);
const TextBox168IoProps = useIoStore((state)=>state["components"]["TextBox168"]);
const TextBox168Cb = useTextBox168Cb()
const TextBox169Props = useStore((state)=>state["components"]["TextBox169"]);
const TextBox169IoProps = useIoStore((state)=>state["components"]["TextBox169"]);
const TextBox169Cb = useTextBox169Cb()
const Flex90Props = useStore((state)=>state["components"]["Flex90"]);
const Flex90IoProps = useIoStore((state)=>state["components"]["Flex90"]);
const Flex90Cb = useFlex90Cb()
const Image55Props = useStore((state)=>state["components"]["Image55"]);
const Image55IoProps = useIoStore((state)=>state["components"]["Image55"]);
const Image55Cb = useImage55Cb()
const TextBox170Props = useStore((state)=>state["components"]["TextBox170"]);
const TextBox170IoProps = useIoStore((state)=>state["components"]["TextBox170"]);
const TextBox170Cb = useTextBox170Cb()
const TextBox171Props = useStore((state)=>state["components"]["TextBox171"]);
const TextBox171IoProps = useIoStore((state)=>state["components"]["TextBox171"]);
const TextBox171Cb = useTextBox171Cb()
const TextBox172Props = useStore((state)=>state["components"]["TextBox172"]);
const TextBox172IoProps = useIoStore((state)=>state["components"]["TextBox172"]);
const TextBox172Cb = useTextBox172Cb()
const TextBox173Props = useStore((state)=>state["components"]["TextBox173"]);
const TextBox173IoProps = useIoStore((state)=>state["components"]["TextBox173"]);
const TextBox173Cb = useTextBox173Cb()
const Image56Props = useStore((state)=>state["components"]["Image56"]);
const Image56IoProps = useIoStore((state)=>state["components"]["Image56"]);
const Image56Cb = useImage56Cb()
const Flex91Props = useStore((state)=>state["components"]["Flex91"]);
const Flex91IoProps = useIoStore((state)=>state["components"]["Flex91"]);
const Flex91Cb = useFlex91Cb()
const Flex92Props = useStore((state)=>state["components"]["Flex92"]);
const Flex92IoProps = useIoStore((state)=>state["components"]["Flex92"]);
const Flex92Cb = useFlex92Cb()
const TextBox174Props = useStore((state)=>state["components"]["TextBox174"]);
const TextBox174IoProps = useIoStore((state)=>state["components"]["TextBox174"]);
const TextBox174Cb = useTextBox174Cb()

  return (<>
  <Flex1 {...Flex87Props} {...Flex87Cb} {...Flex87IoProps}>
<Flex1 {...Flex88Props} {...Flex88Cb} {...Flex88IoProps}>
<TextBox1 {...TextBox170Props} {...TextBox170Cb} {...TextBox170IoProps}/>
<TextBox1 {...TextBox171Props} {...TextBox171Cb} {...TextBox171IoProps}/>
</Flex1>
<Flex1 {...Flex89Props} {...Flex89Cb} {...Flex89IoProps}>
<Flex1 {...Flex90Props} {...Flex90Cb} {...Flex90IoProps}>
<TextBox1 {...TextBox168Props} {...TextBox168Cb} {...TextBox168IoProps}/>
<TextBox1 {...TextBox169Props} {...TextBox169Cb} {...TextBox169IoProps}/>
</Flex1>
<Image1 {...Image55Props} {...Image55Cb} {...Image55IoProps}/>
</Flex1>
<TextBox1 {...TextBox174Props} {...TextBox174Cb} {...TextBox174IoProps}/>
<Flex1 {...Flex92Props} {...Flex92Cb} {...Flex92IoProps}>
<Flex1 {...Flex91Props} {...Flex91Cb} {...Flex91IoProps}>
<TextBox1 {...TextBox173Props} {...TextBox173Cb} {...TextBox173IoProps}/>
<TextBox1 {...TextBox172Props} {...TextBox172Cb} {...TextBox172IoProps}/>
</Flex1>
<Image1 {...Image56Props} {...Image56Cb} {...Image56IoProps}/>
</Flex1>
</Flex1>
  </>);
}
