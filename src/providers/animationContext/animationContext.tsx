import { createContext } from "react";
import { IAnimationProviderProps } from "./types";
import { AnimationControls, useAnimation } from "framer-motion";

interface IAnimationContext {
  useContainerAnimation: () => AnimationControls;
  useDevAnimation: () => AnimationControls;
}

export const AnimationContext = createContext({} as IAnimationContext);

export const AnimationProvider = ({ children }: IAnimationProviderProps) => {

  const useContainerAnimation = () => {
    return useAnimation();
  };

  const useDevAnimation = () => {
    return useAnimation();
  };

  return (
    <AnimationContext.Provider value={{
      useContainerAnimation,
      useDevAnimation
    }}>
      {children}
    </AnimationContext.Provider>
  )
}