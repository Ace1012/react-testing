import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { IHero } from "../interfaces";
import { request } from "../utils/axios-utils";

interface IUseSuperHeroesData {
  queryKey: string;
}

function fetchSuperHeroes() {
  return axios.get<IHero[]>("http://localhost:4000/superheroes");
  // return request({ url: "/superheroes" });
}

function addSuperHero(hero: Omit<IHero, "id">) {
  return axios.post("http://localhost:4000/superheroes", hero);
  // return request({ url: `/superheroes`, method: "post", data: hero });
}

export const useSuperHeroesData = ({ queryKey }: IUseSuperHeroesData) => {
  return useQuery({
    queryKey,
    queryFn: fetchSuperHeroes,
    keepPreviousData: true,
  });
};

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addSuperHero,
    onMutate: async (newHero) => {
      await queryClient.cancelQueries("super-heroes");
      const previousHeroData =
        queryClient.getQueryData<IHero[]>("super-heroes");
      queryClient.setQueryData("super-heroes", (oldQueryData: any) => {
        return {
          ...oldQueryData,
          data: [
            ...oldQueryData.data,
            {
              id: oldQueryData?.data?.lenegth + 1,
              ...newHero,
            },
          ],
        };
      });
      return {
        previousHeroData,
      };
    },
    onError: (_error, _hero, context) => {
      queryClient.setQueryData("super-heroes", context?.previousHeroData);
    },
    onSettled: () => {
      queryClient.invalidateQueries("super-heroes");
    },
    // onSuccess: (data) => {
    //   // queryClient.invalidateQueries("super-heroes");
    //   queryClient.setQueryData("super-heroes", (oldQueryData: any) => {
    //     return {
    //       ...oldQueryData,
    //       data: [...oldQueryData.data, data.data],
    //     };
    //   });
    // },
  });
};
