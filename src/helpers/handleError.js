import { redirect } from 'next/navigation';

export const handleErrorFetching = (cb,errorPage = '/404') => {
    return (param) => cb(param).catch((err) => redirect(errorPage))
}