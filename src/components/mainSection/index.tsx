import { useContext, useEffect } from "react";
import { ContainerCentralizer } from "../../styles/container";
import { TitleAlternative, TitleOne, TitleThree } from "../../styles/typograph";
import { Arrow } from "./arrow";
import { StyledDev, StyledMainSection, StyledPhoto } from "./style";
import { CgCodeSlash } from "react-icons/cg";
import { AnimationContext } from "../../providers/animationContext/animationContext";
import { containerVariants, textVariants, devVariants } from "../../styles/animation";
import photoPerfil from "../../assets/foto-perfil.png";

export const MainSection = () => {
    const { useContainerAnimation, useDevAnimation } = useContext(AnimationContext);
    const containerAnimation = useContainerAnimation();
    const devAnimation = useDevAnimation();

    const startAnimations = async () => {
        await containerAnimation.start("animate");
        await devAnimation.start("animate");
    };

    useEffect(() => {
        startAnimations();
    }, []);

    return (
        <ContainerCentralizer>
            <StyledMainSection
                initial="initial"
                animate={containerAnimation}
                variants={containerVariants}
            >
                <StyledPhoto>
                    <img src={photoPerfil} alt="Foto de perfil" style={{
                        width: "100%",
                        height: "100%"
                    }} />
                </StyledPhoto>
                <TitleOne size="large">
                    Olá, <br /> me chamo <TitleAlternative variants={textVariants} size="large" color="alternative">Gabriel Madeira</TitleAlternative>
                </TitleOne>
                <StyledDev
                    initial="initial"
                    animate={devAnimation}
                    variants={devVariants}
                >
                    <TitleThree variants={textVariants} size="small">
                        -Desenvolvedor web
                    </TitleThree>
                    <CgCodeSlash style={{
                        color: "var(--color-white)"
                    }} />
                </StyledDev>
                <Arrow />
            </StyledMainSection>
        </ContainerCentralizer>
    )
}