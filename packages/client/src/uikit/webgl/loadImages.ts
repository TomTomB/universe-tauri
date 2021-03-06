export const loadImages = <T extends Record<string, string>>(
  imagesToLoad: T,
) => {
  const imagePromises: Promise<{ id: string; image: HTMLImageElement }>[] = [];

  for (const key in imagesToLoad) {
    const assetUrl = imagesToLoad[key];

    const image = new Image();
    imagePromises.push(
      new Promise((resolve, reject) => {
        image.onload = () => resolve({ id: key, image });
        image.onerror = () => reject();
      }),
    );

    image.src = assetUrl;
  }

  return imagePromises;
};
