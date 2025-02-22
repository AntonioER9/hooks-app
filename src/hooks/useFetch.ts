import { useEffect, useState } from "react";

interface Response {
  data: string;
  isLoading: boolean;
  hasError: string;
}
export const useFetch = (url: string) => {

  // const [state, setState] = useState<Response>({
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  })


  const getFetch = async () => {

    setState({
      ...state,
      isLoading: true,
    });

    const resp = await fetch(url);
    const data = await resp.json();

    setState({
      data,
      isLoading: false,
      hasError: null,
    });
  }

  useEffect(() => {
    getFetch();
  }, [url])


  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
}