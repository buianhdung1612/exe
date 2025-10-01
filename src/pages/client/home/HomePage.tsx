import { Footer } from "../../../components/client/layouts/Footer"
import { Section1 } from "../../../components/client/sections/home/Section1"
import { Section2 } from "../../../components/client/sections/home/Section2"
import { Section3 } from "../../../components/client/sections/home/Section3"
import { Section4 } from "../../../components/client/sections/home/Section4"
import { Section5 } from "../../../components/client/sections/home/Section5"
import { Section6 } from "../../../components/client/sections/home/Section6"
import { Section7 } from "../../../components/client/sections/home/Section7"
import { Section8 } from "../../../components/client/sections/home/Section8"


export const HomePage = () => {
    return (
        <>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Footer />
        </>
    )
}