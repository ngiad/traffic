'use client'
import { CookiesProvider } from 'react-cookie';

function Cookies({ children }) {
  return (
    <CookiesProvider>
      {children}
    </CookiesProvider>
  );
}

export default Cookies;