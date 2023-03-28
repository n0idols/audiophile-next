import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function useGetHeadphone(headphoneId) {
  return useQuery(
    ["headphone", headphoneId],
    () =>
      axios.get(
        `${process.env.NEXT_PUBLIC_API_ROUTE}/api/headphones/${headphoneId}`
      ),
    {
      refetchOnWindowFocus: false,
    }
  );
}
