/* Default imports */

// Code...
import {Link} from '@inertiajs/react';
import style from './Paginate.module.scss';

function RawHTML({ children }) {
    return <div dangerouslySetInnerHTML={{ __html: children }} />;
}
export const Paginate = ({recipes}) => {
    return (
        <div className={style.list}>
            {recipes.links.map((el,idx) => <Link key={idx}   className={`${el.active ? style.active : ''} ${style.link}`} href={el.url}><span><RawHTML>{el.label}</RawHTML></span></Link>)}
        </div>
    );
};
