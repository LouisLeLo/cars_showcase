// Chức năng tìm kiếm là 1 sự kiện của trình duyệt nên sử dụng  'use client'
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import SearchManufacturer from "./SearchManufacturer";
import Image from 'next/image';

// "SearchButton" chỉ sử dụng cho việc tìm kiếm nên không nhất thiết phải tạo 1 component
const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
        <Image
            src='/magnifying-glass.svg'
            alt='magnifying glass'
            width={40}
            height={40}
            className='object-contain'
        />
    </button>
)

const SearchBar = ({ setManufacturer, setModel }) => {
    const [searchManufacturer, setSearchManufacturer] = useState('');

    const [searchModel, setSearchModel] = useState('');

    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (searchManufacturer === '' && searchModel === '') {
            return alert('Please fill in the search bar');
        }

        setModel(searchModel);

        setManufacturer(searchManufacturer);
    }

    // const updateSearchParams = (searchmodel: string, searchmanufacturer: string) => {
    //     const searchParams = new URLSearchParams(window.location.search);

    //     // Nếu như có searchmodel thì set cho searchmodel, và ngược lại nếu như ko có searchmodel thì xoá searchmodel trước đó
    //     if (searchmodel) {
    //         searchParams.set('searchmodel', searchmodel);
    //     } else {
    //         searchParams.delete('searchmodel');
    //     }

    //     // Nếu như có searchmanufacturer thì set cho searchmanufacturer, và ngược lại nếu như ko có searchmanufacturer thì xoá searchmanufacturer trước đó
    //     if (searchmanufacturer) {
    //         searchParams.set('searchmanufacturer', searchmanufacturer);
    //     } else {
    //         searchParams.delete('searchmanufacturer');
    //     }

    //     const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    //     router.push(newPathname)
    // }

    return (
        <form action="" className='searchbar' onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer
                    selected={searchManufacturer}
                    setSelected={setSearchManufacturer}
                />

                <SearchButton
                    otherClasses='sm:hidden'
                />
            </div>

            <div className='searchbar__item'>
                <Image
                    src='/model-icon.png'
                    width={25}
                    height={25}
                    className='absolute w-[20px] h-[20px] ml-4'
                    alt='car searchmodel'
                />

                <input
                    type="text"
                    name='searchmodel'
                    value={searchModel}
                    onChange={(e) => setSearchModel(e.target.value)}
                    placeholder='Tiguan'
                    className='searchbar__input'
                />

                <SearchButton
                    otherClasses='sm:hidden'
                />
            </div>

            <SearchButton
                otherClasses='max-sm:hidden'
            />
        </form>
    )
}

export default SearchBar