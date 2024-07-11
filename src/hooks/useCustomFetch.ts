export const customFetch = async (url: string, opt: any = {}) => {
  return (await fetch(url, opt)
    .then(async (res) => {
      if (res.ok)
        return res.json().then((response: any) => {
          return response;
        });
    })
    .catch((err) => {
      throw Error(`${url} Error: ${err.message}`);
    })
  );
};
