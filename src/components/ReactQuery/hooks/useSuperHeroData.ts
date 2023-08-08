import axios from "axios";
import { useQuery, QueryFunctionContext, useQueryClient } from "react-query";
import { IHero } from "../interfaces";

interface ICachedHeroes {
  data: IHero[];
}

function fetchSuperHero({ queryKey }: QueryFunctionContext) {
  const heroId = queryKey[1];
  return axios.get<IHero>(`http://localhost:4000/superheroes/${heroId}`);
}

export const useSuperHeroData = (heroId: string) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["super-hero", heroId],
    queryFn: fetchSuperHero,
    initialData: () => {
      const state = queryClient.getQueryData<ICachedHeroes>(["super-heroes"]);
      const hero = state?.data.find((hero) => hero.id === parseInt(heroId));

      if (hero) {
        console.log("I FOUND IT!!!!", hero);
        return {
          data: hero,
        };
      } else {
        return undefined;
      }
    },
  });
};
