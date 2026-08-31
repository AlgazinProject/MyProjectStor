import React from 'react';
import { Link } from 'react-router-dom';
import './Brand.scss'

const Brand = () => {
    // Замени массив в Brand.jsx для красоты контента:
const brands = [
    {
        id: 1,
        name: 'Stone Island',
        imgSrc: 'src/assets/icons/stone-island-brands.svg',
        founded: 'Год основания — 1982',
        from: 'Страна: Италия',
        decription: 'Культовый итальянский бренд, совершивший революцию в индустрии благодаря уникальным методам окрашивания тканей и технологичным материалам.'
    },
    {
        id: 2,
        name: 'The North Face',
        imgSrc: 'src/assets/icons/the-north-face-brands.svg',
        founded: 'Год основания — 1966',
        from: 'Страна: США',
        decription: 'Легендарный мировой бренд активной одежды и снаряжения, создающий экипировку с акцентом на абсолютную защиту от суровых погодных условий.'
    },
    {
        id: 3,
        name: 'Lyle & Scott',
        imgSrc: 'src/assets/icons/bsh-lyle-and-scott-brands.svg',
        founded: 'Год основания — 1874',
        from: 'Страна: Шотландия',
        decription: 'Премиальный шотландский бренд с золотым орлом на логотипе, сочетающий в себе многолетние традиции трикотажного мастерства и casual-эстетику.'
    }
        // {
        //     id: 1,
        //     name: 'Stone Island',
        //     imgSrc: 'src/assets/icons/stone-island-brands.svg',
        //     founded: 'Год основания — 1966',
        //     from: 'Страна: США',
        //     decription: 'Легендарный бренд активной одежды и снаряжения, с акцентом на технологии и защиту от непогоды.'
        // },
        // {
        //     id: 2,
        //     name: 'The North Face',
        //     imgSrc: 'src/assets/icons/the-north-face-brands.svg',
        //     founded: 'Год основания — 1966',
        //     from: 'Страна: США',
        //     decription: 'Легендарный бренд активной одежды и снаряжения, с акцентом на технологии и защиту от непогоды.'
        // },
        // {
        //     id: 3,
        //     name: 'Lyle & Scott',
        //     imgSrc: 'src/assets/icons/bsh-lyle-and-scott-brands.svg',
        //     founded: 'Год основания — 1966',
        //     from: 'Страна: США',
        //     decription: 'Легендарный бренд активной одежды и снаряжения, с акцентом на технологии и защиту от непогоды.'
        // },
    ];
    return (
        <section className="brands container">
            <h1 className="brands__title">Наши Бренды</h1>
            <div className="brands__body">
                <ul className='brands__list'>
                    {brands.map((brand) =>

                        <li key={brand.id} className='brands__item'>
                            <Link className='brands__link' to={`/catalog/clothing?brand=${brand.name}`}>
                                <img className='brands__icon' src={brand.imgSrc} alt={brand.name} />
                                <div className="brands__decription">
                                    <p className='brands__name'>{brand.name}</p>
                                    <p className='brands__founded'>{brand.founded}</p>
                                    <p className='brands__from'>{brand.from}</p>
                                    <p className='brands__text'>{brand.decription}</p>
                                </div>

                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </section>
    );
};

export default Brand;
