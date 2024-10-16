import { Outlet, Link, useLoaderData } from 'react-router-dom';
import s from'./Root.module.css'
import { getProducts } from '../../untils/forStorage';


export async function loader() {
    const products = await getProducts();
    return {products};
}

export const Root = () => {
    return (
        <>
        <nav>
            <Link to={'/products/1'}>Product1</Link>
            <Link to={'/prodects/2'}>Product2</Link>
        </nav>
        <Outlet />
        </>
    )
};