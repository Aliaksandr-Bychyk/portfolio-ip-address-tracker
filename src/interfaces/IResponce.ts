interface IResponce {
  status: 'success' | 'fail';
  message?: string;
  city: string;
  country: string;
  isp: string;
  query: string;
  timezone: string;
  zip: string;
}

export default IResponce;
