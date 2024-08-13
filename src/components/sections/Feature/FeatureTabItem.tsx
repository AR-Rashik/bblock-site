import React from "react";
import Image from "next/image";

type FeatureTab = {
  id: string;
  title: string;
  desc1: string;
  desc2: string;
  image: string;
  imageDark: string;
};

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, image, imageDark } = featureTab;

  return (
    <>
      <div className="flex items-center gap-8 px-24 lg:gap-20">
        <div className="md:w-1/2">
          <h2 className="mb-4 text-3xl font-bold leading-tight text-foreground xl:text-5xl ">
            {title}
          </h2>
          <p className="mb-5 text-lg font-medium text-muted-foreground">
            {desc1}
          </p>
          <p className="w-11/12 text-lg font-medium text-muted-foreground">
            {desc2}
          </p>
        </div>
        <div className="relative mx-auto hidden aspect-[562/366] max-w-[450px] md:block md:w-1/2">
          <Image src={image} alt={title} fill className="dark:hidden" />
          <Image
            src={imageDark}
            alt={title}
            fill
            className="hidden dark:block"
          />
        </div>
      </div>
    </>
  );
};

export default FeaturesTabItem;
