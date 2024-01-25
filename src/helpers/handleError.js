import { redirect } from 'next/navigation';

export const handleErrorFetching = (cb) => {
    return (param) => cb(param).catch((err) => redirect('/404'))
}