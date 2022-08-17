export const MONTHS = ["January", "February", "March", "April", 
"May", "June", "July", "August", "September", "October", 
"November", "December"];

export const formatterIDR = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0
});

export const currencyFormatter = (value:number)=>`Rp${formatterIDR.format(value).replace('Rp', '').trim()}`

export const dateFormat = (inputDate:string) => {
  let format =  'dd MM yyyy'
  const date = new Date(inputDate);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();    

  format = format.replace("MM", MONTHS[month]);        
  format = format.replace("yyyy", year.toString());
  format = format.replace("dd", day.toString());

  return format;
}