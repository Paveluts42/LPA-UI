export const useClasses = (classes:string[] | undefined[]) => classes.join(' ');

export const useRandomString = (lengthString:number = 6) => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < lengthString; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
};
