export interface IPreset {
  primary: string;
  secondary: string;
  tertiary: string;
}

function generateComments(): IRedditComment[] {
  return Array.from({ length: 5 }).map((_, i) => {
    i = i + 1;
    return {
      comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum qui repellat non tempore perferendis. ${i}`,
      replies: [
        {
          comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum qui repellat non tempore perferendis.${i}${
            i + 1
          }`,
          replies: [
            {
              comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum qui repellat non tempore perferendis.${i}${i}${
                i + 1
              }`,
              replies: [],
            },
            {
              comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum qui repellat non tempore perferendis.${i}${i}${
                i + 2
              }`,
              replies: [],
            },
          ],
        },
        {
          comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum qui repellat non tempore perferendis.${i}${
            i + 2
          }`,
          replies: [
            {
              comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum qui repellat non tempore perferendis.${i}${i}${
                i + 1
              }`,
              replies: [],
            },
            {
              comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum qui repellat non tempore perferendis.${i}${i}${
                i + 2
              }`,
              replies: [],
            },
          ],
        },
      ],
    };
  });
}

function randomizeHex() {
  return Math.ceil(Math.random() * 255).toString(16);
}

function randomizeColor() {
  return `#${randomizeHex()}${randomizeHex()}${randomizeHex()}`;
}

function randomizePreset(): IPreset {
  return {
    primary: randomizeColor(),
    secondary: randomizeColor(),
    tertiary: randomizeColor(),
  };
}

export { generateComments, randomizePreset };
