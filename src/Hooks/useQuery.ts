import { useRouter } from "next/router";

export const useQuery = () => {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const addquery = (param: any) => {
    router.push({ query: { ...router.query, ...param } });
  };
  const removeQuery = (key: string) => {
    const query = router.query;
    delete query[key];
    router.push({ query });
  };

  return { addquery, removeQuery };
};
